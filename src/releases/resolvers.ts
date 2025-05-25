import chainsQueries from "@src/chains/queries";
import { getContractExplorerURL, getNestedValues } from "@src/helpers";
import type { Sablier } from "@src/types";
import _ from "lodash";

type DeploymentBaseParams = {
  protocol: Sablier.Protocol;
  version: Sablier.Version;
  chainId: number;
  aliasMap: Sablier.AliasMap;
};

type DeploymentLockupV1Params = DeploymentBaseParams & {
  contractMap: {
    core: Sablier.ContractMap;
    periphery: Sablier.ContractMap;
  };
};

type DeploymentStandardParams = DeploymentBaseParams & {
  contractMap: Sablier.ContractMap;
};

type ReleaseParams<T> = Omit<T, "kind" | "contractNames">;

const resolvers = {
  /* -------------------------------------------------------------------------- */
  /*                                 DEPLOYMENT                                 */
  /* -------------------------------------------------------------------------- */
  deployment: {
    lockupV1(params: DeploymentLockupV1Params): Sablier.Deployment.LockupV1 {
      const { protocol, version, chainId, aliasMap, contractMap } = params;
      const chain = chainsQueries.getOrThrow(chainId);

      // Function to convert the contract map to deployment contracts
      const mapContracts = (contracts: Sablier.ContractMap): Sablier.Contract[] => {
        return _.entries(contracts).map(([name, addressOrTuple]) => {
          const [address, blockNumber] = Array.isArray(addressOrTuple) ? addressOrTuple : [addressOrTuple, 0];
          const explorerURL = getContractExplorerURL(chain.blockExplorers.default.url, address);
          return {
            address,
            alias: aliasMap[name],
            block: blockNumber,
            explorerURL,
            name,
            protocol,
            version,
          };
        });
      };

      const mergedContracts = { ...contractMap.core, ...contractMap.periphery };
      const deployment = resolvers.deployment.standard({
        aliasMap,
        chainId,
        contractMap: mergedContracts,
        protocol,
        version,
      }) as Sablier.Deployment.LockupV1;
      deployment.core = mapContracts(contractMap.core);
      deployment.periphery = mapContracts(contractMap.periphery);
      return deployment;
    },
    standard(params: DeploymentStandardParams): Sablier.Deployment {
      const { protocol, version, chainId, aliasMap, contractMap } = params;
      const chain = chainsQueries.getOrThrow(chainId);

      const contracts: Sablier.Contract[] = [];

      for (const [contractName, addressOrTuple] of _.entries(contractMap)) {
        // A contract can be declared either as a static address or as a tuple of [address, blockNumber]
        const [address, blockNumber] = Array.isArray(addressOrTuple) ? addressOrTuple : [addressOrTuple, 0];
        const contract = {
          address,
          alias: aliasMap[contractName],
          block: blockNumber,
          explorerURL: getContractExplorerURL(chain.blockExplorers.default.url, address),
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
    },
  },

  /* -------------------------------------------------------------------------- */
  /*                                   RELEASE                                  */
  /* -------------------------------------------------------------------------- */
  release: {
    lockupV1(params: ReleaseParams<Sablier.Release.LockupV1>): Sablier.Release.LockupV1 {
      return {
        ...params,
        contractNames: getNestedValues(params.manifest),
        kind: "lockupV1",
      };
    },

    standard(params: ReleaseParams<Sablier.Release.Standard>): Sablier.Release.Standard {
      return {
        ...params,
        contractNames: getNestedValues(params.manifest),
        kind: "standard",
      };
    },
  },
};

export default resolvers;
