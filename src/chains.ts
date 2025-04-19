/**
 * Chains supported by Sablier Protocol
 *
 * This file contains the EVM chains supported by Sablier, including both mainnets and testnets.
 * Each chain is defined with its explorer URL, chain ID, native token, and other properties.
 *
 * For further documentation, visit:
 * @see https://docs.sablier.com/concepts/chains
 */

import { AVAX, BERA, BNB, CHZ, CORE, ETH, IOTX, POL, SEI, TNT, UOS, XDC, xDAI } from "./tokens";
import type { SablierChain } from "./types";

// ========================================================
// Mainnets
// ========================================================

export const ethereum: SablierChain = {
  explorerURL: "https://etherscan.io",
  id: 1,
  isTestnet: false,
  name: "Ethereum",
  nativeToken: ETH,
};

export const arbitrumOne: SablierChain = {
  explorerURL: "https://arbiscan.io",
  id: 42161,
  isTestnet: false,
  name: "Arbitrum",
  nativeToken: ETH,
};

export const avalanche: SablierChain = {
  explorerURL: "https://snowtrace.io",
  nativeToken: AVAX,
  id: 43114,
  isTestnet: false,
  name: "Avalanche",
};

export const base: SablierChain = {
  explorerURL: "https://basescan.org",
  id: 8453,
  isTestnet: false,
  name: "Base",
  nativeToken: ETH,
};

export const berachain: SablierChain = {
  explorerURL: "https://artio.beratrail.io",
  nativeToken: BERA,
  id: 80094,
  isTestnet: false,
  name: "Berachain",
};

export const blast: SablierChain = {
  explorerURL: "https://blastscan.io",
  id: 81457,
  isTestnet: false,
  name: "Blast",
  nativeToken: ETH,
};

export const bsc: SablierChain = {
  explorerURL: "https://bscscan.com",
  nativeToken: BNB,
  id: 56,
  isTestnet: false,
  name: "BNB Smart Chain",
};

export const chiliz: SablierChain = {
  explorerURL: "https://scan.chiliz.com",
  nativeToken: CHZ,
  id: 88888,
  isTestnet: false,
  name: "Chiliz Chain",
};

export const gnosis: SablierChain = {
  explorerURL: "https://gnosisscan.io",
  nativeToken: xDAI,
  id: 100,
  isTestnet: false,
  name: "Gnosis",
};

export const iotex: SablierChain = {
  explorerURL: "https://iotexscan.io",
  nativeToken: IOTX,
  id: 4690,
  isTestnet: false,
  name: "IoTeX",
};

export const lightlink: SablierChain = {
  explorerURL: "https://phoenix.lightlink.io",
  id: 1890,
  isTestnet: false,
  name: "Lightlink",
  nativeToken: ETH,
};

export const linea: SablierChain = {
  explorerURL: "https://lineascan.build",
  id: 59144,
  isTestnet: false,
  name: "Linea",
  nativeToken: ETH,
};

export const mode: SablierChain = {
  explorerURL: "https://explorer.mode.network",
  id: 34443,
  isTestnet: false,
  name: "Mode",
  nativeToken: ETH,
};

export const morph: SablierChain = {
  explorerURL: "https://explorer.morphl2.io",
  id: 2818,
  isTestnet: false,
  name: "Morph",
  nativeToken: ETH,
};

export const opMainnet: SablierChain = {
  explorerURL: "https://optimistic.etherscan.io",
  id: 10,
  isTestnet: false,
  name: "Optimism",
  nativeToken: ETH,
};

export const polygon: SablierChain = {
  explorerURL: "https://polygonscan.com",
  nativeToken: POL,
  id: 137,
  isTestnet: false,
  name: "Polygon",
};

export const scroll: SablierChain = {
  explorerURL: "https://scrollscan.com",
  id: 534352,
  isTestnet: false,
  name: "Scroll",
  nativeToken: ETH,
};

export const superseed: SablierChain = {
  explorerURL: "https://superseedscan.com",
  id: 5330,
  isTestnet: false,
  name: "Superseed",
  nativeToken: ETH,
};

export const tangle: SablierChain = {
  explorerURL: "https://explorer.tangle.tools",
  nativeToken: TNT,
  id: 5845,
  isTestnet: false,
  name: "Tangle",
};

export const xdc: SablierChain = {
  explorerURL: "https://xdcscan.io",
  nativeToken: XDC,
  id: 50,
  isTestnet: false,
  name: "XDC",
};

export const zksyncEra: SablierChain = {
  explorerURL: "https://explorer.zksync.io",
  id: 324,
  isTestnet: false,
  name: "zkSync Era",
  nativeToken: ETH,
};

export const abstract: SablierChain = {
  explorerURL: "https://explorer.abstract.money",
  id: 2741,
  isTestnet: false,
  name: "Abstract",
  nativeToken: ETH,
};

export const coreDAO: SablierChain = {
  explorerURL: "https://scan.coredao.org",
  id: 1116,
  isTestnet: false,
  name: "Core DAO",
  nativeToken: CORE,
};

export const form: SablierChain = {
  explorerURL: "https://explorer.form.network",
  id: 478,
  isTestnet: false,
  name: "Form",
  nativeToken: ETH,
};

export const sei: SablierChain = {
  explorerURL: "https://seitrace.com",
  id: 1329,
  isTestnet: false,
  name: "Sei",
  nativeToken: SEI,
};

export const taiko: SablierChain = {
  explorerURL: "https://taikoscan.io",
  id: 167000,
  isTestnet: false,
  name: "Taiko",
  nativeToken: ETH,
};

export const ultra: SablierChain = {
  explorerURL: "https://evmexplorer.ultra.io",
  id: 19991,
  isTestnet: false,
  name: "Ultra",
  nativeToken: UOS,
};

export const unichain: SablierChain = {
  explorerURL: "https://uniscan.xyz",
  id: 130,
  isTestnet: false,
  name: "Unichain",
  nativeToken: ETH,
};

// ========================================================
// Testnets
// ========================================================

export const ethereumSepolia: SablierChain = {
  explorerURL: "https://sepolia.etherscan.io",
  id: 11155111,
  isTestnet: true,
  name: "Ethereum Sepolia",
  nativeToken: ETH,
};

export const arbitrumSepolia: SablierChain = {
  explorerURL: "https://sepolia.arbiscan.io",
  id: 421614,
  isTestnet: true,
  name: "Arbitrum Sepolia",
  nativeToken: ETH,
};

export const baseSepolia: SablierChain = {
  explorerURL: "https://sepolia.basescan.org",
  id: 84532,
  isTestnet: true,
  name: "Base Sepolia",
  nativeToken: ETH,
};

export const opSepolia: SablierChain = {
  explorerURL: "https://sepolia-opMainnet.etherscan.io",
  id: 11155420,
  isTestnet: true,
  name: "Optimism Sepolia",
  nativeToken: ETH,
};

// ========================================================
// Chain Collections
// ========================================================

export const mainnets = {
  ethereum,
  abstract,
  arbitrumOne,
  avalanche,
  base,
  berachain,
  bsc,
  blast,
  chiliz,
  coreDAO,
  form,
  gnosis,
  iotex,
  lightlink,
  linea,
  mode,
  morph,
  opMainnet,
  polygon,
  sei,
  scroll,
  superseed,
  taiko,
  tangle,
  ultra,
  unichain,
  xdc,
  zksyncEra,
};

export const testnets = {
  arbitrumSepolia,
  baseSepolia,
  ethereumSepolia,
  opSepolia,
};

export default {
  ...mainnets,
  ...testnets,
};
