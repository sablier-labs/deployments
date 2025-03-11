import { keys } from "lodash";
import { beforeAll, describe, expect, it } from "vitest";

import { chains, deployments } from "../src";
import contractNames from "../src/contract-names";
import type { SablierDeployment } from "../src/types";
import { loadBroadcastJSON, loadZKBroadcastJSON } from "./helpers";
import type { Contract, ContractReturn, FlowDeploymentJSON, ZKDeploymentJSON } from "./test-types";

// ============================================================================
// Constants & Types
// ============================================================================

/** Supported versions for testing */
const SUPPORTED_VERSIONS = ["v1.0.0", "v1.1.0"] as const;
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
function createTests(version: SupportedVersion, chainId: number, deployment: SablierDeployment): void {
  const chain = chains.default[chainId];
  const chainName = chain.name;

  const flowContract = deployment[chainId].contracts.find((c) => c.name === contractNames.flow.SABLIER_FLOW);
  const nftDescriptorContract = deployment[chainId].contracts.find(
    (c) => c.name === contractNames.flow.FLOW_NFT_DESCRIPTOR,
  );

  if (!flowContract || !nftDescriptorContract) {
    throw new Error(
      `One or more required contracts not found for Flow ${version} on chain ${chainName} (ID: ${chainId})`,
    );
  }

  if (!chain.isZK) {
    describe(`Chain: ${chainName} (ID: ${chainId})`, () => {
      let deploymentData: FlowDeploymentJSON | null;

      beforeAll(async () => {
        const data = await loadBroadcastJSON("flow", version, chainId);
        deploymentData = data as FlowDeploymentJSON;
      });

      it("validates SablierFlow contract deployment", () => {
        if (!deploymentData?.returns.flow) return;
        validateContract(flowContract, deploymentData.returns.flow);
      });

      it("validates FlowNFTDescriptor contract deployment", () => {
        if (!deploymentData?.returns.flowNFTDescriptor) return;
        validateContract(nftDescriptorContract, deploymentData.returns.flowNFTDescriptor);
      });
    });
  }

  if (chain.isZK) {
    describe(`Chain: ${chainName} (ID: ${chainId})`, () => {
      let zkDeploymentData: Record<string, ZKDeploymentJSON> | null;

      beforeAll(async () => {
        zkDeploymentData = await loadZKBroadcastJSON("flow", version, chainId, {
          flow: contractNames.flow.SABLIER_FLOW,
          flowNFTDescriptor: contractNames.flow.FLOW_NFT_DESCRIPTOR,
        });
      });

      it("validates SablierFlow contract deployment", () => {
        if (!zkDeploymentData) return;
        validateZKContract(flowContract, zkDeploymentData.flow);
      });

      it("validates FlowNFTDescriptor contract deployment", () => {
        if (!zkDeploymentData) return;
        validateZKContract(nftDescriptorContract, zkDeploymentData.flowNFTDescriptor);
      });
    });
  }
}

// ============================================================================
// Main Test Suite
// ============================================================================

for (const version of SUPPORTED_VERSIONS) {
  describe(`Flow ${version}`, () => {
    const versionDeployments = deployments.flow[version];

    for (const deployment of versionDeployments) {
      const chainIds = keys(deployment).map(Number);

      for (const chainId of chainIds) {
        createTests(version, chainId, deployment);
      }
    }
  });
}
