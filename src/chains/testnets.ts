import { sortChains } from "../helpers";
import { ETH, MON } from "../native-tokens";
import type { Sablier } from "../types";
import { ChainId } from "./ids";
import { getAlchemyRPC, getInfuraRPC } from "./rpc";

export const testnetsById: Record<number, Sablier.Chain> = {
  [ChainId.ARBITRUM_SEPOLIA]: {
    explorerURL: "https://sepolia.arbiscan.io",
    id: ChainId.ARBITRUM_SEPOLIA,
    isSupportedByUI: false,
    isTestnet: true,
    isZK: false,
    key: "arbitrum-sepolia",
    name: "Arbitrum Sepolia",
    nativeToken: ETH,
    rpc: {
      public: "https://arbitrum-sepolia-rpc.publicnode.com",
    },
  },
  [ChainId.BASE_SEPOLIA]: {
    explorerURL: "https://sepolia.basescan.org",
    id: ChainId.BASE_SEPOLIA,
    isSupportedByUI: true,
    isTestnet: true,
    isZK: false,
    key: "base-sepolia",
    name: "Base Sepolia",
    nativeToken: ETH,
    rpc: {
      public: "https://base-sepolia-rpc.publicnode.com",
    },
  },
  [ChainId.BLAST_SEPOLIA]: {
    explorerURL: "https://sepolia.blastscan.io",
    id: ChainId.BLAST_SEPOLIA,
    isSupportedByUI: false,
    isTestnet: true,
    isZK: false,
    key: "blast-sepolia",
    name: "Blast Sepolia",
    nativeToken: ETH,
    rpc: {
      public: "https://sepolia.blast.io",
    },
  },
  [ChainId.ETHEREUM_SEPOLIA]: {
    explorerURL: "https://sepolia.etherscan.io",
    id: ChainId.ETHEREUM_SEPOLIA,
    isSupportedByUI: true,
    isTestnet: true,
    isZK: false,
    key: "ethereum-sepolia",
    name: "Ethereum Sepolia",
    nativeToken: ETH,
    rpc: {
      alchemy: getAlchemyRPC(ChainId.ETHEREUM_SEPOLIA),
      infura: getInfuraRPC(ChainId.ETHEREUM_SEPOLIA),
      public: "https://ethereum-sepolia-rpc.publicnode.com",
    },
  },
  [ChainId.LINEA_SEPOLIA]: {
    explorerURL: "https://sepolia.lineascan.build",
    id: ChainId.LINEA_SEPOLIA,
    isSupportedByUI: false,
    isTestnet: true,
    isZK: false,
    key: "linea-sepolia",
    name: "Linea Sepolia",
    nativeToken: ETH,
    rpc: {
      public: "https://linea-sepolia-rpc.publicnode.com",
    },
  },
  [ChainId.MODE_TESTNET]: {
    explorerURL: "https://testnet.modescan.io",
    id: ChainId.MODE_TESTNET,
    isSupportedByUI: false,
    isTestnet: true,
    isZK: false,
    key: "mode-testnet",
    name: "Mode Testnet",
    nativeToken: ETH,
    rpc: {
      public: "https://sepolia.mode.network",
    },
  },
  [ChainId.MONAD_TESTNET]: {
    explorerURL: "https://testnet.monadexplorer.com",
    id: ChainId.MONAD_TESTNET,
    isSupportedByUI: false,
    isTestnet: true,
    isZK: false,
    key: "monad-testnet",
    name: "Monad Testnet",
    nativeToken: MON,
    rpc: {
      public: "https://testnet-rpc.monad.xyz",
    },
  },
  [ChainId.MORPH_HOLESKY]: {
    explorerURL: "https://sepolia.morphscan.io",
    id: ChainId.MORPH_HOLESKY,
    isSupportedByUI: false,
    isTestnet: true,
    isZK: false,
    key: "morph-holesky",
    name: "Morph Holesky",
    nativeToken: ETH,
    rpc: {
      public: "https://rpc-holesky.morphl2.io",
    },
  },
  [ChainId.OP_SEPOLIA]: {
    explorerURL: "https://sepolia-optimism.etherscan.io",
    id: ChainId.OP_SEPOLIA,
    isSupportedByUI: true,
    isTestnet: true,
    isZK: false,
    key: "op-sepolia",
    name: "OP Sepolia",
    nativeToken: ETH,
    rpc: {
      public: "https://sepolia.optimism.io",
    },
  },
  [ChainId.SUPERSEED_SEPOLIA]: {
    explorerURL: "https://sepolia.seedscan.org",
    id: ChainId.SUPERSEED_SEPOLIA,
    isSupportedByUI: false,
    isTestnet: true,
    isZK: false,
    key: "superseed-sepolia",
    name: "Superseed Sepolia",
    nativeToken: ETH,
    rpc: {
      public: "https://sepolia.superseed.xyz",
    },
  },
  [ChainId.TAIKO_HEKLA]: {
    explorerURL: "https://hekla.taikoscan.io",
    id: ChainId.TAIKO_HEKLA,
    isSupportedByUI: false,
    isTestnet: true,
    isZK: false,
    key: "taiko-hekla",
    name: "Taiko Hekla",
    nativeToken: ETH,
    rpc: {
      public: "https://taiko-hekla-rpc.publicnode.com",
    },
  },
  [ChainId.ZK_SYNC_SEPOLIA]: {
    explorerURL: "https://sepolia-era.zksync.network",
    id: ChainId.ZK_SYNC_SEPOLIA,
    isSupportedByUI: false,
    isTestnet: true,
    isZK: true,
    key: "zk-sync-sepolia",
    name: "zkSync Sepolia",
    nativeToken: ETH,
    rpc: {
      public: "https://sepolia.era.zksync.dev",
    },
  },
};

export const testnets: Sablier.Chain[] = sortChains(Object.values(testnetsById));
