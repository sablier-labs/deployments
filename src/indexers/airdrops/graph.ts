import { chains } from "@src/chains";
import { Protocol } from "@src/enums";
import type { Sablier } from "@src/types";
import type { TheGraphCustomChainId } from "../config";
import { resolveCustomSubgraph, resolveOfficialSubgraph } from "../helpers";

function resolveCustom(chainId: TheGraphCustomChainId, name: string): Sablier.Indexer.TheGraph {
  return resolveCustomSubgraph(Protocol.Airdrops, chainId, name);
}

function resolveOfficial(chainId: number, name: string, id: string): Sablier.Indexer.TheGraph {
  return resolveOfficialSubgraph(Protocol.Airdrops, chainId, name, id);
}

const graph = [
  /* -------------------------------------------------------------------------- */
  /*                                  MAINNETS                                  */
  /* -------------------------------------------------------------------------- */
  resolveOfficial(chains.ethereum.id, "sablier-airdrops-ethereum", "DFD73EcSue44R7mpHvXeyvcgaT8tR1iKakZFjBsiFpjs"),
  resolveOfficial(chains.abstract.id, "sablier-airdrops-abstract", "DRrf6mYEhRt9QieKvTjDHnSWcBm3GW96hpedMKVxLABx"),
  resolveOfficial(chains.arbitrum.id, "sablier-airdrops-arbitrum", "HkHDg6NVVVeobhpcU4pTPMktyC25zd6xAQBGpYrWDgRr"),
  resolveOfficial(chains.avalanche.id, "sablier-airdrops-avalanche", "CpbN5Ps25UzqfdoqYdrjoSK4Him6nwDvdLK6a2sGS1PA"),
  resolveOfficial(chains.base.id, "sablier-airdrops-base", "4SxPXkQNifgBYqje2C4yP5gz69erZwtD7GuLWgXHSLGe"),
  resolveOfficial(chains.berachain.id, "sablier-airdrops-berachain", "CnYsdmzuY3Mebwywvqv1WrXw9UZuPMTrxoGgR2UdThJE"),
  resolveOfficial(chains.blast.id, "sablier-airdrops-blast", "657bogqYaDSSeqsoJcJ1kRqGnc3jC15UmcVLzsYxyxKK"),
  resolveOfficial(chains.bsc.id, "sablier-airdrops-bsc", "FXQT42kQPvpMJgsF5Bs6CqpxVvPP1LBqEhWThCCLMeGL"),
  resolveOfficial(chains.chiliz.id, "sablier-airdrops-chiliz", "6LK1aqrhzZCp6c88MEBDAR1VDLpZQiXpBKkceJ5Lu4LU"),
  resolveOfficial(chains.gnosis.id, "sablier-airdrops-gnosis", "kQEY5PYbjx4SMKyMUwqJHRLDzKH1aUqGsf1cnibU7Kn"),
  resolveOfficial(chains.iotex.id, "sablier-airdrops-iotex", "G39uCzr1FDY7pBFe8DwShAxhMeC6dbZetutVg6wjtks3"),
  resolveCustom(chains.lightlink.id, "sablier-airdrops-lightlink"),
  resolveOfficial(chains.linea.id, "sablier-airdrops-linea", "6koYFSd8FQizdQWLTdRpL1yTmAbpMgN1vZN5W6ajZiTN"),
  resolveOfficial(chains.mode.id, "sablier-airdrops-mode", "HZMkVX5c2qf7BqbidwpcQMsHGWTDdEKwVjnwenzo9s6m"),
  resolveOfficial(chains.optimism.id, "sablier-airdrops-optimism", "CHJtCNDzPqngpa1YJoaVrjuufZL6k6VkEkG9ZFUMQzF7"),
  resolveOfficial(chains.polygon.id, "sablier-airdrops-polygon", "FRbBKiDyM5YpFAqHLXRfQWwQdMGzFL82hqoPXPpXzAHE"),
  resolveOfficial(chains.scroll.id, "sablier-airdrops-scroll", "Ev4xS8VxuoUcpgqz5A2BkTgQxQeskm4Fg41XzVJ2DX9"),
  resolveCustom(chains.xdc.id, "sablier-airdrops-xdc"),
  resolveOfficial(chains.zksync.id, "sablier-airdrops-zksync", "64iDUwNVWKukw67nqTXif5taEfLug4Qf1c2suAv5hrqN"),
  /* -------------------------------------------------------------------------- */
  /*                                  TESTNETS                                  */
  /* -------------------------------------------------------------------------- */
  resolveOfficial(
    chains.arbitrumSepolia.id,
    "sablier-airdrops-arbitrum-sepolia",
    "3S7v3VkDq8XMBd8EFVhKur2Vk44xScaW8a4BRjoPuYWk",
  ),
  resolveOfficial(
    chains.baseSepolia.id,
    "sablier-airdrops-base-sepolia",
    "4R2hm27YJ7CVEJ97BbBJz2r4KTKYc8sTqqzrD8UzEfJt",
  ),
  resolveOfficial(
    chains.ethereumSepolia.id,
    "sablier-airdrops-sepolia",
    "8PLGDyXEsPgRTAnozL7MAjmTUFY4TBzs8i4F9Pq3wwSh",
  ),
  resolveOfficial(
    chains.optimismSepolia.id,
    "sablier-airdrops-optimism-sepolia",
    "3kp1eR2T1XpvvLkSZ7Wtt45DbDaiykTes478RZ7zwTz",
  ),
];

export default graph;
