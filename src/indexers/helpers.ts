import type { Sablier } from "@src/types";
import config from "./config";
import { THEGRAPH_ORG_ID } from "./constants";

export function getCustomSubgraph(
  protocol: Sablier.Protocol,
  chainId: number,
  name: string,
): Sablier.IndexerSubgraph | undefined {
  const baseURL = config.subgraph.baseURLs[chainId];
  if (!baseURL) {
    return undefined;
  }
  return {
    chainId,
    protocol,
    subgraph: {
      customURL: `${baseURL}/${name}`,
      explorer: `${baseURL}/{${name}}/graphql`,
      kind: "custom",
    },
  };
}

export function getEnvio(protocol: Sablier.Protocol, chainId: number): Sablier.IndexerEnvio | undefined {
  const endpoint = config.envio.endpoints[protocol];
  if (!endpoint) {
    return undefined;
  }
  return {
    chainId,
    envio: endpoint,
    protocol,
  };
}

export function getOfficialSubgraph(
  protocol: Sablier.Protocol,
  chainId: number,
  name: string,
  id: string,
): Sablier.IndexerSubgraph | undefined {
  return {
    chainId,
    protocol,
    subgraph: {
      explorer: `https://thegraph.com/explorer/subgraphs/${id}`,
      info: {
        id: id,
        url: (apiKey: string) => `https://gateway.thegraph.com/api/${apiKey}/subgraphs/id/${id}`,
      },
      kind: "official",
      studio: `https://api.studio.thegraph.com/query/${THEGRAPH_ORG_ID}/${name}/version/latest`,
    },
  };
}
