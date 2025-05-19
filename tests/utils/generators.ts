import { getChain } from "@src/chains";
import type { Sablier } from "@src/types";
import _ from "lodash";
import { beforeAll, describe, expect, it } from "vitest";
import { isKnownMissing } from "../setup/missing";
import { findContract, findZKContract, loadBroadcastJSON, loadZKBroadcastJSONs } from "./helpers";
import type { BasicContract, BroadcastJSON, ZKBroadcastJSON } from "./types";

type Validated = {
  [chainId: number]: {
    [contractName: string]: {
      [contractAddress: string]: boolean;
    };
  };
};
const validatedContracts: Validated = {};

export function validateContract(contract: BasicContract, expectedContract: BasicContract): void {
  const address = contract.address.toLowerCase();
  const expectedAddress = expectedContract.address.toLowerCase();
  expect(address).toBe(expectedAddress);

  const name = contract.name;
  expect(name).toBe(expectedContract.name);
}

export function validateZKContract(contract: BasicContract, zkBroadcast: ZKBroadcastJSON): void {
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
type TestConfig<BD, CD> = {
  finder: (data: BD, contractName: string) => CD | null;
  loader: (release: Sablier.Release, chain: Sablier.Chain, componentName?: string) => Promise<BD | null>;
  validator: (contract: BasicContract, data: CD) => void;
};

function createInnerTests<BD, CD>(
  testDescription: string,
  testConfig: TestConfig<BD, CD>,
  release: Sablier.Release,
  chain: Sablier.Chain,
  contracts: BasicContract[],
  componentName?: string,
): void {
  describe(testDescription, () => {
    let broadcastData: BD | null;

    beforeAll(async () => {
      broadcastData = await testConfig.loader(release, chain, componentName);
    });

    for (const contract of contracts) {
      const isMissing = isKnownMissing(release, chain, contract.name);

      it.skipIf(isMissing)(contract.name, async () => {
        if (!broadcastData) {
          return;
        }

        const contractData = testConfig.finder(broadcastData, contract.name);
        if (!contractData) {
          // As a fallback, we check if this contract has already been validated. Some contracts
          // are shared between releases (e.g., Comptroller in Lockup v1.0 and v1.1).
          const previouslyValidated = _.get(validatedContracts, [chain.id, contract.name, contract.address]);
          const message = `Contract ${contract.name} on ${chain.name} has not been found nor validated`;
          expect(previouslyValidated, message).toBeTruthy();
          return;
        }
        testConfig.validator(contract, contractData);

        // Mark this contract as validated for this chain.
        _.set(validatedContracts, [chain.id, contract.name, contract.address], true);
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
    if (release.kind === "lockupV1") {
      const lockupV1Deployment = deployment as Sablier.Deployment.LockupV1;
      createInnerTests("Contracts in core", testConfig, release, chain, lockupV1Deployment.core, "core");
      createInnerTests("Contracts in periphery", testConfig, release, chain, lockupV1Deployment.periphery, "periphery");
    } else {
      createInnerTests("Contracts", testConfig, release, chain, deployment.contracts);
    }
  });
}

export function createStandardTests(
  release: Sablier.Release,
  deployment: Sablier.Deployment,
  chain: Sablier.Chain,
): void {
  createContractTests<BroadcastJSON, BasicContract>(release, deployment, chain, {
    finder: findContract,
    loader: loadBroadcastJSON,
    validator: validateContract,
  });
}

export function createZKTests(release: Sablier.Release, deployment: Sablier.Deployment, chain: Sablier.Chain): void {
  createContractTests<ZKBroadcastJSON[], ZKBroadcastJSON>(release, deployment, chain, {
    finder: findZKContract,
    loader: loadZKBroadcastJSONs,
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
