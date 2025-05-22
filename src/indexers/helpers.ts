import type { Sablier } from "@src/types";
import config, { type EnvioProtocol, type TheGraphCustomChainId } from "./config";
import { THEGRAPH_ORG_ID } from "./constants";

/** @internal */
export function resolveCustomSubgraph(
  protocol: Sablier.Protocol,
  chainId: TheGraphCustomChainId,
  name: string,
): Sablier.Indexer.TheGraph {
  const baseURL = config.graph.custom[chainId];
  return {
    chainId,
    graph: {
      explorerURL: `${baseURL}/{${name}}/graphql`,
      kind: "custom",
      subgraphURL: `${baseURL}/${name}`,
    },
    protocol,
  };
}

/** @internal */
export function resolveEnvio(protocol: EnvioProtocol, chainId: number): Sablier.Indexer.Envio {
  return {
    chainId,
    envio: config.envio.endpoints[protocol],
    protocol,
  };
}

/** @internal */
export function resolveOfficialSubgraph(
  protocol: Sablier.Protocol,
  chainId: number,
  name: string,
  id: string,
): Sablier.Indexer.TheGraph {
  return {
    chainId,
    graph: {
      explorerURL: `https://thegraph.com/explorer/subgraphs/${id}`,
      kind: "official",
      studioURL: `https://api.studio.thegraph.com/query/${THEGRAPH_ORG_ID}/${name}/version/latest`,
      subgraph: {
        id,
        url: (apiKey: string) => `https://gateway.thegraph.com/api/${apiKey}/subgraphs/id/${id}`,
      },
    },
    protocol,
  };
}
