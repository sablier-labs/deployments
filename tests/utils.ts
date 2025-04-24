import { getChain } from "@src/helpers";
import logger from "@src/logger";
import type { Sablier } from "@src/types";
import _ from "lodash";
import { beforeAll, describe, expect, it } from "vitest";
import { loadBroadcastJSONs, loadZKBroadcastJSONs } from "./loaders";
import type { BroadcastJSON, Contract, ZKBroadcastJSON } from "./test-types";

// ============================================================================
// Constants
// ============================================================================

const CONTRACT_PREFIX = "contract ";

// ============================================================================
// Shared Utils
// ============================================================================

function findContract(broadcastData: BroadcastJSON[], contractName: string): Sablier.Contract | null {
  const contract =
    broadcastData
      .flatMap((d) => _.values(d.returns))
      .find((contractReturn) => contractReturn.internal_type.replace(CONTRACT_PREFIX, "") === contractName) ?? null;
  if (contract) {
    return { address: contract.value, name: contract.internal_type.replace(CONTRACT_PREFIX, "") };
  }

  const library =
    broadcastData
      .flatMap((d) => d.libraries)
      .find((l) => {
        const parts = l.split(":");
        // Make sure we have the format path/to/file.sol:ContractName:0xAddress
        if (parts.length !== 3) return false;

        const filePath = parts[0];
        const contractName = parts[1];

        // Ensure the path ends with .sol
        if (!filePath.endsWith(".sol")) return false;

        // Extract the filename from the path
        const filename = filePath.split("/").pop() || "";

        // The filename should be ContractName.sol
        return filename === `${contractName}.sol`;
      }) ?? null;

  if (library) {
    const parts = library.split(":");
    return {
      address: parts[2] as `0x${string}`,
      name: parts[1],
    };
  }

  return null;
}

function findZKContract(zkBroadcastData: ZKBroadcastJSON[], contractName: string): ZKBroadcastJSON | null {
  return zkBroadcastData.find((zkBroadcast) => zkBroadcast.contractName === contractName) ?? null;
}

// ============================================================================
// Shared Validation Functions
// ============================================================================

export function validateContract(contract: Contract, expectedContract: Sablier.Contract): void {
  const address = contract.address.toLowerCase();
  const expectedAddress = expectedContract.address.toLowerCase();
  expect(address).toBe(expectedAddress);

  const name = contract.name;
  expect(name).toBe(expectedContract.name);
}

export function validateZKContract(contract: Contract, zkBroadcast: ZKBroadcastJSON): void {
  const address = contract.address.toLowerCase();
  const expectedAddress = zkBroadcast.entries[0].address.toLowerCase();
  expect(address).toBe(expectedAddress);

  const name = contract.name;
  const expectedName = zkBroadcast.contractName;
  expect(name).toBe(expectedName);
}

// ============================================================================
// Shared Test Suite Generation
// ============================================================================

/**
 * @param BD - The type of the broadcast data.
 * @param CD - The type of the contract data.
 */
interface TestConfig<BD, CD> {
  title: string;
  loader: (release: Sablier.Release, chain: Sablier.Chain) => Promise<BD[] | null>;
  finder: (data: BD[], contractName: string) => CD | null;
  validator: (contract: Contract, data: CD) => void;
}

function createContractTests<BD, CD>(
  release: Sablier.Release,
  deployment: Sablier.Deployment,
  chain: Sablier.Chain,
  config: TestConfig<BD, CD>,
): void {
  const chainId = deployment.chainId;
  const chainName = chain.name;
  const { title, loader, finder, validator } = config;

  describe(`${title}: ${chainName} (ID: ${chainId})`, () => {
    let broadcastData: BD[] | null;

    beforeAll(async () => {
      broadcastData = await loader(release, chain);
    });

    for (const contract of deployment.contracts) {
      it(`validates ${contract.name} ${title.toLowerCase()} deployment`, () => {
        if (!broadcastData) {
          return;
        }
        const contractData = finder(broadcastData, contract.name);
        if (!contractData) {
          const err = `Contract ${contract.name} not found in the broadcasts for chain ${chainName}`;
          logger.error(err);
          throw new Error(err);
        }
        validator(contract, contractData);
      });
    }
  });
}

export function createStandardTests(
  release: Sablier.Release,
  deployment: Sablier.Deployment,
  chain: Sablier.Chain,
): void {
  createContractTests<BroadcastJSON, Sablier.Contract>(release, deployment, chain, {
    title: "Chain",
    loader: loadBroadcastJSONs,
    finder: findContract,
    validator: validateContract,
  });
}

export function createZKTests(release: Sablier.Release, deployment: Sablier.Deployment, chain: Sablier.Chain): void {
  createContractTests<ZKBroadcastJSON, ZKBroadcastJSON>(release, deployment, chain, {
    title: "ZK Chain",
    loader: loadZKBroadcastJSONs,
    finder: findZKContract,
    validator: validateZKContract,
  });
}

export function createModuleTestSuite(release: Sablier.Release): void {
  describe(`${release.protocol} ${release.version}`, () => {
    for (const deployment of release.deployments) {
      const chain = getChain(deployment.chainId);
      createStandardTests(release, deployment, chain);
      createZKTests(release, deployment, chain);
    }
  });
}
