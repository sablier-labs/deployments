import { keys } from "lodash";
import { beforeAll, describe, expect, it } from "vitest";

import { chains, deployments } from "@src";
import type { Sablier } from "@src/types";
import { loadBroadcastJSON, loadZKBroadcastJSON } from "./helpers";
import type { Contract, ContractReturn, ZKDeploymentJSON } from "./test-types";

// ============================================================================
// Shared Types
// ============================================================================

export interface DeploymentConfig {
  protocol: Sablier.Protocol;
  version: string;
  contracts: {
    [key: string]: string;
  };
}

// ============================================================================
// Shared Validation Functions
// ============================================================================

/**
 * Validates contract deployment details for non-ZK chains
 * @param contract - The deployed contract to validate
 * @param expectedData - Expected contract data to validate against
 */
export function validateContract(contract: Contract, expectedData: ContractReturn): void {
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
export function validateZKContract(contract: Contract, zkDeployment: ZKDeploymentJSON): void {
  const address = contract.address.toLowerCase();
  const expectedAddress = zkDeployment.entries[0].address.toLowerCase();
  expect(address).toBe(expectedAddress);

  const name = contract.name;
  const expectedName = zkDeployment.contractName;
  expect(name).toBe(expectedName);
}

// ============================================================================
// Shared Test Suite Generation
// ============================================================================

/**
 * Creates test suites for a specific chain deployment
 * @param config - Configuration for the deployment test
 * @param chainId - The ID of the chain to test
 * @param deployment - The deployment data for the chain
 */
export function createDeploymentTests(config: DeploymentConfig, chainId: number, deployment: Sablier.Deployment): void {
  const chain = chains[chainId];
  const chainName = chain.name;

  // Find all required contracts
  const contracts: Record<string, Contract> = {};
  for (const [key, contractName] of Object.entries(config.contracts)) {
    const contract = deployment[chainId].contracts.find((c) => c.name === contractName);
    if (!contract) {
      throw new Error(
        `${contractName} contract not found for ${config.protocol} ${config.version} on chain ${chainName} (ID: ${chainId})`,
      );
    }
    contracts[key] = contract;
  }

  if (!chain.isZK) {
    describe(`Chain: ${chainName} (ID: ${chainId})`, () => {
      let deploymentData: { returns: Record<string, ContractReturn> } | null;

      beforeAll(async () => {
        const data = await loadBroadcastJSON(config.protocol, config.version, chainId);
        deploymentData = data as { returns: Record<string, ContractReturn> };
      });

      for (const [key, contract] of Object.entries(contracts)) {
        it(`validates ${contract.name} contract deployment`, () => {
          if (!deploymentData?.returns[key]) return;
          validateContract(contract, deploymentData.returns[key]);
        });
      }
    });
  }

  if (chain.isZK) {
    describe(`Chain: ${chainName} (ID: ${chainId})`, () => {
      let zkDeploymentData: Record<string, ZKDeploymentJSON> | null;

      beforeAll(async () => {
        zkDeploymentData = await loadZKBroadcastJSON(config.protocol, config.version, chainId, config.contracts);
      });

      for (const [key, contract] of Object.entries(contracts)) {
        it(`validates ${contract.name} contract deployment`, () => {
          if (!zkDeploymentData?.[key]) return;
          validateZKContract(contract, zkDeploymentData[key]);
        });
      }
    });
  }
}

/**
 * Creates the main test suite for a deployment module
 * @param config - Configuration for the deployment test
 */
export function createModuleTestSuite(config: DeploymentConfig): void {
  describe(`${config.protocol} ${config.version}`, () => {
    const versionDeployments =
      deployments[config.protocol][config.version as keyof (typeof deployments)[typeof config.protocol]];

    for (const deployment of versionDeployments) {
      const chainIds = keys(deployment).map(Number);

      for (const chainId of chainIds) {
        createDeploymentTests(config, chainId, deployment);
      }
    }
  });
}
