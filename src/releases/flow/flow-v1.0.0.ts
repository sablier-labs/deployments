import { chains } from "../../chains";
import type { SablierRelease } from "../../types";

export const flow: SablierRelease = {
  "v1.1.0": {
    chainId: chains.ethereum.id,
    contracts: [
      {
        address: "0x3DF2AAEdE81D2F6b261F79047517713B8E844E04",
        name: "SablierFlow",
      },
      {
        address: "0x24bE13897eE1F83367661B6bA616a72523fC55C9",
        name: "FlowNFTDescriptor",
      },
    ],
    indexers: {
      envio: "https://indexer.hyperindex.xyz/3b4ea6b/v1/graphql",
      thegraph: {
        explorer: "https://thegraph.com/explorer/subgraphs/ECxBJhKceBGaVvK6vqmK3VQAncKwPeAQutEb8TeiUiod",
        studio: "https://api.studio.thegraph.com/query/57079/sablier-flow/version/latest",
        subgraph: {
          id: "ECxBJhKceBGaVvK6vqmK3VQAncKwPeAQutEb8TeiUiod",
          url: (apiKey: string) => {
            return `https://gateway.thegraph.com/api/${apiKey}/subgraphs/id/ECxBJhKceBGaVvK6vqmK3VQAncKwPeAQutEb8TeiUiod`;
          },
        },
      },
    },
  },
};
