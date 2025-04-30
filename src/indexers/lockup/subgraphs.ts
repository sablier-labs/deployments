import { ChainId } from "@src/chains/ids";
import type { Sablier } from "@src/types";
import { getCustomSubgraph, getOfficialSubgraph } from "../helpers";

function getCustom(chainId: number, name: string): Sablier.Indexer | undefined {
  return getCustomSubgraph("lockup", chainId, name);
}

function getOfficial(chainId: number, name: string, id: string): Sablier.Indexer | undefined {
  return getOfficialSubgraph("lockup", chainId, name, id);
}

const subgraphs = [
  // ────────────────────────────────────────────────────────────────────────────────
  // Mainnets
  // ────────────────────────────────────────────────────────────────────────────────
  getOfficial(ChainId.ETHEREUM, "sablier-lockup-ethereum", "AvDAMYYHGaEwn9F9585uqq6MM5CfvRtYcb7KjK7LKPCt"),
  getOfficial(ChainId.ABSTRACT, "sablier-lockup-abstract", "2QjTdDFY233faXksUruMERMiDoQDdtGG5hBLC27aT1Pw"),
  getOfficial(ChainId.ARBITRUM_ONE, "sablier-lockup-arbitrum", "yvDXXHSyv6rGPSzfpbBcbQmMFrECac3Q2zADkYsMxam"),
  getOfficial(ChainId.AVALANCHE, "sablier-lockup-avalanche", "FTDmonvFEm1VGkzECcnDY2CPHcW5dSmHRurSjEEfTkCX"),
  getOfficial(ChainId.BASE, "sablier-lockup-base", "778GfecD9tsyB4xNnz4wfuAyfHU6rqGr79VCPZKu3t2F"),
  getOfficial(ChainId.BERACHAIN, "sablier-lockup-berachain", "C2r13APcUemQtVdPFm7p7T3aJkU2rH2EvdZzrQ53zi14"),
  getOfficial(ChainId.BLAST, "sablier-lockup-blast", "8MBBc6ET4izgJRrybgWzPjokhZKSjk43BNY1q3xcb8Es"),
  getOfficial(ChainId.BSC, "sablier-lockup-bsc", "A8Vc9hi7j45u7P8Uw5dg4uqYJgPo4x1rB4oZtTVaiccK"),
  getOfficial(ChainId.CHILIZ, "sablier-lockup-chiliz", "4KsXUFvsKFHH7Q8k3BPgEv2NhCJJGwG78gCPAUpncYb"),
  getOfficial(ChainId.GNOSIS, "sablier-lockup-gnosis", "DtKniy1RvB19q1r2g1WLN4reMNKDacEnuAjh284rW2iK"),
  getOfficial(ChainId.IOTEX, "sablier-lockup-iotex", "2P3sxwmcWBjMUv1C79Jh4h6VopBaBZeTocYWDUQqwWFV"),
  getCustom(ChainId.LIGHTLINK, "sablier-lockup-lightlink"),
  getOfficial(ChainId.LINEA, "sablier-lockup-linea", "GvpecytqVzLzuwuQB3enozXoaZRFoVx8Kr7qrfMiE9bs"),
  getOfficial(ChainId.MODE, "sablier-lockup-mode", "oSBvUM371as1pJh8HQ72NMRMb3foV3wuheULfkNf5vy"),
  getOfficial(ChainId.OP_MAINNET, "sablier-lockup-optimism", "NZHzd2JNFKhHP5EWUiDxa5TaxGCFbSD4g6YnYr8JGi6"),
  getOfficial(ChainId.POLYGON, "sablier-lockup-polygon", "8fgeQMEQ8sskVeWE5nvtsVL2VpezDrAkx2d1VeiHiheu"),
  getOfficial(ChainId.SCROLL, "sablier-lockup-scroll", "GycpYx8c9eRqxvEAfqnpNd1ZfXeuLzjRhnG7vvYaqEE1"),
  getCustom(ChainId.ULTRA, "sablier-lockup-ultra"),
  getCustom(ChainId.XDC, "sablier-lockup-xdc"),
  getOfficial(ChainId.ZK_SYNC_ERA, "sablier-lockup-zksync", "5yDtFSxyRuqyjvGJyyuQhMEW3Uah7Ddy2KFSKVhy9VMa"),
  // ────────────────────────────────────────────────────────────────────────────────
  // Testnets
  // ────────────────────────────────────────────────────────────────────────────────
  getOfficial(
    ChainId.ARBITRUM_SEPOLIA,
    "sablier-lockup-arbitrum-sepolia",
    "ApEFvaPGARHedGmFp6TRQu7DoDHQKwt1LPWi1ka6DFHT",
  ),
  getOfficial(ChainId.BASE_SEPOLIA, "sablier-lockup-base-sepolia", "DdiYENuyh5ztSybRJnBnCZuUgESkFasjGFHZUbURpKHz"),
  getOfficial(ChainId.ETHEREUM_SEPOLIA, "sablier-lockup-sepolia", "5yDtFSxyRuqyjvGJyyuQhMEW3Uah7Ddy2KFSKVhy9VMa"),
  getOfficial(ChainId.OP_SEPOLIA, "sablier-lockup-optimism-sepolia", "2LFYyhMVMUMYA2q7XMMnBvCs6v6awWxBeMuMk3tMtmiT"),
];

export default subgraphs;
