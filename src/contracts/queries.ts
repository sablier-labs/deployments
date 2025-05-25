import { releases as allReleases, releasesByProtocol } from "@src/releases";
import type { Sablier } from "@src/types";
import _ from "lodash";
import { catalog } from "./catalog";

const queries = {
  /**
   * Get a single contract by name or by address.
   * - {name, deployment}
   * - {name, release, chainId}
   * - {address}
   */
  get: (opts: {
    chainId: number;
    contractAddress?: string;
    contractName?: string;
    deployments?: Sablier.Deployment[];
    protocol?: Sablier.Protocol;
  }): Sablier.Contract | undefined => {
    const { chainId, deployments, contractAddress, contractName, protocol } = opts;

    if (contractAddress && contractName) {
      throw new Error("Cannot specify both contractAddress and contractName as query options");
    }

    if (contractName) {
      if (!deployments) {
        throw new Error("Cannot specify contractName without deployments");
      }
      const dep = _.find(deployments, { chainId });
      return dep && _.find(dep.contracts, { name: contractName });
    }

    if (contractAddress) {
      if (!protocol) {
        throw new Error("Cannot specify contractAddress without protocol");
      }
      return _.get(catalog, [protocol, chainId, contractAddress]);
    }

    return undefined;
  },
  /**
   * Get many contracts.
   * - no options           ⇒ all
   * - {protocol}           ⇒ all for that protocol
   * - {protocol, chainId}  ⇒ filtered by chain
   * - {release}            ⇒ all deployments of that release
   * - {release, chainId}   ⇒ that slice of deployments
   */
  getAll: (opts?: {
    chainId?: number;
    protocol?: Sablier.Protocol;
    release?: Sablier.Release;
  }): Sablier.Contract[] | undefined => {
    const { protocol, chainId, release } = opts || {};

    if (protocol && release) {
      throw new Error("Cannot specify both protocol and release as query options");
    }

    // by protocol
    if (protocol) {
      const releases = releasesByProtocol[protocol];
      let deps = _.flatMap(releases, (r) => r.deployments);
      if (chainId) {
        deps = _.filter(deps, { chainId });
        if (deps.length === 0) return undefined;
      }
      return _.flatMap(deps, (d) => d.contracts);
    }

    // by explicit release
    if (release) {
      let deps = release.deployments;
      if (chainId) {
        deps = _.filter(deps, { chainId });
        if (deps.length === 0) return undefined;
      }
      return _.flatMap(deps, (d) => d.contracts);
    }

    // no filters → all
    return _.flatMap(allReleases, (r) => r.deployments.flatMap((d) => d.contracts));
  },
};

export default queries;
