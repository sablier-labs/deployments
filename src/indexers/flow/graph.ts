import { chains } from "@src/chains";
import { Protocol } from "@src/enums";
import type { Sablier } from "@src/types";
import type { TheGraphCustomChainId } from "../config";
import { resolveCustomSubgraph, resolveOfficialSubgraph } from "../helpers";

function resolveCustom(chainId: TheGraphCustomChainId, name: string): Sablier.Indexer.TheGraph {
  return resolveCustomSubgraph(Protocol.Flow, chainId, name);
}

function resolveOfficial(chainId: number, name: string, id: string): Sablier.Indexer.TheGraph {
  return resolveOfficialSubgraph(Protocol.Flow, chainId, name, id);
}

const graph = [
  // ────────────────────────────────────────────────────────────────────────────────
  // Mainnets
  // ────────────────────────────────────────────────────────────────────────────────
  resolveOfficial(chains.ethereum.id, "sablier-flow-ethereum", "ECxBJhKceBGaVvK6vqmK3VQAncKwPeAQutEb8TeiUiod"),
  resolveOfficial(chains.abstract.id, "sablier-flow-abstract", "Gq3e1gihMoSynURwGXQnPoKGVZzdsyomdrMH934vQHuG"),
  resolveOfficial(chains.arbitrum.id, "sablier-flow-arbitrum", "C3kBBUVtW2rxqGpAgSgEuSaT49izkH6Q8UibRt7XFTyW"),
  resolveOfficial(chains.avalanche.id, "sablier-flow-avalanche", "6PAizjTALVqLLB7Ycq6XnpTeck8Z8QUpDFnVznMnisUh"),
  resolveOfficial(chains.base.id, "sablier-flow-base", "4XSxXh8ZgkzaA35nrbQG9Ry3FYz3ZFD8QBdWwVg5pF9W"),
  resolveOfficial(chains.berachain.id, "sablier-flow-berachain", "J87eaBLfTe7kKWgUGqe5TxntNCzA4pyWmqJowMddehuh"),
  resolveOfficial(chains.blast.id, "sablier-flow-blast", "8joiC9LpUbSV6eGRr3RWXDArM8p9Q65FKiFekAakkyia"),
  resolveOfficial(chains.bsc.id, "sablier-flow-bsc", "2vU8KF4yWh3vvFjtg7MrRXMnYF3hPX2T3cvVBdaiXhNb"),
  resolveOfficial(chains.chiliz.id, "sablier-flow-chiliz", "7QX7tJsANNFpxFLLjqzmXRzfY1wPGp3Lty5xGbhgADa6"),
  resolveOfficial(chains.gnosis.id, "sablier-flow-gnosis", "4KiJ53cTNKdFWPBPmDNQ55tYj8hn1WQg8R4UcTY2STLL"),
  resolveOfficial(chains.iotex.id, "sablier-flow-iotex", "6No3QmRiC8HXLEerDFoBpF47jUPRjhntmv28HHEMxcA2"),
  resolveCustom(chains.lightlink.id, "sablier-flow-lightlink"),
  resolveOfficial(chains.linea.id, "sablier-flow-linea", "DV9XgcCCPKzUn6pgetg4yPetpW2fNoRKBUQC43aNeLG6"),
  resolveOfficial(chains.mode.id, "sablier-flow-mode", "9TwfoUZoxYUyxzDgspCPyxW6uMUKetWQDaTGsZjY1qJZ"),
  resolveOfficial(chains.optimism.id, "sablier-flow-optimism", "AygPgsehNGSB4K7DYYtvBPhTpEiU4dCu3nt95bh9FhRf"),
  resolveOfficial(chains.polygon.id, "sablier-flow-polygon", "ykp38sLarwz3cpmjSSPqo7UuTjYtkZ1KiL4PM2qwmT8"),
  resolveOfficial(chains.scroll.id, "sablier-flow-scroll", "HFpTrPzJyrHKWZ9ebb4VFRQSxRwpepyfz5wd138daFkF"),
  resolveCustom(chains.xdc.id, "sablier-flow-xdc"),
  resolveOfficial(chains.zksync.id, "sablier-flow-zksync", "9DRgWhDAMovpkej3eT8izum6jxEKHE62ciArffsTAScx"),
  // ────────────────────────────────────────────────────────────────────────────────
  // Testnets
  // ────────────────────────────────────────────────────────────────────────────────
  resolveOfficial(
    chains.arbitrumSepolia.id,
    "sablier-flow-arbitrum-sepolia",
    "2uWnxpYiDMkEMu1urxqt925mLfuax9XbvfcBoD97AU6d",
  ),
  resolveOfficial(chains.baseSepolia.id, "sablier-flow-base-sepolia", "AsnKT1waQMvuQxZAqfFuYwtRtAfN8uekDu75jPttfyLh"),
  resolveOfficial(chains.ethereumSepolia.id, "sablier-flow-sepolia", "EU9AWmJjrjMRkjxcdHfuWPZvPTNAL3hiXfNGN5MwUpvm"),
  resolveOfficial(
    chains.optimismSepolia.id,
    "sablier-flow-optimism-sepolia",
    "EFKqBB6TeH6etGuHCffnbMbETEgDZ6U29Lgpc4gpYvdB",
  ),
];

export default graph;
