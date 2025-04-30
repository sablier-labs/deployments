import { ChainId } from "@src/chains/ids";
import type { Sablier } from "@src/types";
import type { CustomChainId } from "../config";
import { resolveCustomSubgraph, resolveOfficialSubgraph } from "../helpers";

function resolveCustom(chainId: CustomChainId, name: string): Sablier.IndexerSubgraph {
  return resolveCustomSubgraph("flow", chainId, name);
}

function resolveOfficial(chainId: number, name: string, id: string): Sablier.IndexerSubgraph {
  return resolveOfficialSubgraph("flow", chainId, name, id);
}

const subgraphs = [
  // ────────────────────────────────────────────────────────────────────────────────
  // Mainnets
  // ────────────────────────────────────────────────────────────────────────────────
  resolveOfficial(ChainId.ETHEREUM, "sablier-flow-ethereum", "ECxBJhKceBGaVvK6vqmK3VQAncKwPeAQutEb8TeiUiod"),
  resolveOfficial(ChainId.ABSTRACT, "sablier-flow-abstract", "Gq3e1gihMoSynURwGXQnPoKGVZzdsyomdrMH934vQHuG"),
  resolveOfficial(ChainId.ARBITRUM_ONE, "sablier-flow-arbitrum", "C3kBBUVtW2rxqGpAgSgEuSaT49izkH6Q8UibRt7XFTyW"),
  resolveOfficial(ChainId.AVALANCHE, "sablier-flow-avalanche", "6PAizjTALVqLLB7Ycq6XnpTeck8Z8QUpDFnVznMnisUh"),
  resolveOfficial(ChainId.BASE, "sablier-flow-base", "4XSxXh8ZgkzaA35nrbQG9Ry3FYz3ZFD8QBdWwVg5pF9W"),
  resolveOfficial(ChainId.BERACHAIN, "sablier-flow-berachain", "J87eaBLfTe7kKWgUGqe5TxntNCzA4pyWmqJowMddehuh"),
  resolveOfficial(ChainId.BLAST, "sablier-flow-blast", "8joiC9LpUbSV6eGRr3RWXDArM8p9Q65FKiFekAakkyia"),
  resolveOfficial(ChainId.BSC, "sablier-flow-bsc", "2vU8KF4yWh3vvFjtg7MrRXMnYF3hPX2T3cvVBdaiXhNb"),
  resolveOfficial(ChainId.CHILIZ, "sablier-flow-chiliz", "7QX7tJsANNFpxFLLjqzmXRzfY1wPGp3Lty5xGbhgADa6"),
  resolveOfficial(ChainId.GNOSIS, "sablier-flow-gnosis", "4KiJ53cTNKdFWPBPmDNQ55tYj8hn1WQg8R4UcTY2STLL"),
  resolveOfficial(ChainId.IOTEX, "sablier-flow-iotex", "6No3QmRiC8HXLEerDFoBpF47jUPRjhntmv28HHEMxcA2"),
  resolveCustom(ChainId.LIGHTLINK, "sablier-flow-lightlink"),
  resolveOfficial(ChainId.LINEA, "sablier-flow-linea", "DV9XgcCCPKzUn6pgetg4yPetpW2fNoRKBUQC43aNeLG6"),
  resolveOfficial(ChainId.MODE, "sablier-flow-mode", "9TwfoUZoxYUyxzDgspCPyxW6uMUKetWQDaTGsZjY1qJZ"),
  resolveOfficial(ChainId.OP_MAINNET, "sablier-flow-optimism", "AygPgsehNGSB4K7DYYtvBPhTpEiU4dCu3nt95bh9FhRf"),
  resolveOfficial(ChainId.POLYGON, "sablier-flow-polygon", "ykp38sLarwz3cpmjSSPqo7UuTjYtkZ1KiL4PM2qwmT8"),
  resolveOfficial(ChainId.SCROLL, "sablier-flow-scroll", "HFpTrPzJyrHKWZ9ebb4VFRQSxRwpepyfz5wd138daFkF"),
  resolveCustom(ChainId.ULTRA, "sablier-flow-ultra"),
  resolveCustom(ChainId.XDC, "sablier-flow-xdc"),
  resolveOfficial(ChainId.ZK_SYNC_ERA, "sablier-flow-zksync", "9DRgWhDAMovpkej3eT8izum6jxEKHE62ciArffsTAScx"),
  // ────────────────────────────────────────────────────────────────────────────────
  // Testnets
  // ────────────────────────────────────────────────────────────────────────────────
  resolveOfficial(
    ChainId.ARBITRUM_SEPOLIA,
    "sablier-flow-arbitrum-sepolia",
    "2uWnxpYiDMkEMu1urxqt925mLfuax9XbvfcBoD97AU6d",
  ),
  resolveOfficial(ChainId.BASE_SEPOLIA, "sablier-flow-base-sepolia", "AsnKT1waQMvuQxZAqfFuYwtRtAfN8uekDu75jPttfyLh"),
  resolveOfficial(ChainId.ETHEREUM_SEPOLIA, "sablier-flow-sepolia", "EU9AWmJjrjMRkjxcdHfuWPZvPTNAL3hiXfNGN5MwUpvm"),
  resolveOfficial(ChainId.OP_SEPOLIA, "sablier-flow-optimism-sepolia", "EFKqBB6TeH6etGuHCffnbMbETEgDZ6U29Lgpc4gpYvdB"),
];

export default subgraphs;
