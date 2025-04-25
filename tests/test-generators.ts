import { getChain } from "@src/helpers";
import type { Sablier } from "@src/types";
import { beforeAll, describe, expect, it } from "vitest";
import {
  findContract,
  findZKContract,
  loadBroadcastJSONs,
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
 * @param BD - The type of the broadcast data.
 * @param CD - The type of the contract data.
 */
interface TestConfig<BD, CD> {
  finder: (data: BD[], contractName: string) => CD | null;
  loader: (release: Sablier.Release, chain: Sablier.Chain) => Promise<BD[] | null>;
  validator: (contract: Sablier.Contract, data: CD) => void;
}

function createContractTests<BD, CD>(
  release: Sablier.Release,
  deployment: Sablier.Deployment,
  chain: Sablier.Chain,
  config: TestConfig<BD, CD>,
): void {
  const chainId = deployment.chainId;
  const chainName = chain.name;
  const { finder, loader, validator } = config;

  describe(`${chainName} (ID: ${chainId})`, () => {
    let broadcastData: BD[] | null;

    beforeAll(async () => {
      broadcastData = await loader(release, chain);
    });

    for (const contract of deployment.contracts) {
      it(`validates ${contract.name} deployment`, () => {
        // There are some deployments for which we lack broadcast data. See scripts/missing-broadcasts.ts
        if (!broadcastData) {
          return;
        }
        const contractData = finder(broadcastData, contract.name);
        if (!contractData) {
          throwNotFoundErr(release, chainName, contract.name);
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
    loader: loadBroadcastJSONs,
    finder: findContract,
    validator: validateContract,
  });
}

export function createZKTests(release: Sablier.Release, deployment: Sablier.Deployment, chain: Sablier.Chain): void {
  createContractTests<ZKBroadcastJSON, ZKBroadcastJSON>(release, deployment, chain, {
    loader: loadZKBroadcastJSONs,
    finder: findZKContract,
    validator: validateZKContract,
  });
}

export function createTestSuite(release: Sablier.Release): void {
  // Set the PROTOCOL and VERSION environment variables
  process.env.PROTOCOL = release.protocol;
  process.env.VERSION = release.version;

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
