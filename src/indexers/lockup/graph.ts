import { chains } from "@src/chains";
import { Protocol } from "@src/enums";
import type { Sablier } from "@src/types";
import type { TheGraphCustomChainId } from "../config";
import { resolveCustomSubgraph, resolveOfficialSubgraph } from "../helpers";

function custom(chainId: TheGraphCustomChainId, name: string): Sablier.Indexer.TheGraph {
  return resolveCustomSubgraph(Protocol.Lockup, chainId, name);
}

function official(chainId: number, name: string, id: string): Sablier.Indexer.TheGraph {
  return resolveOfficialSubgraph(Protocol.Lockup, chainId, name, id);
}

const graph = [
  /* -------------------------------------------------------------------------- */
  /*                                  MAINNETS                                  */
  /* -------------------------------------------------------------------------- */
  official(chains.ethereum.id, "sablier-lockup-ethereum", "AvDAMYYHGaEwn9F9585uqq6MM5CfvRtYcb7KjK7LKPCt"),
  official(chains.abstract.id, "sablier-lockup-abstract", "2QjTdDFY233faXksUruMERMiDoQDdtGG5hBLC27aT1Pw"),
  official(chains.arbitrum.id, "sablier-lockup-arbitrum", "yvDXXHSyv6rGPSzfpbBcbQmMFrECac3Q2zADkYsMxam"),
  official(chains.avalanche.id, "sablier-lockup-avalanche", "FTDmonvFEm1VGkzECcnDY2CPHcW5dSmHRurSjEEfTkCX"),
  official(chains.base.id, "sablier-lockup-base", "778GfecD9tsyB4xNnz4wfuAyfHU6rqGr79VCPZKu3t2F"),
  official(chains.berachain.id, "sablier-lockup-berachain", "C2r13APcUemQtVdPFm7p7T3aJkU2rH2EvdZzrQ53zi14"),
  official(chains.blast.id, "sablier-lockup-blast", "8MBBc6ET4izgJRrybgWzPjokhZKSjk43BNY1q3xcb8Es"),
  official(chains.bsc.id, "sablier-lockup-bsc", "A8Vc9hi7j45u7P8Uw5dg4uqYJgPo4x1rB4oZtTVaiccK"),
  official(chains.chiliz.id, "sablier-lockup-chiliz", "4KsXUFvsKFHH7Q8k3BPgEv2NhCJJGwG78gCPAUpncYb"),
  official(chains.gnosis.id, "sablier-lockup-gnosis", "DtKniy1RvB19q1r2g1WLN4reMNKDacEnuAjh284rW2iK"),
  official(chains.iotex.id, "sablier-lockup-iotex", "2P3sxwmcWBjMUv1C79Jh4h6VopBaBZeTocYWDUQqwWFV"),
  custom(chains.lightlink.id, "sablier-lockup-lightlink"),
  official(chains.linea.id, "sablier-lockup-linea", "GvpecytqVzLzuwuQB3enozXoaZRFoVx8Kr7qrfMiE9bs"),
  official(chains.mode.id, "sablier-lockup-mode", "oSBvUM371as1pJh8HQ72NMRMb3foV3wuheULfkNf5vy"),
  official(chains.optimism.id, "sablier-lockup-optimism", "NZHzd2JNFKhHP5EWUiDxa5TaxGCFbSD4g6YnYr8JGi6"),
  official(chains.polygon.id, "sablier-lockup-polygon", "8fgeQMEQ8sskVeWE5nvtsVL2VpezDrAkx2d1VeiHiheu"),
  official(chains.scroll.id, "sablier-lockup-scroll", "GycpYx8c9eRqxvEAfqnpNd1ZfXeuLzjRhnG7vvYaqEE1"),
  custom(chains.xdc.id, "sablier-lockup-xdc"),
  official(chains.zksync.id, "sablier-lockup-zksync", "5yDtFSxyRuqyjvGJyyuQhMEW3Uah7Ddy2KFSKVhy9VMa"),
  /* -------------------------------------------------------------------------- */
  /*                                  TESTNETS                                  */
  /* -------------------------------------------------------------------------- */
  official(
    chains.arbitrumSepolia.id,
    "sablier-lockup-arbitrum-sepolia",
    "ApEFvaPGARHedGmFp6TRQu7DoDHQKwt1LPWi1ka6DFHT",
  ),
  official(chains.baseSepolia.id, "sablier-lockup-base-sepolia", "DdiYENuyh5ztSybRJnBnCZuUgESkFasjGFHZUbURpKHz"),
  official(chains.ethereumSepolia.id, "sablier-lockup-sepolia", "5yDtFSxyRuqyjvGJyyuQhMEW3Uah7Ddy2KFSKVhy9VMa"),
  official(
    chains.optimismSepolia.id,
    "sablier-lockup-optimism-sepolia",
    "2LFYyhMVMUMYA2q7XMMnBvCs6v6awWxBeMuMk3tMtmiT",
  ),
];

export default graph;
