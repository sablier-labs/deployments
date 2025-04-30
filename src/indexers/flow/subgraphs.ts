import { ChainId } from "@src/chains/ids";
import type { Sablier } from "@src/types";
import type { CustomChainId } from "../config";
import { getCustomSubgraph, getOfficialSubgraph } from "../helpers";

function getCustom(chainId: CustomChainId, name: string): Sablier.IndexerSubgraph {
  return getCustomSubgraph("flow", chainId, name);
}

function getOfficial(chainId: number, name: string, id: string): Sablier.IndexerSubgraph {
  return getOfficialSubgraph("flow", chainId, name, id);
}

const subgraphs = [
  // ────────────────────────────────────────────────────────────────────────────────
  // Mainnets
  // ────────────────────────────────────────────────────────────────────────────────
  getOfficial(ChainId.ETHEREUM, "sablier-flow-ethereum", "ECxBJhKceBGaVvK6vqmK3VQAncKwPeAQutEb8TeiUiod"),
  getOfficial(ChainId.ABSTRACT, "sablier-flow-abstract", "Gq3e1gihMoSynURwGXQnPoKGVZzdsyomdrMH934vQHuG"),
  getOfficial(ChainId.ARBITRUM_ONE, "sablier-flow-arbitrum", "C3kBBUVtW2rxqGpAgSgEuSaT49izkH6Q8UibRt7XFTyW"),
  getOfficial(ChainId.AVALANCHE, "sablier-flow-avalanche", "6PAizjTALVqLLB7Ycq6XnpTeck8Z8QUpDFnVznMnisUh"),
  getOfficial(ChainId.BASE, "sablier-flow-base", "4XSxXh8ZgkzaA35nrbQG9Ry3FYz3ZFD8QBdWwVg5pF9W"),
  getOfficial(ChainId.BERACHAIN, "sablier-flow-berachain", "J87eaBLfTe7kKWgUGqe5TxntNCzA4pyWmqJowMddehuh"),
  getOfficial(ChainId.BLAST, "sablier-flow-blast", "8joiC9LpUbSV6eGRr3RWXDArM8p9Q65FKiFekAakkyia"),
  getOfficial(ChainId.BSC, "sablier-flow-bsc", "2vU8KF4yWh3vvFjtg7MrRXMnYF3hPX2T3cvVBdaiXhNb"),
  getOfficial(ChainId.CHILIZ, "sablier-flow-chiliz", "7QX7tJsANNFpxFLLjqzmXRzfY1wPGp3Lty5xGbhgADa6"),
  getOfficial(ChainId.GNOSIS, "sablier-flow-gnosis", "4KiJ53cTNKdFWPBPmDNQ55tYj8hn1WQg8R4UcTY2STLL"),
  getOfficial(ChainId.IOTEX, "sablier-flow-iotex", "6No3QmRiC8HXLEerDFoBpF47jUPRjhntmv28HHEMxcA2"),
  getCustom(ChainId.LIGHTLINK, "sablier-flow-lightlink"),
  getOfficial(ChainId.LINEA, "sablier-flow-linea", "DV9XgcCCPKzUn6pgetg4yPetpW2fNoRKBUQC43aNeLG6"),
  getOfficial(ChainId.MODE, "sablier-flow-mode", "9TwfoUZoxYUyxzDgspCPyxW6uMUKetWQDaTGsZjY1qJZ"),
  getOfficial(ChainId.OP_MAINNET, "sablier-flow-optimism", "AygPgsehNGSB4K7DYYtvBPhTpEiU4dCu3nt95bh9FhRf"),
  getOfficial(ChainId.POLYGON, "sablier-flow-polygon", "ykp38sLarwz3cpmjSSPqo7UuTjYtkZ1KiL4PM2qwmT8"),
  getOfficial(ChainId.SCROLL, "sablier-flow-scroll", "HFpTrPzJyrHKWZ9ebb4VFRQSxRwpepyfz5wd138daFkF"),
  getCustom(ChainId.ULTRA, "sablier-flow-ultra"),
  getCustom(ChainId.XDC, "sablier-flow-xdc"),
  getOfficial(ChainId.ZK_SYNC_ERA, "sablier-flow-zksync", "9DRgWhDAMovpkej3eT8izum6jxEKHE62ciArffsTAScx"),
  // ────────────────────────────────────────────────────────────────────────────────
  // Testnets
  // ────────────────────────────────────────────────────────────────────────────────
  getOfficial(
    ChainId.ARBITRUM_SEPOLIA,
    "sablier-flow-arbitrum-sepolia",
    "2uWnxpYiDMkEMu1urxqt925mLfuax9XbvfcBoD97AU6d",
  ),
  getOfficial(ChainId.BASE_SEPOLIA, "sablier-flow-base-sepolia", "AsnKT1waQMvuQxZAqfFuYwtRtAfN8uekDu75jPttfyLh"),
  getOfficial(ChainId.ETHEREUM_SEPOLIA, "sablier-flow-sepolia", "EU9AWmJjrjMRkjxcdHfuWPZvPTNAL3hiXfNGN5MwUpvm"),
  getOfficial(ChainId.OP_SEPOLIA, "sablier-flow-optimism-sepolia", "EFKqBB6TeH6etGuHCffnbMbETEgDZ6U29Lgpc4gpYvdB"),
];

export default subgraphs;
