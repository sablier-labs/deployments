import { beforeAll, describe, expect, it } from "vitest";

import { chains } from "@src";
import type { Sablier } from "@src/types";
import { loadBroadcastJSON, loadZKBroadcastJSON } from "./helpers";
import type { Contract, ContractReturn, ZKDeploymentJSON } from "./test-types";

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

export function createDeploymentTests(release: Sablier.Release, deployment: Sablier.Deployment): void {
  const chainId = deployment.chainId;
  const chain = chains.allById[chainId];
  const chainName = chain.name;

  // Find all required contracts
  const contracts: Record<string, Contract> = {};
  for (const [key, contractName] of Object.entries(release.manifest)) {
    const contract = deployment.contracts.find((c) => c.name === contractName);
    if (!contract) {
      throw new Error(
        `${contractName} contract not found for ${release.protocol} ${release.version} on chain ${chainName} (ID: ${chainId})`,
      );
    }
    contracts[key] = contract;
  }

  if (!chain.isZK) {
    describe(`Chain: ${chainName} (ID: ${chainId})`, () => {
      let deploymentData: { returns: Record<string, ContractReturn> } | null;

      beforeAll(async () => {
        const data = await loadBroadcastJSON(release.protocol, release.version, chainId);
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
        zkDeploymentData = await loadZKBroadcastJSON(release.protocol, release.version, chainId, release.manifest);
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

export function createModuleTestSuite(release: Sablier.Release): void {
  describe(`${release.protocol} ${release.version}`, () => {
    for (const deployment of release.deployments) {
      createDeploymentTests(release, deployment);
    }
  });
}
