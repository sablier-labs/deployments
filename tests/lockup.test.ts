import { keys } from "lodash";
import { beforeAll, describe, expect, it } from "vitest";

import { chains, deployments } from "../src";
import contractNames from "../src/contract-names";
import type { SablierDeployment } from "../src/types";
import { loadBroadcastJSON, loadZKBroadcastJSON } from "./helpers";
import type { Contract, ContractReturn, ZKDeploymentJSON } from "./test-types";

// ============================================================================
// Constants & Types
// ============================================================================

/** Supported versions for testing */
const SUPPORTED_VERSIONS = ["v2.0.0"] as const;
type SupportedVersion = (typeof SUPPORTED_VERSIONS)[number];

// Define the interface for lockup deployment JSON
interface LockupDeploymentJSON {
  returns: {
    lockup?: ContractReturn;
    batchLockup?: ContractReturn;
    nftDescriptor?: ContractReturn;
    helpers?: ContractReturn;
    vestingMath?: ContractReturn;
  };
}

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
function createTestsForV2_0_0(version: SupportedVersion, chainId: number, deployment: SablierDeployment): void {
  const chain = chains.default[chainId];
  const chainName = chain.name;

  // Find the main lockup contracts
  const lockupContract = deployment[chainId].contracts.find((c) => c.name === contractNames.lockup.SABLIER_LOCKUP);
  const batchLockupContract = deployment[chainId].contracts.find(
    (c) => c.name === contractNames.lockup.SABLIER_BATCH_LOCKUP,
  );
  const nftDescriptorContract = deployment[chainId].contracts.find(
    (c) => c.name === contractNames.lockup.LOCKUP_NFT_DESCRIPTOR,
  );
  const helpersContract = deployment[chainId].contracts.find((c) => c.name === contractNames.lockup.HELPERS);
  const vestingMathContract = deployment[chainId].contracts.find((c) => c.name === contractNames.lockup.VESTING_MATH);

  // Check all required contracts exist
  if (!lockupContract || !batchLockupContract || !nftDescriptorContract || !helpersContract || !vestingMathContract) {
    throw new Error(
      `One or more required contracts not found for Lockup ${version} on chain ${chainName} (ID: ${chainId})`,
    );
  }

  if (!chain.isZK) {
    describe(`Chain: ${chainName} (ID: ${chainId})`, () => {
      let deploymentData: LockupDeploymentJSON | null;

      beforeAll(async () => {
        const data = await loadBroadcastJSON("lockup", version, chainId);
        deploymentData = data as LockupDeploymentJSON;
      });

      it("validates SablierLockup contract deployment", () => {
        if (!deploymentData?.returns?.lockup) return;
        validateContract(lockupContract, deploymentData.returns.lockup);
      });

      it("validates SablierBatchLockup contract deployment", () => {
        if (!deploymentData?.returns?.batchLockup) return;
        validateContract(batchLockupContract, deploymentData.returns.batchLockup);
      });

      it("validates LockupNFTDescriptor contract deployment", () => {
        if (!deploymentData?.returns?.nftDescriptor) return;
        validateContract(nftDescriptorContract, deploymentData.returns.nftDescriptor);
      });

      it("validates Helpers contract deployment", () => {
        if (!deploymentData?.returns?.helpers) return;
        validateContract(helpersContract, deploymentData.returns.helpers);
      });

      it("validates VestingMath contract deployment", () => {
        if (!deploymentData?.returns?.vestingMath) return;
        validateContract(vestingMathContract, deploymentData.returns.vestingMath);
      });
    });
  }

  if (chain.isZK) {
    describe(`Chain: ${chainName} (ID: ${chainId})`, () => {
      let zkDeploymentData: Record<string, ZKDeploymentJSON> | null;

      beforeAll(async () => {
        zkDeploymentData = await loadZKBroadcastJSON("lockup", version, chainId, {
          lockup: contractNames.lockup.SABLIER_LOCKUP,
          batchLockup: contractNames.lockup.SABLIER_BATCH_LOCKUP,
          nftDescriptor: contractNames.lockup.LOCKUP_NFT_DESCRIPTOR,
          helpers: contractNames.lockup.HELPERS,
          vestingMath: contractNames.lockup.VESTING_MATH,
        });
      });

      it("validates SablierLockup contract deployment", () => {
        if (!zkDeploymentData?.lockup) return;
        validateZKContract(lockupContract, zkDeploymentData.lockup);
      });

      it("validates SablierBatchLockup contract deployment", () => {
        if (!zkDeploymentData?.batchLockup) return;
        validateZKContract(batchLockupContract, zkDeploymentData.batchLockup);
      });

      it("validates LockupNFTDescriptor contract deployment", () => {
        if (!zkDeploymentData?.nftDescriptor) return;
        validateZKContract(nftDescriptorContract, zkDeploymentData.nftDescriptor);
      });

      it("validates Helpers contract deployment", () => {
        if (!zkDeploymentData?.helpers) return;
        validateZKContract(helpersContract, zkDeploymentData.helpers);
      });

      it("validates VestingMath contract deployment", () => {
        if (!zkDeploymentData?.vestingMath) return;
        validateZKContract(vestingMathContract, zkDeploymentData.vestingMath);
      });
    });
  }
}

// ============================================================================
// Main Test Suite
// ============================================================================

for (const version of SUPPORTED_VERSIONS) {
  describe(`Lockup ${version}`, () => {
    const versionDeployments = deployments.lockup[version];

    for (const deployment of versionDeployments) {
      const chainIds = keys(deployment).map(Number);

      for (const chainId of chainIds) {
        createTestsForV2_0_0(version, chainId, deployment);
      }
    }
  });
}
