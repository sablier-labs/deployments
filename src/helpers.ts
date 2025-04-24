import _ from "lodash";
import { allById } from "./chains";
import { BaseURL, THEGRAPH_ORG_ID } from "./constants";
import { envio, subgraphs } from "./indexers";
import type { Sablier } from "./types";

export function getChain(chainId: number | string): Sablier.Chain {
  const chain = allById[Number(chainId)];
  if (!chain) {
    throw new Error(`Chain with ID ${chainId} not found`);
  }
  return chain;
}

export function getChainName(chainId: number | string): string {
  const chainName = allById[Number(chainId)].name;
  if (!chainName) {
    throw new Error(`Chain with ID ${chainId} not found`);
  }
  return chainName;
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

export function getDeployment(
  protocol: Sablier.Protocol,
  chainId: number,
  contracts: Record<string, Sablier.Address>,
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

  const contractsArray: Sablier.Contract[] = _.entries(contracts).map(([name, address]) => ({ name, address }));
  return {
    chainId,
    contracts: contractsArray,
    indexers: {
      envio: envioEndpoint,
      thegraph,
    },
  };
}

export function getDeploymentLockupV1(
  chainId: number,
  contracts: {
    core: Record<string, Sablier.Address>;
    periphery: Record<string, Sablier.Address>;
  },
): Sablier.DeploymentLockupV1 {
  const mergedContracts = { ...contracts.core, ...contracts.periphery };
  const deployment = getDeployment("lockup", chainId, mergedContracts) as Sablier.DeploymentLockupV1;
  deployment.core = _.entries(contracts.core).map(([name, address]) => ({ name, address }));
  deployment.periphery = _.entries(contracts.periphery).map(([name, address]) => ({ name, address }));
  return deployment;
}

export function sortChains(chains: Sablier.Chain[]): Sablier.Chain[] {
  return chains.sort((a, b) => a.name.localeCompare(b.name));
}

export function sortDeployments(deployments: Sablier.Deployment[]): Sablier.Deployment[] {
  return deployments.sort((a, b) => {
    const aChain = getChain(a.chainId);
    const bChain = getChain(b.chainId);
    return aChain.name.localeCompare(bChain.name);
  });
}
