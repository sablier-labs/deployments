import { isValidAirdropsVersion, isValidFlowVersion, isValidLegacyVersion, isValidLockupVersion } from "@src/helpers";
import type { Sablier } from "@src/types";
import _ from "lodash";
import { airdrops, airdropsByVersion } from "./airdrops";
import { flow, flowByVersion } from "./flow";
import { legacy, legacyByVersion } from "./legacy";
import { lockup, lockupByVersion } from "./lockup";

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

export function getAllContractsFor(release: Sablier.Release): Sablier.Contract[] {
  return release.deployments.flatMap((deployment) => deployment.contracts);
}

export function getLatestRelease(protocol: Sablier.Protocol): Sablier.Release | undefined {
  return _.find(releasesByProtocol[protocol], { isLatest: true });
}

export function getRelease(protocol: Sablier.Protocol, version: Sablier.Version): Sablier.Release | undefined {
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
