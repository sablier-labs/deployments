import chainsQueries from "@src/chains/queries";
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

export function sortChains<T extends { name: string }>(chains: T[]): T[] {
  return chains.sort((a, b) => a.name.localeCompare(b.name));
}

export function sortDeployments<T extends { chainId: number }>(deployments: T[]): T[] {
  return deployments.sort((a, b) => {
    const aChain = chainsQueries.getOrThrow(a.chainId);
    const bChain = chainsQueries.getOrThrow(b.chainId);
    return aChain.name.localeCompare(bChain.name);
  });
}

/**
 * @internal
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
