/**
 * Chains on which the Sablier Protocol is deployed.
 *
 * This file contains the EVM chains supported by Sablier, including both mainnets and testnets.
 * Each chain is defined with its explorer URL, chain ID, native token, and other properties.
 *
 * For further documentation, visit:
 * @see https://docs.sablier.com/concepts/chains
 * @see https://chainlist.org
 */

import type { Sablier } from "../types";
import { mainnets, mainnetsById } from "./mainnets";
import { testnets, testnetsById } from "./testnets";

export { mainnets, mainnetsById, testnets, testnetsById };
export const chains: Sablier.Chain[] = [...mainnets, ...testnets];
export const chainsById: Record<number, Sablier.Chain> = { ...mainnetsById, ...testnetsById };

export function getChain(chainId: number | string): Sablier.Chain {
  const chain = chainsById[Number(chainId)];
  if (!chain) {
    throw new Error(`Chain with ID ${chainId} not found`);
  }
  return chain;
}

export function getChainName(chainId: number | string): string {
  const chainName = chainsById[Number(chainId)].name;
  if (!chainName) {
    throw new Error(`Chain with ID ${chainId} not found`);
  }
  return chainName;
}
