import type { Sablier } from "@src/types";
import type { Chain as ViemChain } from "viem/chains";
import * as viem from "viem/chains";
import { alchemyRPCs, infuraRPCs } from "./rpc";

type ConfigString = { [chainId: number]: string };
type ConfigBool = { [chainId: number]: boolean };

export const config = {
  slugs: {
    [viem.zksyncSepoliaTestnet.id]: "zksync-sepolia",
  } as ConfigString,
  ui: {
    supportedTestnets: {
      [viem.baseSepolia.id]: true,
      [viem.sepolia.id]: true,
    } as ConfigBool,
    unsupportedMainnets: {
      [viem.meld.id]: true,
      [viem.ronin.id]: true,
      [viem.taiko.id]: true,
    } as ConfigBool,
  },
  zk: {
    [viem.abstract.id]: true,
    [viem.sophon.id]: true,
    [viem.zksync.id]: true,
  } as ConfigBool,
};

export function fill(slug: string, chain: ViemChain): Sablier.Chain {
  if (!chain.blockExplorers) {
    throw new Error(`Chain ${chain.name} has no block explorers`);
  }

  const isTestnet = Boolean(chain.testnet);
  const isSupportedByUI = isTestnet
    ? Boolean(config.ui.supportedTestnets[chain.id])
    : !config.ui.unsupportedMainnets[chain.id];

  return {
    ...chain,
    blockExplorers: chain.blockExplorers,
    isSupportedByUI,
    isTestnet,
    isZK: Boolean(config.zk[chain.id]),
    rpc: {
      alchemy: alchemyRPCs[chain.id],
      infura: infuraRPCs[chain.id],
    },
    slug,
  };
}
