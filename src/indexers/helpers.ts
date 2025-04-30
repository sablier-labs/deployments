import type { Sablier } from "@src/types";
import config, { type CustomChainId, type EnvioProtocol } from "./config";
import { THEGRAPH_ORG_ID } from "./constants";

/** @internal */
export function resolveCustomSubgraph(
  protocol: Sablier.Protocol,
  chainId: CustomChainId,
  name: string,
): Sablier.IndexerSubgraph {
  const baseURL = config.subgraph.baseURLs[chainId];
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

/** @internal */
export function resolveEnvio(protocol: EnvioProtocol, chainId: number): Sablier.IndexerEnvio {
  const endpoint = config.envio.endpoints[protocol];
  return {
    chainId,
    envio: endpoint,
    protocol,
  };
}

/** @internal */
export function resolveOfficialSubgraph(
  protocol: Sablier.Protocol,
  chainId: number,
  name: string,
  id: string,
): Sablier.IndexerSubgraph {
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
