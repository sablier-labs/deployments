import { isValidAirdropsVersion, isValidFlowVersion, isValidLockupVersion } from "@src/helpers";
import type { Sablier } from "@src/types";
import { airdrops, airdropsByVersion } from "./airdrops";
import { flow, flowByVersion } from "./flow";
import { lockup, lockupByVersion } from "./lockup";

export { airdropsByVersion, flowByVersion, lockupByVersion };
export const releases = [...airdrops, ...flow, ...lockup];
export const releasesByProtocol = {
  airdrops,
  flow,
  lockup,
};

export function getRelease(protocol: Sablier.Protocol, version: Sablier.Version): Sablier.Release | undefined {
  const versionMap: Record<Sablier.Protocol, (v: Sablier.Version) => boolean> = {
    airdrops: isValidAirdropsVersion,
    flow: isValidFlowVersion,
    lockup: isValidLockupVersion,
  };

  const isValidVersion = versionMap[protocol];
  if (!isValidVersion(version)) {
    return undefined;
  }

  const releaseMap: Record<Sablier.Protocol, Record<string, Sablier.Release>> = {
    airdrops: airdropsByVersion,
    flow: flowByVersion,
    lockup: lockupByVersion,
  };

  return releaseMap[protocol][version];
}
