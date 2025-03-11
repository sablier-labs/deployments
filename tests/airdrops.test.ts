import { keys } from "lodash";
import { beforeAll, describe, expect, it } from "vitest";

import { chains, deployments } from "../src";
import contractNames from "../src/contract-names";
import type { SablierDeployment } from "../src/types";
import { loadBroadcastJSON, loadZKBroadcastJSON } from "./helpers";
import type { AirdropDeploymentJSON, Contract, ContractReturn, ZKDeploymentJSON } from "./test-types";

// ============================================================================
// Constants & Types
// ============================================================================

/** Supported versions for testing */
const SUPPORTED_VERSIONS = ["v1.3.0"] as const;
type SupportedVersion = (typeof SUPPORTED_VERSIONS)[number];

// ============================================================================
// Contract Validation Functions
// ============================================================================

/**
 * Validates contract deployment details for non-ZK chains
 * @param contract - The deployed contract to validate
 * @param expectedData - Expected contract data to validate against
 */
function validateContract(contract: Contract, expectedData: ContractReturn): void {
  const address = contract.address.toLowerCase();
  const expectedAddress = expectedData.value.toLowerCase();
  expect(address).toBe(expectedAddress);

  const name = contract.name;
  const expectedName = expectedData.internal_type.replace("contract ", "");
  expect(name).toBe(expectedName);
}

/**
 * Validates contract deployment details for ZK-compatible chains
 * @param contract - The deployed contract to validate
 * @param zkDeployment - ZK deployment data to validate against
 */
function validateZKContract(contract: Contract, zkDeployment: ZKDeploymentJSON): void {
  const address = contract.address.toLowerCase();
  const expectedAddress = zkDeployment.entries[0].address.toLowerCase();
  expect(address).toBe(expectedAddress);

  const name = contract.name;
  const expectedName = zkDeployment.contractName;
  expect(name).toBe(expectedName);
}

// ============================================================================
// Test Suite Generation
// ============================================================================

/**
 * Creates test suites for a specific chain deployment
 * @param version - The version of the deployment
 * @param chainId - The ID of the chain to test
 * @param deployment - The deployment data for the chain
 */
function createTestsForV1_3_0(version: SupportedVersion, chainId: number, deployment: SablierDeployment): void {
  const chain = chains.default[chainId];
  const chainName = chain.name;

  const merkleFactoryContract = deployment[chainId].contracts.find(
    (c) => c.name === contractNames.airdrops.SABLIER_MERKLE_FACTORY,
  );
  if (!merkleFactoryContract) {
    throw new Error(
      `${contractNames.airdrops.SABLIER_MERKLE_FACTORY} contract not found for Airdrops ${version} on chain ${chainName} (ID: ${chainId})`,
    );
  }

  if (!chain.isZK) {
    describe(`Chain: ${chainName} (ID: ${chainId})`, () => {
      let deploymentData: AirdropDeploymentJSON | null;

      beforeAll(async () => {
        const data = await loadBroadcastJSON("airdrops", version, chainId);
        deploymentData = data as AirdropDeploymentJSON;
      });

      it("validates SablierMerkleFactory contract deployment", () => {
        if (!deploymentData?.returns.merkleFactory) return;
        validateContract(merkleFactoryContract, deploymentData.returns.merkleFactory);
      });
    });
  }

  if (chain.isZK) {
    describe(`Chain: ${chainName} (ID: ${chainId})`, () => {
      let zkDeploymentData: Record<string, ZKDeploymentJSON> | null;

      beforeAll(async () => {
        zkDeploymentData = await loadZKBroadcastJSON("airdrops", version, chainId, {
          merkleFactory: contractNames.airdrops.SABLIER_MERKLE_FACTORY,
        });
      });

      it("validates SablierMerkleFactory contract deployment", () => {
        if (!zkDeploymentData?.merkleFactory) return;
        validateZKContract(merkleFactoryContract, zkDeploymentData.merkleFactory);
      });
    });
  }
}

// ============================================================================
// Main Test Suite
// ============================================================================

for (const version of SUPPORTED_VERSIONS) {
  describe(`Airdrops ${version}`, () => {
    const versionDeployments = deployments.airdrops[version];

    for (const deployment of versionDeployments) {
      const chainIds = keys(deployment).map(Number);

      for (const chainId of chainIds) {
        createTestsForV1_3_0(version, chainId, deployment);
      }
    }
  });
}
