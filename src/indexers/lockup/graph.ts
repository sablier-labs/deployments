import { chains } from "@src/chains";
import { Protocol } from "@src/enums";
import type { Sablier } from "@src/types";
import type { TheGraphCustomChainId } from "../config";
import { resolveCustomSubgraph, resolveOfficialSubgraph } from "../helpers";

function resolveCustom(chainId: TheGraphCustomChainId, name: string): Sablier.Indexer.TheGraph {
  return resolveCustomSubgraph(Protocol.Lockup, chainId, name);
}

function resolveOfficial(chainId: number, name: string, id: string): Sablier.Indexer.TheGraph {
  return resolveOfficialSubgraph(Protocol.Lockup, chainId, name, id);
}

const graph = [
  /* -------------------------------------------------------------------------- */
  /*                                  MAINNETS                                  */
  /* -------------------------------------------------------------------------- */
  resolveOfficial(chains.ethereum.id, "sablier-lockup-ethereum", "AvDAMYYHGaEwn9F9585uqq6MM5CfvRtYcb7KjK7LKPCt"),
  resolveOfficial(chains.abstract.id, "sablier-lockup-abstract", "2QjTdDFY233faXksUruMERMiDoQDdtGG5hBLC27aT1Pw"),
  resolveOfficial(chains.arbitrum.id, "sablier-lockup-arbitrum", "yvDXXHSyv6rGPSzfpbBcbQmMFrECac3Q2zADkYsMxam"),
  resolveOfficial(chains.avalanche.id, "sablier-lockup-avalanche", "FTDmonvFEm1VGkzECcnDY2CPHcW5dSmHRurSjEEfTkCX"),
  resolveOfficial(chains.base.id, "sablier-lockup-base", "778GfecD9tsyB4xNnz4wfuAyfHU6rqGr79VCPZKu3t2F"),
  resolveOfficial(chains.berachain.id, "sablier-lockup-berachain", "C2r13APcUemQtVdPFm7p7T3aJkU2rH2EvdZzrQ53zi14"),
  resolveOfficial(chains.blast.id, "sablier-lockup-blast", "8MBBc6ET4izgJRrybgWzPjokhZKSjk43BNY1q3xcb8Es"),
  resolveOfficial(chains.bsc.id, "sablier-lockup-bsc", "A8Vc9hi7j45u7P8Uw5dg4uqYJgPo4x1rB4oZtTVaiccK"),
  resolveOfficial(chains.chiliz.id, "sablier-lockup-chiliz", "4KsXUFvsKFHH7Q8k3BPgEv2NhCJJGwG78gCPAUpncYb"),
  resolveOfficial(chains.gnosis.id, "sablier-lockup-gnosis", "DtKniy1RvB19q1r2g1WLN4reMNKDacEnuAjh284rW2iK"),
  resolveOfficial(chains.iotex.id, "sablier-lockup-iotex", "2P3sxwmcWBjMUv1C79Jh4h6VopBaBZeTocYWDUQqwWFV"),
  resolveCustom(chains.lightlink.id, "sablier-lockup-lightlink"),
  resolveOfficial(chains.linea.id, "sablier-lockup-linea", "GvpecytqVzLzuwuQB3enozXoaZRFoVx8Kr7qrfMiE9bs"),
  resolveOfficial(chains.mode.id, "sablier-lockup-mode", "oSBvUM371as1pJh8HQ72NMRMb3foV3wuheULfkNf5vy"),
  resolveOfficial(chains.optimism.id, "sablier-lockup-optimism", "NZHzd2JNFKhHP5EWUiDxa5TaxGCFbSD4g6YnYr8JGi6"),
  resolveOfficial(chains.polygon.id, "sablier-lockup-polygon", "8fgeQMEQ8sskVeWE5nvtsVL2VpezDrAkx2d1VeiHiheu"),
  resolveOfficial(chains.scroll.id, "sablier-lockup-scroll", "GycpYx8c9eRqxvEAfqnpNd1ZfXeuLzjRhnG7vvYaqEE1"),
  resolveCustom(chains.xdc.id, "sablier-lockup-xdc"),
  resolveOfficial(chains.zksync.id, "sablier-lockup-zksync", "5yDtFSxyRuqyjvGJyyuQhMEW3Uah7Ddy2KFSKVhy9VMa"),
  /* -------------------------------------------------------------------------- */
  /*                                  TESTNETS                                  */
  /* -------------------------------------------------------------------------- */
  resolveOfficial(
    chains.arbitrumSepolia.id,
    "sablier-lockup-arbitrum-sepolia",
    "ApEFvaPGARHedGmFp6TRQu7DoDHQKwt1LPWi1ka6DFHT",
  ),
  resolveOfficial(chains.baseSepolia.id, "sablier-lockup-base-sepolia", "DdiYENuyh5ztSybRJnBnCZuUgESkFasjGFHZUbURpKHz"),
  resolveOfficial(chains.ethereumSepolia.id, "sablier-lockup-sepolia", "5yDtFSxyRuqyjvGJyyuQhMEW3Uah7Ddy2KFSKVhy9VMa"),
  resolveOfficial(
    chains.optimismSepolia.id,
    "sablier-lockup-optimism-sepolia",
    "2LFYyhMVMUMYA2q7XMMnBvCs6v6awWxBeMuMk3tMtmiT",
  ),
];

export default graph;
