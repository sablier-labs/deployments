import { queryCatalog } from "@src/contracts/catalog";
import type { Sablier } from "@src/types";
import _ from "lodash";
import { releases as allReleases, releasesByProtocol, releasesByVersion } from "./releases";

const contracts = {
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
      return queryCatalog(release.protocol, chainId, contractAddress);
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

const deployments = {
  get: (opts: { chainId: number; release: Sablier.Release }): Sablier.Deployment | undefined => {
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
  getFirst: (opts: { protocol: Sablier.Protocol; chainId?: number }): Sablier.Release | undefined => {
    const { protocol, chainId } = opts;
    const list = releasesByProtocol[protocol];

    if (chainId) {
      return _.find(list, (r) => _.some(r.deployments, { chainId }));
    }

    return list[0];
  },

  /**
   * Get the latest release for a protocol.
   * - {protocol}
   */
  getLatest: (opts: { protocol: Sablier.Protocol }): Sablier.Release => {
    const list = releasesByProtocol[opts.protocol];
    const latest = list[list.length - 1];
    if (!latest.isLatest) {
      throw new Error(`Latest release not found for Sablier ${opts.protocol}. Please report on GitHub.`);
    }
    return latest;
  },
};

const queries = {
  contracts,
  deployments,
  releases,
};

export default queries;
