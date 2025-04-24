import { getChain } from "@src/helpers";
import type { Sablier } from "@src/types";
import _ from "lodash";
import { beforeAll, describe, expect, it } from "vitest";
import { loadBroadcastJSONs, loadZKBroadcastJSONs } from "./loaders";
import type { BroadcastJSON, Contract, ContractReturn, ZKBroadcastJSON } from "./test-types";

// ============================================================================
// Constants
// ============================================================================

const CONTRACT_PREFIX = "contract ";

// ============================================================================
// Shared Utils
// ============================================================================

function findContract(broadcastData: BroadcastJSON[], contractName: string): ContractReturn | null {
  return (
    broadcastData
      .flatMap((d) => _.values(d.returns))
      .find((contractReturn) => contractReturn.internal_type.replace(CONTRACT_PREFIX, "") === contractName) ?? null
  );
}

function findZKContract(zkBroadcastData: ZKBroadcastJSON[], contractName: string): ZKBroadcastJSON | null {
  return zkBroadcastData.find((zkBroadcast) => zkBroadcast.contractName === contractName) ?? null;
}

// ============================================================================
// Shared Validation Functions
// ============================================================================

export function validateContract(contract: Contract, expectedData: ContractReturn): void {
  const address = contract.address.toLowerCase();
  const expectedAddress = expectedData.value.toLowerCase();
  expect(address).toBe(expectedAddress);

  const name = contract.name;
  const expectedName = expectedData.internal_type.replace(CONTRACT_PREFIX, "");
  expect(name).toBe(expectedName);
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

function createContractTests<T, R>(
  release: Sablier.Release,
  deployment: Sablier.Deployment,
  chain: Sablier.Chain,
  config: TestConfig<T, R>,
): void {
  const chainId = deployment.chainId;
  const chainName = chain.name;
  const { title, loader, finder, validator } = config;

  describe(`${title}: ${chainName} (ID: ${chainId})`, () => {
    let broadcastData: T[] | null;

    beforeAll(async () => {
      broadcastData = await loader(release, chain);
    });

    for (const contract of deployment.contracts) {
      it(`validates ${contract.name} ${title.toLowerCase()} deployment`, () => {
        if (!broadcastData) {
          console.info(
            `No broadcasts found for ${release.protocol} ${release.version} on chain ${chainName} (ID: ${chainId})`,
          );
          return;
        }
        const contractData = finder(broadcastData, contract.name);
        if (!contractData) {
          console.info(
            `Contract ${contract.name} not found for ${release.protocol} ${release.version} on chain ${chainName} (ID: ${chainId})`,
          );
          return;
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
  createContractTests<BroadcastJSON, ContractReturn>(release, deployment, chain, {
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
