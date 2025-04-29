/**
 * @see https://docs.sablier.com/api/overview
 */
import { ChainId } from "@src/chains/ids";
import type { Sablier } from "@src/types";

const THEGRAPH_ORG_ID = 57079; // Sablier organization ID on The Graph

type OfficialSubgraphMap = Record<number, { id: string; name: string }>;

const officialSubgraphs: Record<Sablier.Protocol, OfficialSubgraphMap> = {
  airdrops: {
    // ────────────────────────────────────────────────────────────────────────────────
    // Mainnets
    // ────────────────────────────────────────────────────────────────────────────────
    [ChainId.ETHEREUM]: { id: "DFD73EcSue44R7mpHvXeyvcgaT8tR1iKakZFjBsiFpjs", name: "sablier-airdrops-ethereum" },
    [ChainId.ABSTRACT]: { id: "DRrf6mYEhRt9QieKvTjDHnSWcBm3GW96hpedMKVxLABx", name: "sablier-airdrops-abstract" },
    [ChainId.ARBITRUM_ONE]: { id: "HkHDg6NVVVeobhpcU4pTPMktyC25zd6xAQBGpYrWDgRr", name: "sablier-airdrops-arbitrum" },
    [ChainId.AVALANCHE]: { id: "CpbN5Ps25UzqfdoqYdrjoSK4Him6nwDvdLK6a2sGS1PA", name: "sablier-airdrops-avalanche" },
    [ChainId.BASE]: { id: "4SxPXkQNifgBYqje2C4yP5gz69erZwtD7GuLWgXHSLGe", name: "sablier-airdrops-base" },
    [ChainId.BERACHAIN]: { id: "CnYsdmzuY3Mebwywvqv1WrXw9UZuPMTrxoGgR2UdThJE", name: "sablier-airdrops-berachain" },
    [ChainId.BLAST]: { id: "657bogqYaDSSeqsoJcJ1kRqGnc3jC15UmcVLzsYxyxKK", name: "sablier-airdrops-blast" },
    [ChainId.BSC]: { id: "FXQT42kQPvpMJgsF5Bs6CqpxVvPP1LBqEhWThCCLMeGL", name: "sablier-airdrops-bsc" },
    [ChainId.CHILIZ]: { id: "6LK1aqrhzZCp6c88MEBDAR1VDLpZQiXpBKkceJ5Lu4LU", name: "sablier-airdrops-chiliz" },
    [ChainId.GNOSIS]: { id: "kQEY5PYbjx4SMKyMUwqJHRLDzKH1aUqGsf1cnibU7Kn", name: "sablier-airdrops-gnosis" },
    [ChainId.IOTEX]: { id: "G39uCzr1FDY7pBFe8DwShAxhMeC6dbZetutVg6wjtks3", name: "sablier-airdrops-iotex" },
    [ChainId.LINEA]: { id: "6koYFSd8FQizdQWLTdRpL1yTmAbpMgN1vZN5W6ajZiTN", name: "sablier-airdrops-linea" },
    [ChainId.MODE]: { id: "HZMkVX5c2qf7BqbidwpcQMsHGWTDdEKwVjnwenzo9s6m", name: "sablier-airdrops-mode" },
    [ChainId.OP_MAINNET]: { id: "CHJtCNDzPqngpa1YJoaVrjuufZL6k6VkEkG9ZFUMQzF7", name: "sablier-airdrops-optimism" },
    [ChainId.POLYGON]: { id: "FRbBKiDyM5YpFAqHLXRfQWwQdMGzFL82hqoPXPpXzAHE", name: "sablier-airdrops-polygon" },
    [ChainId.SCROLL]: { id: "Ev4xS8VxuoUcpgqz5A2BkTgQxQeskm4Fg41XzVJ2DX9", name: "sablier-airdrops-scroll" },
    [ChainId.ZK_SYNC_ERA]: { id: "64iDUwNVWKukw67nqTXif5taEfLug4Qf1c2suAv5hrqN", name: "sablier-airdrops-zksync" },
    // ────────────────────────────────────────────────────────────────────────────────
    // Testnets
    // ────────────────────────────────────────────────────────────────────────────────
    [ChainId.ARBITRUM_SEPOLIA]: {
      id: "3S7v3VkDq8XMBd8EFVhKur2Vk44xScaW8a4BRjoPuYWk",
      name: "sablier-airdrops-arbitrum-sepolia",
    },
    [ChainId.BASE_SEPOLIA]: {
      id: "4R2hm27YJ7CVEJ97BbBJz2r4KTKYc8sTqqzrD8UzEfJt",
      name: "sablier-airdrops-base-sepolia",
    },
    [ChainId.ETHEREUM_SEPOLIA]: {
      id: "8PLGDyXEsPgRTAnozL7MAjmTUFY4TBzs8i4F9Pq3wwSh",
      name: "sablier-airdrops-sepolia",
    },
    [ChainId.OP_SEPOLIA]: {
      id: "3kp1eR2T1XpvvLkSZ7Wtt45DbDaiykTes478RZ7zwTz",
      name: "sablier-airdrops-optimism-sepolia",
    },
  },
  flow: {
    // ────────────────────────────────────────────────────────────────────────────────
    // Mainnets
    // ────────────────────────────────────────────────────────────────────────────────
    [ChainId.ETHEREUM]: { id: "ECxBJhKceBGaVvK6vqmK3VQAncKwPeAQutEb8TeiUiod", name: "sablier-flow-ethereum" },
    [ChainId.ABSTRACT]: { id: "Gq3e1gihMoSynURwGXQnPoKGVZzdsyomdrMH934vQHuG", name: "sablier-flow-abstract" },
    [ChainId.ARBITRUM_ONE]: { id: "C3kBBUVtW2rxqGpAgSgEuSaT49izkH6Q8UibRt7XFTyW", name: "sablier-flow-arbitrum" },
    [ChainId.AVALANCHE]: { id: "6PAizjTALVqLLB7Ycq6XnpTeck8Z8QUpDFnVznMnisUh", name: "sablier-flow-avalanche" },
    [ChainId.BASE]: { id: "4XSxXh8ZgkzaA35nrbQG9Ry3FYz3ZFD8QBdWwVg5pF9W", name: "sablier-flow-base" },
    [ChainId.BERACHAIN]: { id: "J87eaBLfTe7kKWgUGqe5TxntNCzA4pyWmqJowMddehuh", name: "sablier-flow-berachain" },
    [ChainId.BLAST]: { id: "8joiC9LpUbSV6eGRr3RWXDArM8p9Q65FKiFekAakkyia", name: "sablier-flow-blast" },
    [ChainId.BSC]: { id: "2vU8KF4yWh3vvFjtg7MrRXMnYF3hPX2T3cvVBdaiXhNb", name: "sablier-flow-bsc" },
    [ChainId.CHILIZ]: { id: "7QX7tJsANNFpxFLLjqzmXRzfY1wPGp3Lty5xGbhgADa6", name: "sablier-flow-chiliz" },
    [ChainId.GNOSIS]: { id: "4KiJ53cTNKdFWPBPmDNQ55tYj8hn1WQg8R4UcTY2STLL", name: "sablier-flow-gnosis" },
    [ChainId.IOTEX]: { id: "6No3QmRiC8HXLEerDFoBpF47jUPRjhntmv28HHEMxcA2", name: "sablier-flow-iotex" },
    [ChainId.LINEA]: { id: "DV9XgcCCPKzUn6pgetg4yPetpW2fNoRKBUQC43aNeLG6", name: "sablier-flow-linea" },
    [ChainId.MODE]: { id: "9TwfoUZoxYUyxzDgspCPyxW6uMUKetWQDaTGsZjY1qJZ", name: "sablier-flow-mode" },
    [ChainId.OP_MAINNET]: { id: "AygPgsehNGSB4K7DYYtvBPhTpEiU4dCu3nt95bh9FhRf", name: "sablier-flow-optimism" },
    [ChainId.POLYGON]: { id: "ykp38sLarwz3cpmjSSPqo7UuTjYtkZ1KiL4PM2qwmT8", name: "sablier-flow-polygon" },
    [ChainId.SCROLL]: { id: "HFpTrPzJyrHKWZ9ebb4VFRQSxRwpepyfz5wd138daFkF", name: "sablier-flow-scroll" },
    [ChainId.ZK_SYNC_ERA]: { id: "9DRgWhDAMovpkej3eT8izum6jxEKHE62ciArffsTAScx", name: "sablier-flow-zksync" },
    // ────────────────────────────────────────────────────────────────────────────────
    // Testnets
    // ────────────────────────────────────────────────────────────────────────────────
    [ChainId.ARBITRUM_SEPOLIA]: {
      id: "2uWnxpYiDMkEMu1urxqt925mLfuax9XbvfcBoD97AU6d",
      name: "sablier-flow-arbitrum-sepolia",
    },
    [ChainId.BASE_SEPOLIA]: { id: "AsnKT1waQMvuQxZAqfFuYwtRtAfN8uekDu75jPttfyLh", name: "sablier-flow-base-sepolia" },
    [ChainId.ETHEREUM_SEPOLIA]: { id: "EU9AWmJjrjMRkjxcdHfuWPZvPTNAL3hiXfNGN5MwUpvm", name: "sablier-flow-sepolia" },
    [ChainId.OP_SEPOLIA]: {
      id: "EFKqBB6TeH6etGuHCffnbMbETEgDZ6U29Lgpc4gpYvdB",
      name: "sablier-flow-optimism-sepolia",
    },
  },
  legacy: {
    // ────────────────────────────────────────────────────────────────────────────────
    // Mainnets
    // ────────────────────────────────────────────────────────────────────────────────
    [ChainId.ETHEREUM]: { id: "DkSXWkgJD5qVqfsrfzkLC5WELVX3Dbj3ByWcYjDJieCh", name: "sablier" },
    [ChainId.ARBITRUM_ONE]: { id: "94SP9QVcxmGV9e2fxuTxUGcZfcv4tjpPCGyyPVyMfLP", name: "sablier-arbitrum" },
    [ChainId.AVALANCHE]: { id: "DK2gHCprwVaytwzwb5fUrkFS9xy7wh66NX6AFcDzMyF9", name: "sablier-avalanche" },
    [ChainId.BSC]: { id: "3Gyy7of99oBRqHcCMGJXpHw2xxxZgXxVmFPFR1vL6YhT", name: "sablier-bsc" },
    [ChainId.OP_MAINNET]: { id: "BEnQbvBdXnohC1DpM9rSb47C1FbowK39HfPNCEHjgrBt", name: "sablier-optimism" },
    [ChainId.POLYGON]: { id: "6UMNQfMeh3pV5Qmn2NDX2UKNeUk9kh4oZhzzzn5e8rSz", name: "sablier-polygon" },
  },
  lockup: {
    // ────────────────────────────────────────────────────────────────────────────────
    // Mainnets
    // ────────────────────────────────────────────────────────────────────────────────
    [ChainId.ETHEREUM]: { id: "AvDAMYYHGaEwn9F9585uqq6MM5CfvRtYcb7KjK7LKPCt", name: "sablier-lockup-ethereum" },
    [ChainId.ABSTRACT]: { id: "2QjTdDFY233faXksUruMERMiDoQDdtGG5hBLC27aT1Pw", name: "sablier-lockup-abstract" },
    [ChainId.ARBITRUM_ONE]: { id: "yvDXXHSyv6rGPSzfpbBcbQmMFrECac3Q2zADkYsMxam", name: "sablier-lockup-arbitrum" },
    [ChainId.AVALANCHE]: { id: "FTDmonvFEm1VGkzECcnDY2CPHcW5dSmHRurSjEEfTkCX", name: "sablier-lockup-avalanche" },
    [ChainId.BASE]: { id: "778GfecD9tsyB4xNnz4wfuAyfHU6rqGr79VCPZKu3t2F", name: "sablier-lockup-base" },
    [ChainId.BERACHAIN]: { id: "C2r13APcUemQtVdPFm7p7T3aJkU2rH2EvdZzrQ53zi14", name: "sablier-lockup-berachain" },
    [ChainId.BLAST]: { id: "8MBBc6ET4izgJRrybgWzPjokhZKSjk43BNY1q3xcb8Es", name: "sablier-lockup-blast" },
    [ChainId.BSC]: { id: "A8Vc9hi7j45u7P8Uw5dg4uqYJgPo4x1rB4oZtTVaiccK", name: "sablier-lockup-bsc" },
    [ChainId.CHILIZ]: { id: "4KsXUFvsKFHH7Q8k3BPgEv2NhCJJGwG78gCPAUpncYb", name: "sablier-lockup-chiliz" },
    [ChainId.GNOSIS]: { id: "DtKniy1RvB19q1r2g1WLN4reMNKDacEnuAjh284rW2iK", name: "sablier-lockup-gnosis" },
    [ChainId.IOTEX]: { id: "2P3sxwmcWBjMUv1C79Jh4h6VopBaBZeTocYWDUQqwWFV", name: "sablier-lockup-iotex" },
    [ChainId.LINEA]: { id: "GvpecytqVzLzuwuQB3enozXoaZRFoVx8Kr7qrfMiE9bs", name: "sablier-lockup-linea" },
    [ChainId.MODE]: { id: "oSBvUM371as1pJh8HQ72NMRMb3foV3wuheULfkNf5vy", name: "sablier-lockup-mode" },
    [ChainId.OP_MAINNET]: { id: "NZHzd2JNFKhHP5EWUiDxa5TaxGCFbSD4g6YnYr8JGi6", name: "sablier-lockup-optimism" },
    [ChainId.POLYGON]: { id: "8fgeQMEQ8sskVeWE5nvtsVL2VpezDrAkx2d1VeiHiheu", name: "sablier-lockup-polygon" },
    [ChainId.SCROLL]: { id: "GycpYx8c9eRqxvEAfqnpNd1ZfXeuLzjRhnG7vvYaqEE1", name: "sablier-lockup-scroll" },
    [ChainId.ZK_SYNC_ERA]: { id: "5yDtFSxyRuqyjvGJyyuQhMEW3Uah7Ddy2KFSKVhy9VMa", name: "sablier-lockup-zksync" },
    // ────────────────────────────────────────────────────────────────────────────────
    // Testnets
    // ────────────────────────────────────────────────────────────────────────────────
    [ChainId.ARBITRUM_SEPOLIA]: {
      id: "ApEFvaPGARHedGmFp6TRQu7DoDHQKwt1LPWi1ka6DFHT",
      name: "sablier-lockup-arbitrum-sepolia",
    },
    [ChainId.BASE_SEPOLIA]: {
      id: "DdiYENuyh5ztSybRJnBnCZuUgESkFasjGFHZUbURpKHz",
      name: "sablier-lockup-base-sepolia",
    },
    [ChainId.ETHEREUM_SEPOLIA]: {
      id: "5yDtFSxyRuqyjvGJyyuQhMEW3Uah7Ddy2KFSKVhy9VMa",
      name: "sablier-lockup-sepolia",
    },
    [ChainId.OP_SEPOLIA]: {
      id: "2LFYyhMVMUMYA2q7XMMnBvCs6v6awWxBeMuMk3tMtmiT",
      name: "sablier-lockup-optimism-sepolia",
    },
  },
};

