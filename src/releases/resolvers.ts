import { getChain } from "@src/chains";
import { getContractExplorerURL } from "@src/helpers";
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
  for (const [contractName, addressOrTuple] of _.entries(contractMap)) {
    // A contract can be declared either as a static address or as a tuple of [address, blockNumber]
    const [address, blockNumber] = Array.isArray(addressOrTuple) ? addressOrTuple : [addressOrTuple, 0];
    const alias = aliases[contractName];
    const explorerURL = getContractExplorerURL(chain.explorerURL, address);
    contracts.push({ address, alias, block: blockNumber, explorerURL, name: contractName });
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
  const mapContractsToDeployment = (
    contracts: Sablier.ContractMap,
    aliases: Sablier.AliasMap,
    chain: Sablier.Chain,
  ): Sablier.Contract[] => {
    return _.entries(contracts).map(([name, addressOrTuple]) => {
      const [address, blockNumber] = Array.isArray(addressOrTuple) ? addressOrTuple : [addressOrTuple, 0];
      return {
        alias: aliases[name],
        address,
        explorerURL: getContractExplorerURL(chain.explorerURL, address),
        block: blockNumber,
        name,
      };
    });
  };

  const mergedContracts = { ...contractMap.core, ...contractMap.periphery };
  const chain = getChain(chainId);
  const deployment = resolveDeployment(chainId, mergedContracts, aliases) as Sablier.DeploymentLockupV1;
  deployment.core = mapContractsToDeployment(contractMap.core, aliases, chain);
  deployment.periphery = mapContractsToDeployment(contractMap.periphery, aliases, chain);
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
