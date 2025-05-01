import { ChainId } from "@src/chains/ids";
import type { Sablier } from "@src/types";
import type { TheGraphCustomChainId } from "../config";
import { resolveCustomSubgraph, resolveOfficialSubgraph } from "../helpers";

function resolveCustom(chainId: TheGraphCustomChainId, name: string): Sablier.Indexer.TheGraph {
  return resolveCustomSubgraph("lockup", chainId, name);
}

function resolveOfficial(chainId: number, name: string, id: string): Sablier.Indexer.TheGraph {
  return resolveOfficialSubgraph("lockup", chainId, name, id);
}

const subgraphs = [
  // ────────────────────────────────────────────────────────────────────────────────
  // Mainnets
  // ────────────────────────────────────────────────────────────────────────────────
  resolveOfficial(ChainId.ETHEREUM, "sablier-lockup-ethereum", "AvDAMYYHGaEwn9F9585uqq6MM5CfvRtYcb7KjK7LKPCt"),
  resolveOfficial(ChainId.ABSTRACT, "sablier-lockup-abstract", "2QjTdDFY233faXksUruMERMiDoQDdtGG5hBLC27aT1Pw"),
  resolveOfficial(ChainId.ARBITRUM_ONE, "sablier-lockup-arbitrum", "yvDXXHSyv6rGPSzfpbBcbQmMFrECac3Q2zADkYsMxam"),
  resolveOfficial(ChainId.AVALANCHE, "sablier-lockup-avalanche", "FTDmonvFEm1VGkzECcnDY2CPHcW5dSmHRurSjEEfTkCX"),
  resolveOfficial(ChainId.BASE, "sablier-lockup-base", "778GfecD9tsyB4xNnz4wfuAyfHU6rqGr79VCPZKu3t2F"),
  resolveOfficial(ChainId.BERACHAIN, "sablier-lockup-berachain", "C2r13APcUemQtVdPFm7p7T3aJkU2rH2EvdZzrQ53zi14"),
  resolveOfficial(ChainId.BLAST, "sablier-lockup-blast", "8MBBc6ET4izgJRrybgWzPjokhZKSjk43BNY1q3xcb8Es"),
  resolveOfficial(ChainId.BSC, "sablier-lockup-bsc", "A8Vc9hi7j45u7P8Uw5dg4uqYJgPo4x1rB4oZtTVaiccK"),
  resolveOfficial(ChainId.CHILIZ, "sablier-lockup-chiliz", "4KsXUFvsKFHH7Q8k3BPgEv2NhCJJGwG78gCPAUpncYb"),
  resolveOfficial(ChainId.GNOSIS, "sablier-lockup-gnosis", "DtKniy1RvB19q1r2g1WLN4reMNKDacEnuAjh284rW2iK"),
  resolveOfficial(ChainId.IOTEX, "sablier-lockup-iotex", "2P3sxwmcWBjMUv1C79Jh4h6VopBaBZeTocYWDUQqwWFV"),
  resolveCustom(ChainId.LIGHTLINK, "sablier-lockup-lightlink"),
  resolveOfficial(ChainId.LINEA, "sablier-lockup-linea", "GvpecytqVzLzuwuQB3enozXoaZRFoVx8Kr7qrfMiE9bs"),
  resolveOfficial(ChainId.MODE, "sablier-lockup-mode", "oSBvUM371as1pJh8HQ72NMRMb3foV3wuheULfkNf5vy"),
  resolveOfficial(ChainId.OP_MAINNET, "sablier-lockup-optimism", "NZHzd2JNFKhHP5EWUiDxa5TaxGCFbSD4g6YnYr8JGi6"),
  resolveOfficial(ChainId.POLYGON, "sablier-lockup-polygon", "8fgeQMEQ8sskVeWE5nvtsVL2VpezDrAkx2d1VeiHiheu"),
  resolveOfficial(ChainId.SCROLL, "sablier-lockup-scroll", "GycpYx8c9eRqxvEAfqnpNd1ZfXeuLzjRhnG7vvYaqEE1"),
  resolveCustom(ChainId.ULTRA, "sablier-lockup-ultra"),
  resolveCustom(ChainId.XDC, "sablier-lockup-xdc"),
  resolveOfficial(ChainId.ZK_SYNC_ERA, "sablier-lockup-zksync", "5yDtFSxyRuqyjvGJyyuQhMEW3Uah7Ddy2KFSKVhy9VMa"),
  // ────────────────────────────────────────────────────────────────────────────────
  // Testnets
  // ────────────────────────────────────────────────────────────────────────────────
  resolveOfficial(
    ChainId.ARBITRUM_SEPOLIA,
    "sablier-lockup-arbitrum-sepolia",
    "ApEFvaPGARHedGmFp6TRQu7DoDHQKwt1LPWi1ka6DFHT",
  ),
  resolveOfficial(ChainId.BASE_SEPOLIA, "sablier-lockup-base-sepolia", "DdiYENuyh5ztSybRJnBnCZuUgESkFasjGFHZUbURpKHz"),
  resolveOfficial(ChainId.ETHEREUM_SEPOLIA, "sablier-lockup-sepolia", "5yDtFSxyRuqyjvGJyyuQhMEW3Uah7Ddy2KFSKVhy9VMa"),
  resolveOfficial(
    ChainId.OP_SEPOLIA,
    "sablier-lockup-optimism-sepolia",
    "2LFYyhMVMUMYA2q7XMMnBvCs6v6awWxBeMuMk3tMtmiT",
  ),
];

export default subgraphs;