type CustomSubgraphMap = Record<number, { explorer?: string; url: string }>;

const baseURLs = {
  LIGHTLINK: "https://graph.phoenix.lightlink.io/query/subgraphs/name/lightlink",
  ULTRA: "https://graph.evm.ultra.io/subgraphs/name/sablier",
  XDC: "https://graphql.xinfin.network/subgraphs/name/xdc",
};

const customSubgraphs: Record<Sablier.Protocol, CustomSubgraphMap> = {
  airdrops: {
    [ChainId.LIGHTLINK]: {
      explorer: `${baseURLs.LIGHTLINK}/sablier-airdrops-lightlink/graphql`,
      url: `${baseURLs.LIGHTLINK}/sablier-airdrops-lightlink`,
    },
    [ChainId.ULTRA]: {
      url: `${baseURLs.ULTRA}/sablier-airdrops-ultra`,
    },
    [ChainId.XDC]: {
      explorer: `${baseURLs.XDC}/sablier-airdrops-xdc/graphql`,
      url: `${baseURLs.XDC}/sablier-airdrops-xdc`,
    },
  },
  flow: {
    [ChainId.LIGHTLINK]: {
      explorer: `${baseURLs.LIGHTLINK}/sablier-flow-lightlink/graphql`,
      url: `${baseURLs.LIGHTLINK}/sablier-flow-lightlink`,
    },
    [ChainId.ULTRA]: {
      url: `${baseURLs.ULTRA}/sablier-flow-ultra`,
    },
    [ChainId.XDC]: {
      explorer: `${baseURLs.XDC}/sablier-flow-xdc/graphql`,
      url: `${baseURLs.XDC}/sablier-flow-xdc`,
    },
  },
  legacy: {
    [ChainId.RONIN]: {
      url: "https://subgraph.satsuma-prod.com/d8d041c49d56/sablierlabs/sablier-ronin/api",
    },
  },
  lockup: {
    [ChainId.LIGHTLINK]: {
      explorer: `${baseURLs.LIGHTLINK}/sablier-lockup-lightlink/graphql`,
      url: `${baseURLs.LIGHTLINK}/sablier-lockup-lightlink`,
    },
    [ChainId.ULTRA]: {
      url: `${baseURLs.ULTRA}/sablier-lockup-ultra`,
    },
    [ChainId.XDC]: {
      explorer: `${baseURLs.XDC}/sablier-lockup-xdc/graphql`,
      url: `${baseURLs.XDC}/sablier-lockup-xdc`,
    },
  },
};

/** @internal */
export function getTheGraph(protocol: Sablier.Protocol, chainId: number): Sablier.TheGraph | undefined {
  const officialSubgraph = officialSubgraphs[protocol][chainId];
  if (officialSubgraph) {
    return {
      explorer: `https://thegraph.com/explorer/subgraphs/${officialSubgraph.id}`,
      studio: `https://api.studio.thegraph.com/query/${THEGRAPH_ORG_ID}/${officialSubgraph.name}/version/latest`,
      subgraph: {
        id: officialSubgraph.id,
        url: (apiKey: string) => `https://gateway.thegraph.com/api/${apiKey}/subgraphs/id/${officialSubgraph.id}`,
      },
    };
  }

  const customSubgraph = customSubgraphs[protocol][chainId];
  if (customSubgraph) {
    return {
      customURL: customSubgraph.url,
      explorer: customSubgraph.explorer,
    };
  }

  return undefined;
}
