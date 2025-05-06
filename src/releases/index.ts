import { isValidAirdropsVersion, isValidFlowVersion, isValidLegacyVersion, isValidLockupVersion } from "@src/helpers";
import type { Sablier } from "@src/types";
import _ from "lodash";
import { airdrops, airdropsByVersion } from "./airdrops";
import { flow, flowByVersion } from "./flow";
import { legacy, legacyByVersion } from "./legacy";
import { lockup, lockupByVersion } from "./lockup";

export { airdrops, flow, legacy, lockup };
export { airdropsByVersion, flowByVersion, legacyByVersion, lockupByVersion };
export const releases = [...airdrops, ...flow, ...legacy, ...lockup];
export const releasesByProtocol = {
  airdrops,
  flow,
  legacy,
  lockup,
};

/*//////////////////////////////////////////////////////////////////////////
                                  HELPERS
//////////////////////////////////////////////////////////////////////////*/

export function getAllContracts(): Sablier.Contract[] {
  return _.flatMap(releases, (release) => release.deployments.flatMap((deployment) => deployment.contracts));
}

export function getAllContractsForRelease(release: Sablier.Release): Sablier.Contract[] {
  return release.deployments.flatMap((deployment) => deployment.contracts);
}

export function getAllContractsForProtocol(protocol: Sablier.Protocol): Sablier.Contract[] {
  return _.flatMap(releasesByProtocol[protocol], (release) =>
    release.deployments.flatMap((deployment) => deployment.contracts),
  );
}

export function getAllContractsForProtocolAndChain(
  protocol: Sablier.Protocol,
  chainId: number,
): Sablier.Contract[] | undefined {
  const release = releasesByProtocol[protocol].find((release) =>
    release.deployments.find((deployment) => deployment.chainId === chainId),
  );
  if (!release) {
    return undefined;
  }
  return release.deployments.flatMap((deployment) => deployment.contracts);
}

export function getDeploymentForReleaseAndChain(
  release: Sablier.Release,
  chainId: number,
): Sablier.Deployment | undefined {
  return release.deployments.find((deployment) => deployment.chainId === chainId);
}

export function getFirstReleaseForProtocol(protocol: Sablier.Protocol): Sablier.Release {
  return releasesByProtocol[protocol][0];
}

export function getFirstReleaseForProtocolAndChain(protocol: Sablier.Protocol, chainId: number): Sablier.Release {
  const release = releasesByProtocol[protocol].find((release) =>
    release.deployments.find((deployment) => deployment.chainId === chainId),
  );
  if (!release) {
    throw new Error(`No release found for protocol ${protocol} on chain ID ${chainId}`);
  }
  return release;
}

export function getLatestReleaseForProtocol(protocol: Sablier.Protocol): Sablier.Release {
  const release = releasesByProtocol[protocol][releasesByProtocol[protocol].length - 1];
  if (!release.isLatest) {
    throw new Error(`No latest release found for protocol ${protocol}`);
  }
  return release;
}

export function getReleaseForProtocolAndVersion(
  protocol: Sablier.Protocol,
  version: Sablier.Version,
): Sablier.Release | undefined {
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
}
