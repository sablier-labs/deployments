import { getChain } from "@src/helpers";
import type { Sablier } from "@src/types";
import { isLockupV1Release } from "@src/types";
import { beforeAll, describe, expect, it } from "vitest";
import {
  findContract,
  findZKContract,
  loadBroadcastJSON,
  loadZKBroadcastJSONs,
  throwNotFoundErr,
} from "./test-helpers";
import type { BroadcastJSON, ZKBroadcastJSON } from "./test-types";

export function validateContract(contract: Sablier.Contract, expectedContract: Sablier.Contract): void {
  const address = contract.address.toLowerCase();
  const expectedAddress = expectedContract.address.toLowerCase();
  expect(address).toBe(expectedAddress);

  const name = contract.name;
  expect(name).toBe(expectedContract.name);
}

export function validateZKContract(contract: Sablier.Contract, zkBroadcast: ZKBroadcastJSON): void {
  const address = contract.address.toLowerCase();
  const expectedAddress = zkBroadcast.entries[0].address.toLowerCase();
  expect(address).toBe(expectedAddress);

  const name = contract.name;
  const expectedName = zkBroadcast.contractName;
  expect(name).toBe(expectedName);
}

/**
 * @param BD - Broadcast data.
 * @param CD - Contract data.
 */
interface TestConfig<BD, CD> {
  finder: (data: BD, contractName: string) => CD | null;
  loader: (release: Sablier.Release, chain: Sablier.Chain, releaseModule?: string) => Promise<BD | null>;
  validator: (contract: Sablier.Contract, data: CD) => void;
}

/**
 * Creates a test group for a collection of contracts
 */
function createTestGroup<BD, CD>(
  testGroup: string,
  testConfig: TestConfig<BD, CD>,
  release: Sablier.Release,
  chain: Sablier.Chain,
  contracts: Sablier.Contract[],
  releaseModule?: string,
): void {
  describe(testGroup, () => {
    let broadcastData: BD | null;

    beforeAll(async () => {
      broadcastData = await testConfig.loader(release, chain, releaseModule);
    });

    for (const contract of contracts) {
      it(`validates ${contract.name} deployment`, async () => {
        if (!broadcastData) {
          return;
        }
        // TODO: look at v1.0 deployments for v1.1 Comptroller and NFT Descriptor
        const contractData = testConfig.finder(broadcastData, contract.name);
        if (!contractData) {
          throwNotFoundErr(release, chain.name, contract.name);
        }
        testConfig.validator(contract, contractData);
      });
    }
  });
}

function createContractTests<BD, CD>(
  release: Sablier.Release,
  deployment: Sablier.Deployment,
  chain: Sablier.Chain,
  testConfig: TestConfig<BD, CD>,
): void {
  const chainId = deployment.chainId;
  const chainName = chain.name;

  describe(`${chainName} (ID: ${chainId})`, () => {
    if (isLockupV1Release(release)) {
      const lockupV1Deployment = deployment as Sablier.DeploymentLockupV1;
      createTestGroup("Contracts in core", testConfig, release, chain, lockupV1Deployment.core, "core");
      createTestGroup("Contracts in periphery", testConfig, release, chain, lockupV1Deployment.periphery, "periphery");
    } else {
      createTestGroup("Contracts", testConfig, release, chain, deployment.contracts);
    }
  });
}

export function createStandardTests(
  release: Sablier.Release,
  deployment: Sablier.Deployment,
  chain: Sablier.Chain,
): void {
  createContractTests<BroadcastJSON, Sablier.Contract>(release, deployment, chain, {
    loader: loadBroadcastJSON,
    finder: findContract,
    validator: validateContract,
  });
}

export function createZKTests(release: Sablier.Release, deployment: Sablier.Deployment, chain: Sablier.Chain): void {
  createContractTests<ZKBroadcastJSON[], ZKBroadcastJSON>(release, deployment, chain, {
    loader: loadZKBroadcastJSONs,
    finder: findZKContract,
    validator: validateZKContract,
  });
}

export function createTestSuite(release: Sablier.Release): void {
  describe(`${release.protocol} ${release.version}`, () => {
    for (const deployment of release.deployments) {
      const chain = getChain(deployment.chainId);
      if (chain.isZK) {
        createZKTests(release, deployment, chain);
      } else {
        createStandardTests(release, deployment, chain);
      }
    }
  });
}
