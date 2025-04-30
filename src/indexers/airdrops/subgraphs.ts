import { ChainId } from "@src/chains/ids";
import type { Sablier } from "@src/types";
import type { CustomChainId } from "../config";
import { getCustomSubgraph, getOfficialSubgraph } from "../helpers";

function getCustom(chainId: CustomChainId, name: string): Sablier.IndexerSubgraph {
  return getCustomSubgraph("airdrops", chainId, name);
}

function getOfficial(chainId: number, name: string, id: string): Sablier.IndexerSubgraph {
  return getOfficialSubgraph("airdrops", chainId, name, id);
}

const subgraphs = [
  // ────────────────────────────────────────────────────────────────────────────────
  // Mainnets
  // ────────────────────────────────────────────────────────────────────────────────
  getOfficial(ChainId.ETHEREUM, "sablier-airdrops-ethereum", "DFD73EcSue44R7mpHvXeyvcgaT8tR1iKakZFjBsiFpjs"),
  getOfficial(ChainId.ABSTRACT, "sablier-airdrops-abstract", "DRrf6mYEhRt9QieKvTjDHnSWcBm3GW96hpedMKVxLABx"),
  getOfficial(ChainId.ARBITRUM_ONE, "sablier-airdrops-arbitrum", "HkHDg6NVVVeobhpcU4pTPMktyC25zd6xAQBGpYrWDgRr"),
  getOfficial(ChainId.AVALANCHE, "sablier-airdrops-avalanche", "CpbN5Ps25UzqfdoqYdrjoSK4Him6nwDvdLK6a2sGS1PA"),
  getOfficial(ChainId.BASE, "sablier-airdrops-base", "4SxPXkQNifgBYqje2C4yP5gz69erZwtD7GuLWgXHSLGe"),
  getOfficial(ChainId.BERACHAIN, "sablier-airdrops-berachain", "CnYsdmzuY3Mebwywvqv1WrXw9UZuPMTrxoGgR2UdThJE"),
  getOfficial(ChainId.BLAST, "sablier-airdrops-blast", "657bogqYaDSSeqsoJcJ1kRqGnc3jC15UmcVLzsYxyxKK"),
  getOfficial(ChainId.BSC, "sablier-airdrops-bsc", "FXQT42kQPvpMJgsF5Bs6CqpxVvPP1LBqEhWThCCLMeGL"),
  getOfficial(ChainId.CHILIZ, "sablier-airdrops-chiliz", "6LK1aqrhzZCp6c88MEBDAR1VDLpZQiXpBKkceJ5Lu4LU"),
  getOfficial(ChainId.GNOSIS, "sablier-airdrops-gnosis", "kQEY5PYbjx4SMKyMUwqJHRLDzKH1aUqGsf1cnibU7Kn"),
  getOfficial(ChainId.IOTEX, "sablier-airdrops-iotex", "G39uCzr1FDY7pBFe8DwShAxhMeC6dbZetutVg6wjtks3"),
  getCustom(ChainId.LIGHTLINK, "sablier-airdrops-lightlink"),
  getOfficial(ChainId.LINEA, "sablier-airdrops-linea", "6koYFSd8FQizdQWLTdRpL1yTmAbpMgN1vZN5W6ajZiTN"),
  getOfficial(ChainId.MODE, "sablier-airdrops-mode", "HZMkVX5c2qf7BqbidwpcQMsHGWTDdEKwVjnwenzo9s6m"),
  getOfficial(ChainId.OP_MAINNET, "sablier-airdrops-optimism", "CHJtCNDzPqngpa1YJoaVrjuufZL6k6VkEkG9ZFUMQzF7"),
  getOfficial(ChainId.POLYGON, "sablier-airdrops-polygon", "FRbBKiDyM5YpFAqHLXRfQWwQdMGzFL82hqoPXPpXzAHE"),
  getOfficial(ChainId.SCROLL, "sablier-airdrops-scroll", "Ev4xS8VxuoUcpgqz5A2BkTgQxQeskm4Fg41XzVJ2DX9"),
  getCustom(ChainId.ULTRA, "sablier-airdrops-ultra"),
  getCustom(ChainId.XDC, "sablier-airdrops-xdc"),
  getOfficial(ChainId.ZK_SYNC_ERA, "sablier-airdrops-zksync", "64iDUwNVWKukw67nqTXif5taEfLug4Qf1c2suAv5hrqN"),
  // ────────────────────────────────────────────────────────────────────────────────
  // Testnets
  // ────────────────────────────────────────────────────────────────────────────────
  getOfficial(
    ChainId.ARBITRUM_SEPOLIA,
    "sablier-airdrops-arbitrum-sepolia",
    "3S7v3VkDq8XMBd8EFVhKur2Vk44xScaW8a4BRjoPuYWk",
  ),
  getOfficial(ChainId.BASE_SEPOLIA, "sablier-airdrops-base-sepolia", "4R2hm27YJ7CVEJ97BbBJz2r4KTKYc8sTqqzrD8UzEfJt"),
  getOfficial(ChainId.ETHEREUM_SEPOLIA, "sablier-airdrops-sepolia", "8PLGDyXEsPgRTAnozL7MAjmTUFY4TBzs8i4F9Pq3wwSh"),
  getOfficial(ChainId.OP_SEPOLIA, "sablier-airdrops-optimism-sepolia", "3kp1eR2T1XpvvLkSZ7Wtt45DbDaiykTes478RZ7zwTz"),
];

export default subgraphs;
