import chains from "./chains";
import { BaseURL, THEGRAPH_ORG_ID } from "./constants";
import { envio, subgraphs } from "./indexers";
import type { Sablier } from "./types";

export function getChainName(chainId: number): string {
  return chains[chainId].name;
}

export function getDeployment(
  protocol: Sablier.Protocol,
  chainId: number,
  contracts: Sablier.Contract[],
): Sablier.Deployment {
  let envioEndpoint: string | undefined;
  if (!(chainId in envio.unsupportedChains)) {
    envioEndpoint = envio.endpoints[protocol];
  }

  let thegraph: Sablier.TheGraph | undefined;
  const subgraph = subgraphs[protocol][chainId];
  if (subgraph) {
    thegraph = {
      explorer: `${BaseURL.TheGraph.EXPLORER}/${subgraph.id}`,
      studio: `${BaseURL.TheGraph.STUDIO}/${THEGRAPH_ORG_ID}/${subgraph.name}/version/latest`,
      subgraph: {
        id: subgraph.id,
        url: (apiKey: string) => `${BaseURL.TheGraph.GATEWAY}/${apiKey}/subgraphs/id/${subgraph.id}`,
      },
    };
  }
  return {
    [chainId]: {
      contracts,
      indexers: {
        envio: envioEndpoint,
        thegraph,
      },
    },
  };
}
