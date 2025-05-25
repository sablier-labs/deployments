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
    chainId?: number;
    contractAddress?: string;
    contractName?: string;
    deployment?: Sablier.Deployment;
    release?: Sablier.Release;
  }): Sablier.Contract | undefined => {
    const { contractAddress, contractName, deployment, release, chainId } = opts;

    if (contractAddress && contractName) {
      throw new Error("Cannot specify both contractAddress and contractNam as query options");
    }

    if (contractName) {
      if (deployment) {
        return _.find(deployment.contracts, { name: contractName });
      }

      if (release) {
        if (!chainId) {
          throw new Error("Cannot specify release without chainId");
        }
        const dep = _.find(release.deployments, { chainId });
        return dep && _.find(dep.contracts, { name: contractName });
      }
    }

    if (contractAddress) {
      if (!release) {
        throw new Error("Cannot specify contractAddress without release");
      }
      if (!chainId) {
        throw new Error("Cannot specify contractAddress without chainId");
      }
      return _.get(catalog, [release.protocol, chainId, contractAddress]);
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
