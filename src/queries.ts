import type { Sablier } from "@src/types";
import _ from "lodash";
import { releases as allReleases, releasesByProtocol, releasesByVersion } from "./releases";

const contracts = {
  /**
   * Get a single contract by name.
   * - {release, chainId}
   * - {deployment}
   */
  get: (opts: {
    contractName: string;
    release?: Sablier.Release;
    chainId?: number;
    deployment?: Sablier.Deployment;
  }): Sablier.Contract | undefined => {
    const { contractName, deployment, release, chainId } = opts;

    if (deployment) {
      return _.find(deployment.contracts, { name: contractName });
    }

    if (release) {
      if (!chainId) {
        return undefined;
      }
      const dep = _.find(release.deployments, (d) => d.chainId === chainId);
      return dep && _.find(dep.contracts, { name: contractName });
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
    protocol?: Sablier.Protocol;
    release?: Sablier.Release;
    chainId?: number;
  }): Sablier.Contract[] | undefined => {
    const { protocol, chainId, release } = opts || {};

    if (protocol && release) {
      throw new Error("Cannot specify both protocol and release query options");
    }

    // by protocol
    if (protocol) {
      const releases = releasesByProtocol[protocol];
      let deps = _.flatMap(releases, (r) => r.deployments);
      if (chainId) {
        deps = deps.filter((d) => d.chainId === chainId);
        if (deps.length === 0) return undefined;
      }
      return _.flatMap(deps, (d) => d.contracts);
    }

    // by explicit release
    if (release) {
      let deps = release.deployments;
      if (chainId) {
        deps = deps.filter((d) => d.chainId === chainId);
        if (deps.length === 0) return undefined;
      }
      return _.flatMap(deps, (d) => d.contracts);
    }

    // no filters → all
    return _.flatMap(allReleases, (r) => r.deployments.flatMap((d) => d.contracts));
  },
};

const deployments = {
  get: (opts: { release: Sablier.Release; chainId: number }): Sablier.Deployment | undefined => {
    const { release, chainId } = opts || {};
    return _.find(release.deployments, (d) => d.chainId === chainId);
  },
  /**
   * Get many deployments.
   * - no options           ⇒ all across all releases
   * - {release}            ⇒ that release's deployments
   */
  getAll: (): Sablier.Deployment[] | undefined => {
    return allReleases.flatMap((r) => r.deployments);
  },
};

const releases = {
  get: (opts: { protocol: Sablier.Protocol; version: Sablier.Version }): Sablier.Release | undefined => {
    const { protocol, version } = opts;
    return _.get(releasesByVersion, [protocol, version]);
  },
  /**
   * Get the first release:
   * - {protocol}          ⇒ first overall
   * - {protocol,chainId}  ⇒ first on that chain
   */
  getFirst: (opts: { protocol: Sablier.Protocol; chainId?: number }) => {
    const { protocol, chainId } = opts;
    const list = releasesByProtocol[protocol];

    if (chainId) {
      return list.find((r) => r.deployments.some((d) => d.chainId === chainId));
    }

    return list[0];
  },

  /**
   * Get the latest release for a protocol.
   * - {protocol}
   */
  getLatest: (opts: { protocol: Sablier.Protocol }) => {
    const list = releasesByProtocol[opts.protocol];
    const release = list[list.length - 1];
    if (!release.isLatest) {
      console.warn(`No latest release for ${opts.protocol}`);
      return undefined;
    }
    return release;
  },
};

const queries = {
  contracts,
  deployments,
  releases,
};

export default queries;
