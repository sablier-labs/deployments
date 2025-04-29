import { getChain } from "@src/chains";
import versions from "./versions";

import _ from "lodash";
import type { Sablier } from "./types";

/**
 * Get the explorer URL for a contract. Compatible with Etherscan, Blockscout, etc.
 * @param explorerURL - The base explorer URL, e.g. https://etherscan.io
 * @param contractAddress - The contract object
 * @returns The explorer URL for the contract, e.g. https://etherscan.io/address/0x123...
 */
export function getContractExplorerURL(explorerURL: string, contractAddress: Sablier.Address) {
  return `${explorerURL}/address/${contractAddress}`;
}

/**
 * Extract all string values from a nested object
 * @param obj The object to extract string values from
 * @returns Array of all string values from the object
 */
export function getNestedValues<T extends Record<string, unknown>>(obj: T): string[] {
  return _.flatMap(obj, (value) => {
    if (_.isObject(value) && !_.isArray(value)) {
      return getNestedValues(value as Record<string, unknown>);
    }
    return _.isString(value) ? value : [];
  });
}

export function isValidAirdropsVersion(version: Sablier.Version): boolean {
  return version === versions.airdrops.v1_3;
}

export function isValidFlowVersion(version: Sablier.Version): boolean {
  return version === versions.flow.v1_0 || version === versions.flow.v1_1;
}

export function isValidLegacyVersion(version: Sablier.Version): boolean {
  return version === versions.legacy.v1_0 || version === versions.legacy.v1_1;
}

export function isValidLockupVersion(version: Sablier.Version): boolean {
  return (
    version === versions.lockup.v1_0 ||
    version === versions.lockup.v1_1 ||
    version === versions.lockup.v1_2 ||
    version === versions.lockup.v2_0
  );
}

export function sortChains<T extends { name: string }>(chains: T[]): T[] {
  return chains.sort((a, b) => a.name.localeCompare(b.name));
}

export function sortDeployments<T extends { chainId: number }>(deployments: T[]): T[] {
  return deployments.sort((a, b) => {
    const aChain = getChain(a.chainId);
    const bChain = getChain(b.chainId);
    return aChain.name.localeCompare(bChain.name);
  });
}
