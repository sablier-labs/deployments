import { allById } from "./chains";
import { BaseURL, THEGRAPH_ORG_ID } from "./constants";
import { envio, subgraphs } from "./indexers";
import type { Sablier } from "./types";

export function getChain(chainId: number | string): Sablier.Chain {
  return allById[Number(chainId)];
}

export function getChainName(chainId: number | string): string {
  return allById[Number(chainId)].name;
}

/**
 * Get the explorer URL for a contract. Compatible with Etherscan, Blockscout, etc.
 * @param explorerURL - The base explorer URL, e.g. https://etherscan.io
 * @param contract - The contract object
 * @returns The explorer URL for the contract, e.g. https://etherscan.io/address/0x123...
 */
export function getContractExplorerURL(explorerURL: string, contract: Sablier.Contract) {
  return `${explorerURL}/address/${contract.address}`;
}

export function getChainDeployment(
  protocol: Sablier.Protocol,
  chainId: number,
  contracts: Sablier.Contract[],
): Sablier.ChainDeployment {
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

export function sortAlphabetically(chains: Sablier.Chain[]) {
  return chains.sort((a, b) => a.name.localeCompare(b.name));
}
