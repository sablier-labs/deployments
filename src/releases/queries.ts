import { isValidAirdropsVersion, isValidFlowVersion, isValidLegacyVersion, isValidLockupVersion } from "@src/helpers";
import type { Sablier } from "@src/types";
import _ from "lodash";
import {
  airdropsByVersion,
  releases as allReleases,
  flowByVersion,
  legacyByVersion,
  lockupByVersion,
  releasesByProtocol,
} from "./data";

/**
 * Contract-related queries
 */
export const contracts = {
  /**
   * Get all contracts across all releases
   */
  getAll: (): Sablier.Contract[] => {
    return _.flatMap(allReleases, (release) => release.deployments.flatMap((deployment) => deployment.contracts));
  },

  /**
   * Get all contracts for a specific protocol
   */
  getAllByProtocol: (protocol: Sablier.Protocol): Sablier.Contract[] => {
    return _.flatMap(releasesByProtocol[protocol], (release) =>
      release.deployments.flatMap((deployment) => deployment.contracts),
    );
  },

  /**
   * Get all contracts for a protocol and chain
   */
  getAllByProtocolAndChain: (protocol: Sablier.Protocol, chainId: number): Sablier.Contract[] | undefined => {
    const release = releasesByProtocol[protocol].find((release) =>
      release.deployments.find((deployment) => deployment.chainId === chainId),
    );
    if (!release) {
      return undefined;
    }
    return release.deployments.flatMap((deployment) => deployment.contracts);
  },

  /**
   * Get all contracts for a protocol excluding v1.0
   */
  getAllByProtocolExcludingV1: (protocol: Sablier.Protocol): Sablier.Contract[] => {
    return _.flatMap(
      releasesByProtocol[protocol].filter((release) => release.version !== "v1.0"),
      (release) => release.deployments.flatMap((deployment) => deployment.contracts),
    );
  },

  /**
   * Get all contracts for a specific release
   */
  getAllByRelease: (release: Sablier.Release): Sablier.Contract[] => {
    return release.deployments.flatMap((deployment) => deployment.contracts);
  },

  /**
   * Get a contract for a specific deployment and contract name
   */
  getByDeploymentAndName: (deployment: Sablier.Deployment, contractName: string): Sablier.Contract | undefined => {
    return _.find(deployment.contracts, { name: contractName });
  },

  /**
   * Get a contract for a specific release, chain, and contract name
   */
  getByReleaseAndChainAndName: (
    release: Sablier.Release,
    chainId: number,
    contractName: string,
  ): Sablier.Contract | undefined => {
    const deployment = deployments.getByReleaseAndChain(release, chainId);
    if (!deployment) {
      return undefined;
    }
    return _.find(deployment.contracts, { name: contractName });
  },
};

/**
 * Deployment-related queries
 */
export const deployments = {
  /**
   * Get all deployments across all releases
   */
  getAll: (): Sablier.Deployment[] => {
    return allReleases.flatMap((release) => release.deployments);
  },

  /**
   * Get all deployments for a protocol excluding v1.0
   */
  getByProtocolExcludingV1: (protocol: Sablier.Protocol): Sablier.Deployment[] => {
    return releasesByProtocol[protocol].flatMap((release) => {
      if (release.version === "v1.0") {
        return [];
      }
      return release.deployments;
    });
  },

  /**
   * Get a deployment for a specific release and chain
   */
  getByReleaseAndChain: (release: Sablier.Release, chainId: number): Sablier.Deployment | undefined => {
    return _.find(release.deployments, { chainId });
  },
};

/**
 * Release-related queries
 */
export const releases = {
  /**
   * Get a release for a protocol and version
   */
  getByProtocolAndVersion: (protocol: Sablier.Protocol, version: Sablier.Version): Sablier.Release | undefined => {
    const versionMap: Record<Sablier.Protocol, (v: Sablier.Version) => boolean> = {
      airdrops: isValidAirdropsVersion,
      flow: isValidFlowVersion,
      legacy: isValidLegacyVersion,
      lockup: isValidLockupVersion,
    };

    const isValidVersion = versionMap[protocol];
    if (!isValidVersion(version)) {
      return undefined;
    }

    const releaseMap: Record<Sablier.Protocol, Record<string, Sablier.Release>> = {
      airdrops: airdropsByVersion,
      flow: flowByVersion,
      legacy: legacyByVersion,
      lockup: lockupByVersion,
    };

    return releaseMap[protocol][version];
  },

  /**
   * Get the first release for a protocol
   */
  getFirstByProtocol: (protocol: Sablier.Protocol): Sablier.Release => {
    return releasesByProtocol[protocol][0];
  },

  /**
   * Get the first release for a protocol and chain
   */
  getFirstByProtocolAndChain: (protocol: Sablier.Protocol, chainId: number): Sablier.Release => {
    const release = releasesByProtocol[protocol].find((release) =>
      release.deployments.find((deployment) => deployment.chainId === chainId),
    );
    if (!release) {
      throw new Error(`No release found for protocol ${protocol} on chain ID ${chainId}`);
    }
    return release;
  },

  /**
   * Get the latest release for a protocol
   */
  getLatestByProtocol: (protocol: Sablier.Protocol): Sablier.Release => {
    const release = releasesByProtocol[protocol][releasesByProtocol[protocol].length - 1];
    if (!release.isLatest) {
      throw new Error(`No latest release found for protocol ${protocol}`);
    }
    return release;
  },
};
