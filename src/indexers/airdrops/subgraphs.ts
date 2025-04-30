import { ChainId } from "@src/chains/ids";
import type { Sablier } from "@src/types";
import type { CustomChainId } from "../config";
import { resolveCustomSubgraph, resolveOfficialSubgraph } from "../helpers";

function resolveCustom(chainId: CustomChainId, name: string): Sablier.IndexerSubgraph {
  return resolveCustomSubgraph("airdrops", chainId, name);
}

function resolveOfficial(chainId: number, name: string, id: string): Sablier.IndexerSubgraph {
  return resolveOfficialSubgraph("airdrops", chainId, name, id);
}

const subgraphs = [
  // ────────────────────────────────────────────────────────────────────────────────
  // Mainnets
  // ────────────────────────────────────────────────────────────────────────────────
  resolveOfficial(ChainId.ETHEREUM, "sablier-airdrops-ethereum", "DFD73EcSue44R7mpHvXeyvcgaT8tR1iKakZFjBsiFpjs"),
  resolveOfficial(ChainId.ABSTRACT, "sablier-airdrops-abstract", "DRrf6mYEhRt9QieKvTjDHnSWcBm3GW96hpedMKVxLABx"),
  resolveOfficial(ChainId.ARBITRUM_ONE, "sablier-airdrops-arbitrum", "HkHDg6NVVVeobhpcU4pTPMktyC25zd6xAQBGpYrWDgRr"),
  resolveOfficial(ChainId.AVALANCHE, "sablier-airdrops-avalanche", "CpbN5Ps25UzqfdoqYdrjoSK4Him6nwDvdLK6a2sGS1PA"),
  resolveOfficial(ChainId.BASE, "sablier-airdrops-base", "4SxPXkQNifgBYqje2C4yP5gz69erZwtD7GuLWgXHSLGe"),
  resolveOfficial(ChainId.BERACHAIN, "sablier-airdrops-berachain", "CnYsdmzuY3Mebwywvqv1WrXw9UZuPMTrxoGgR2UdThJE"),
  resolveOfficial(ChainId.BLAST, "sablier-airdrops-blast", "657bogqYaDSSeqsoJcJ1kRqGnc3jC15UmcVLzsYxyxKK"),
  resolveOfficial(ChainId.BSC, "sablier-airdrops-bsc", "FXQT42kQPvpMJgsF5Bs6CqpxVvPP1LBqEhWThCCLMeGL"),
  resolveOfficial(ChainId.CHILIZ, "sablier-airdrops-chiliz", "6LK1aqrhzZCp6c88MEBDAR1VDLpZQiXpBKkceJ5Lu4LU"),
  resolveOfficial(ChainId.GNOSIS, "sablier-airdrops-gnosis", "kQEY5PYbjx4SMKyMUwqJHRLDzKH1aUqGsf1cnibU7Kn"),
  resolveOfficial(ChainId.IOTEX, "sablier-airdrops-iotex", "G39uCzr1FDY7pBFe8DwShAxhMeC6dbZetutVg6wjtks3"),
  resolveCustom(ChainId.LIGHTLINK, "sablier-airdrops-lightlink"),
  resolveOfficial(ChainId.LINEA, "sablier-airdrops-linea", "6koYFSd8FQizdQWLTdRpL1yTmAbpMgN1vZN5W6ajZiTN"),
  resolveOfficial(ChainId.MODE, "sablier-airdrops-mode", "HZMkVX5c2qf7BqbidwpcQMsHGWTDdEKwVjnwenzo9s6m"),
  resolveOfficial(ChainId.OP_MAINNET, "sablier-airdrops-optimism", "CHJtCNDzPqngpa1YJoaVrjuufZL6k6VkEkG9ZFUMQzF7"),
  resolveOfficial(ChainId.POLYGON, "sablier-airdrops-polygon", "FRbBKiDyM5YpFAqHLXRfQWwQdMGzFL82hqoPXPpXzAHE"),
  resolveOfficial(ChainId.SCROLL, "sablier-airdrops-scroll", "Ev4xS8VxuoUcpgqz5A2BkTgQxQeskm4Fg41XzVJ2DX9"),
  resolveCustom(ChainId.ULTRA, "sablier-airdrops-ultra"),
  resolveCustom(ChainId.XDC, "sablier-airdrops-xdc"),
  resolveOfficial(ChainId.ZK_SYNC_ERA, "sablier-airdrops-zksync", "64iDUwNVWKukw67nqTXif5taEfLug4Qf1c2suAv5hrqN"),
  // ────────────────────────────────────────────────────────────────────────────────
  // Testnets
  // ────────────────────────────────────────────────────────────────────────────────
  resolveOfficial(
    ChainId.ARBITRUM_SEPOLIA,
    "sablier-airdrops-arbitrum-sepolia",
    "3S7v3VkDq8XMBd8EFVhKur2Vk44xScaW8a4BRjoPuYWk",
  ),
  resolveOfficial(
    ChainId.BASE_SEPOLIA,
    "sablier-airdrops-base-sepolia",
    "4R2hm27YJ7CVEJ97BbBJz2r4KTKYc8sTqqzrD8UzEfJt",
  ),
  resolveOfficial(ChainId.ETHEREUM_SEPOLIA, "sablier-airdrops-sepolia", "8PLGDyXEsPgRTAnozL7MAjmTUFY4TBzs8i4F9Pq3wwSh"),
  resolveOfficial(
    ChainId.OP_SEPOLIA,
    "sablier-airdrops-optimism-sepolia",
    "3kp1eR2T1XpvvLkSZ7Wtt45DbDaiykTes478RZ7zwTz",
  ),
];

export default subgraphs;
