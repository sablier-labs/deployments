import { chains } from "@src/chains";
import { Protocol } from "@src/enums";
import type { Sablier } from "@src/types";
import type { TheGraphCustomChainId } from "../config";
import { resolveCustomSubgraph, resolveOfficialSubgraph } from "../helpers";

function custom(chainId: TheGraphCustomChainId, name: string): Sablier.Indexer.TheGraph {
  return resolveCustomSubgraph(Protocol.Flow, chainId, name);
}

function official(chainId: number, name: string, id: string): Sablier.Indexer.TheGraph {
  return resolveOfficialSubgraph(Protocol.Flow, chainId, name, id);
}

export const graph = [
  // ────────────────────────────────────────────────────────────────────────────────
  // Mainnets
  // ────────────────────────────────────────────────────────────────────────────────
  official(chains.ethereum.id, "sablier-flow-ethereum", "ECxBJhKceBGaVvK6vqmK3VQAncKwPeAQutEb8TeiUiod"),
  official(chains.abstract.id, "sablier-flow-abstract", "Gq3e1gihMoSynURwGXQnPoKGVZzdsyomdrMH934vQHuG"),
  official(chains.arbitrum.id, "sablier-flow-arbitrum", "C3kBBUVtW2rxqGpAgSgEuSaT49izkH6Q8UibRt7XFTyW"),
  official(chains.avalanche.id, "sablier-flow-avalanche", "6PAizjTALVqLLB7Ycq6XnpTeck8Z8QUpDFnVznMnisUh"),
  official(chains.base.id, "sablier-flow-base", "4XSxXh8ZgkzaA35nrbQG9Ry3FYz3ZFD8QBdWwVg5pF9W"),
  official(chains.berachain.id, "sablier-flow-berachain", "J87eaBLfTe7kKWgUGqe5TxntNCzA4pyWmqJowMddehuh"),
  official(chains.blast.id, "sablier-flow-blast", "8joiC9LpUbSV6eGRr3RWXDArM8p9Q65FKiFekAakkyia"),
  official(chains.bsc.id, "sablier-flow-bsc", "2vU8KF4yWh3vvFjtg7MrRXMnYF3hPX2T3cvVBdaiXhNb"),
  official(chains.chiliz.id, "sablier-flow-chiliz", "7QX7tJsANNFpxFLLjqzmXRzfY1wPGp3Lty5xGbhgADa6"),
  official(chains.gnosis.id, "sablier-flow-gnosis", "4KiJ53cTNKdFWPBPmDNQ55tYj8hn1WQg8R4UcTY2STLL"),
  official(chains.iotex.id, "sablier-flow-iotex", "6No3QmRiC8HXLEerDFoBpF47jUPRjhntmv28HHEMxcA2"),
  custom(chains.lightlink.id, "sablier-flow-lightlink"),
  official(chains.linea.id, "sablier-flow-linea", "DV9XgcCCPKzUn6pgetg4yPetpW2fNoRKBUQC43aNeLG6"),
  official(chains.mode.id, "sablier-flow-mode", "9TwfoUZoxYUyxzDgspCPyxW6uMUKetWQDaTGsZjY1qJZ"),
  official(chains.optimism.id, "sablier-flow-optimism", "AygPgsehNGSB4K7DYYtvBPhTpEiU4dCu3nt95bh9FhRf"),
  official(chains.polygon.id, "sablier-flow-polygon", "ykp38sLarwz3cpmjSSPqo7UuTjYtkZ1KiL4PM2qwmT8"),
  official(chains.scroll.id, "sablier-flow-scroll", "HFpTrPzJyrHKWZ9ebb4VFRQSxRwpepyfz5wd138daFkF"),
  custom(chains.xdc.id, "sablier-flow-xdc"),
  official(chains.zksync.id, "sablier-flow-zksync", "9DRgWhDAMovpkej3eT8izum6jxEKHE62ciArffsTAScx"),
  // ────────────────────────────────────────────────────────────────────────────────
  // Testnets
  // ────────────────────────────────────────────────────────────────────────────────
  official(chains.arbitrumSepolia.id, "sablier-flow-arbitrum-sepolia", "2uWnxpYiDMkEMu1urxqt925mLfuax9XbvfcBoD97AU6d"),
  official(chains.baseSepolia.id, "sablier-flow-base-sepolia", "AsnKT1waQMvuQxZAqfFuYwtRtAfN8uekDu75jPttfyLh"),
  official(chains.ethereumSepolia.id, "sablier-flow-sepolia", "EU9AWmJjrjMRkjxcdHfuWPZvPTNAL3hiXfNGN5MwUpvm"),
  official(chains.optimismSepolia.id, "sablier-flow-optimism-sepolia", "EFKqBB6TeH6etGuHCffnbMbETEgDZ6U29Lgpc4gpYvdB"),
];
