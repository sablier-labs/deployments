import { getChain } from "@src/chains";
import { getContractExplorerURL, getNestedValues } from "@src/helpers";
import type { Sablier } from "@src/types";
import _ from "lodash";

/** @internal */
export function resolveDeployment(
  protocol: Sablier.Protocol,
  version: Sablier.Version,
  chainId: number,
  aliasMap: Sablier.AliasMap,
  contractMap: Sablier.ContractMap,
): Sablier.Deployment {
  const chain = getChain(chainId);
  const contracts: Sablier.Contract[] = [];

  for (const [contractName, addressOrTuple] of _.entries(contractMap)) {
    // A contract can be declared either as a static address or as a tuple of [address, blockNumber]
    const [address, blockNumber] = Array.isArray(addressOrTuple) ? addressOrTuple : [addressOrTuple, 0];
    const contract = {
      address,
      alias: aliasMap[contractName],
      block: blockNumber,
      explorerURL: getContractExplorerURL(chain.explorerURL, address),
      name: contractName,
      protocol,
      version,
    };
    contracts.push(contract);
  }

  return {
    chainId,
    contracts,
  };
}

/** @internal */
export function resolveDeploymentLockupV1(
  protocol: Sablier.Protocol,
  version: Sablier.Version,
  chainId: number,
  aliasMap: Sablier.AliasMap,
  contractMap: {
    core: Sablier.ContractMap;
    periphery: Sablier.ContractMap;
  },
): Sablier.Deployment.LockupV1 {
  // Function to convert the contract map to deployment contracts
  function mapContracts(
    contracts: Sablier.ContractMap,
    chain: Sablier.Chain,
    aliasMap: Sablier.AliasMap,
  ): Sablier.Contract[] {
    return _.entries(contracts).map(([name, addressOrTuple]) => {
      const [address, blockNumber] = Array.isArray(addressOrTuple) ? addressOrTuple : [addressOrTuple, 0];
      return {
        address,
        alias: aliasMap[name],
        block: blockNumber,
        explorerURL: getContractExplorerURL(chain.explorerURL, address),
        name,
        protocol,
        version,
      };
    });
  }

  const mergedContracts = { ...contractMap.core, ...contractMap.periphery };
  const chain = getChain(chainId);
  const deployment = resolveDeployment(
    protocol,
    version,
    chainId,
    aliasMap,
    mergedContracts,
  ) as Sablier.Deployment.LockupV1;
  deployment.core = mapContracts(contractMap.core, chain, aliasMap);
  deployment.periphery = mapContracts(contractMap.periphery, chain, aliasMap);
  return deployment;
}

/** @internal */
export function resolveLockupV1(
  params: Omit<Sablier.Release.LockupV1, "kind" | "contractNames">,
): Sablier.Release.LockupV1 {
  return {
    ...params,
    contractNames: getNestedValues(params.manifest),
    kind: "lockupV1",
  };
}

/** @internal */
export function resolveStandard(
  params: Omit<Sablier.Release.Standard, "kind" | "contractNames">,
): Sablier.Release.Standard {
  return {
    ...params,
    contractNames: getNestedValues(params.manifest),
    kind: "standard",
  };
}
