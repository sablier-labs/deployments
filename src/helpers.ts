import _ from "lodash";
import { allById } from "./chains";
import { BaseURL, THEGRAPH_ORG_ID } from "./constants";
import { envio, subgraphs } from "./indexers";
import type { Sablier } from "./types";
import versions from "./versions";

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
 * @param contractAddress - The contract object
 * @returns The explorer URL for the contract, e.g. https://etherscan.io/address/0x123...
 */
export function getContractExplorerURL(explorerURL: string, contractAddress: Sablier.Address) {
  return `${explorerURL}/address/${contractAddress}`;
}

export function getDeployment(
  protocol: Sablier.Protocol,
  chainId: number,
  contractMap: Sablier.ContractMap,
  aliases: Sablier.AliasMap,
): Sablier.Deployment {
  const chain = getChain(chainId);
  const contracts: Sablier.Contract[] = [];
  for (const [contractName, address] of _.entries(contractMap)) {
    const alias = aliases[contractName];
    const explorerURL = getContractExplorerURL(chain.explorerURL, address);
    contracts.push({ address, alias, explorerURL, name: contractName });
  }

  const envioEndpoint = getEnvioEndpoint(protocol, chainId);
  const thegraph = getTheGraph(protocol, chainId);

  return {
    chainId,
    contracts,
    indexers: {
      envio: envioEndpoint,
      thegraph,
    },
  };
}

export function getDeploymentLockupV1(
  chainId: number,
  contractMap: {
    core: Sablier.ContractMap;
    periphery: Sablier.ContractMap;
  },
  aliases: Sablier.AliasMap,
): Sablier.DeploymentLockupV1 {
  const mergedContracts = { ...contractMap.core, ...contractMap.periphery };
  const deployment = getDeployment("lockup", chainId, mergedContracts, aliases) as Sablier.DeploymentLockupV1;
  deployment.core = _.entries(contractMap.core).map(([name, address]) => ({ name, address }));
  deployment.periphery = _.entries(contractMap.periphery).map(([name, address]) => ({ name, address }));
  return deployment;
}

/**
 * Extract all string values from a nested object
 * @param obj The object to extract string values from
 * @returns Array of all string values from the object
 */
export const getNestedValues = <T extends Record<string, unknown>>(obj: T): string[] => {
  return _.flatMap(obj, (value) => {
    if (_.isObject(value) && !_.isArray(value)) {
      return getNestedValues(value as Record<string, unknown>);
    }
    return _.isString(value) ? value : [];
  });
};

/** Type guard to check if a manifest is a Lockup v1.x manifest. */
export function isLockupV1Manifest(manifest: Sablier.Manifest): manifest is Sablier.ManifestLockupV1 {
  return "core" in manifest && "periphery" in manifest;
}

/** Type guard to check if a release is a Lockup v1.x release. */
export function isLockupV1Release(release: Sablier.Release): release is Sablier.ReleaseLockupV1 {
  return release.protocol === "lockup" && release.version.startsWith("v1.");
}

export function isValidAirdropsVersion(version: Sablier.Version): boolean {
  return version === versions.airdrops.v1_3;
}

export function isValidFlowVersion(version: Sablier.Version): boolean {
  return version === versions.flow.v1_0 || version === versions.flow.v1_1;
}

export function isValidLockupVersion(version: Sablier.Version): boolean {
  return (
    version === versions.lockup.v1_0 ||
    version === versions.lockup.v1_1 ||
    version === versions.lockup.v1_2 ||
    version === versions.lockup.v2_0
  );
}

export function sortChains<T extends { name: string }>(chains: T[]): T[] {
  return chains.sort((a, b) => a.name.localeCompare(b.name));
}

export function sortDeployments<T extends { chainId: number }>(deployments: T[]): T[] {
  return deployments.sort((a, b) => {
    const aChain = getChain(a.chainId);
    const bChain = getChain(b.chainId);
    return aChain.name.localeCompare(bChain.name);
  });
}

/*//////////////////////////////////////////////////////////////////////////
                              PRIVATE FUNCTIONS
//////////////////////////////////////////////////////////////////////////*/

function getEnvioEndpoint(protocol: Sablier.Protocol, chainId: number): string | undefined {
  if (chainId in envio.unsupportedChains) {
    return undefined;
  }
  return envio.endpoints[protocol];
}

function getTheGraph(protocol: Sablier.Protocol, chainId: number): Sablier.TheGraph | undefined {
  const subgraph = subgraphs[protocol][chainId];
  if (!subgraph) {
    return undefined;
  }

  return {
    explorer: `${BaseURL.TheGraph.EXPLORER}/${subgraph.id}`,
    studio: `${BaseURL.TheGraph.STUDIO}/${THEGRAPH_ORG_ID}/${subgraph.name}/version/latest`,
    subgraph: {
      id: subgraph.id,
      url: (apiKey: string) => `${BaseURL.TheGraph.GATEWAY}/${apiKey}/subgraphs/id/${subgraph.id}`,
    },
  };
}
