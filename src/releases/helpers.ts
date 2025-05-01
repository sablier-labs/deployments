import { getChain } from "@src/chains";
import { getContractExplorerURL } from "@src/helpers";
import {} from "@src/indexers";
import type { Sablier } from "@src/types";
import _ from "lodash";

/** @internal */
export function resolveDeployment(
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

  return {
    chainId,
    contracts,
  };
}

/** @internal */
export function resolveDeploymentLockupV1(
  chainId: number,
  contractMap: {
    core: Sablier.ContractMap;
    periphery: Sablier.ContractMap;
  },
  aliases: Sablier.AliasMap,
): Sablier.DeploymentLockupV1 {
  const mergedContracts = { ...contractMap.core, ...contractMap.periphery };
  const deployment = resolveDeployment(chainId, mergedContracts, aliases) as Sablier.DeploymentLockupV1;
  deployment.core = _.entries(contractMap.core).map(([name, address]) => ({ name, address }));
  deployment.periphery = _.entries(contractMap.periphery).map(([name, address]) => ({ name, address }));
  return deployment;
}

/** @internal */
export function resolveReleaseStandard(params: Omit<Sablier.Release.Standard, "kind">): Sablier.Release.Standard {
  return {
    ...params,
    kind: "standard",
  };
}

/** @internal */
export function resolveReleaseLockupV1(params: Omit<Sablier.Release.LockupV1, "kind">): Sablier.Release.LockupV1 {
  return {
    ...params,
    kind: "lockupV1",
  };
}
