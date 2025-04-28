import { getChain } from "@src/helpers";
import { isLockupV1Release } from "@src/helpers";
import type { Sablier } from "@src/types";
import _ from "lodash";
import { beforeAll, describe, expect, it } from "vitest";
import { findContract, findZKContract, loadBroadcastJSON, loadZKBroadcastJSONs } from "./helpers";
import { isKnownMissing } from "./missing-broadcasts";
import type { BroadcastJSON, ZKBroadcastJSON } from "./types";

/**
 * Mapping between address, contract name, and chain ID to use as a fallback for already validated contracts.
 * Uses incremental types and Partial for flexibility and simplicity.
 */
type ValidatedByChainId = Partial<Record<number, boolean>>;
type ValidatedByContractName = Partial<Record<string, ValidatedByChainId>>;
type ValidatedByContractAddress = Partial<Record<Sablier.Address, ValidatedByContractName>>;
const validated: ValidatedByContractAddress = {};

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
  loader: (release: Sablier.Release, chain: Sablier.Chain, componentName?: string) => Promise<BD | null>;
  validator: (contract: Sablier.Contract, data: CD) => void;
}

function createInnerTests<BD, CD>(
  testDescription: string,
  testConfig: TestConfig<BD, CD>,
  release: Sablier.Release,
  chain: Sablier.Chain,
  contracts: Sablier.Contract[],
  componentName?: string,
): void {
  describe(testDescription, () => {
    let broadcastData: BD | null;

    beforeAll(async () => {
      broadcastData = await testConfig.loader(release, chain, componentName);
    });

    for (const contract of contracts) {
      const isMissing = isKnownMissing(release, chain, contract.name);

      it.skipIf(isMissing)(`validates ${contract.name} deployment`, async () => {
        if (!broadcastData) {
          return;
        }

        const contractData = testConfig.finder(broadcastData, contract.name);
        if (!contractData) {
          // As a fallback, we check if this contract has already been validated. Some contracts
          // are shared between releases (e.g., Comptroller in Lockup v1.0 and v1.1).
          const previouslyValidated = _.get(validated, [contract.address, contract.name, chain.id]);
          expect(previouslyValidated).toBeTruthy();
          return;
        }
        testConfig.validator(contract, contractData);
        _.set(validated, [contract.address, contract.name, chain.id], true);
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
