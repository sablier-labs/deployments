import { getChain } from "@src/chains";
import { getContractExplorerURL } from "@src/helpers";
import { getEnvioEndpoint, getTheGraph } from "@src/indexers";
import type { Sablier } from "@src/types";
import _ from "lodash";

/** @internal */
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

/** @internal */
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

/** @internal */
export function getStandardRelease(params: Omit<Sablier.ReleaseStandard, "kind">): Sablier.ReleaseStandard {
  return {
    ...params,
    kind: "standard" as const,
  };
}

/** @internal */
export function getLockupV1Release(params: Omit<Sablier.ReleaseLockupV1, "kind">): Sablier.ReleaseLockupV1 {
  return {
    ...params,
    kind: "lockupV1" as const,
  };
}
