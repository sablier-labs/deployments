import type { Sablier } from "@src/types";
import _ from "lodash";
import airdrops from "./airdrops";
import flow from "./flow";
import legacy from "./legacy";
import lockup from "./lockup";

// All releases in a flat array
export const releases = [...airdrops, ...flow, ...legacy, ...lockup];

// Grouped by protocol
export const releasesByProtocol = {
  airdrops,
  flow,
  legacy,
  lockup,
};

// Group by version
function groupReleases<T extends Sablier.Version>(releases: Sablier.Release[]): Record<T, Sablier.Release> {
  return _.reduce(
    releases,
    (result: Record<T, Sablier.Release>, release: Sablier.Release) => {
      result[release.version as T] = release;
      return result;
    },
    {} as Record<T, Sablier.Release>,
  );
}

export const releasesByVersion = {
  airdrops: groupReleases<Sablier.Version.Airdrops>(airdrops),
  flow: groupReleases<Sablier.Version.Flow>(flow),
  legacy: groupReleases<Sablier.Version.Legacy>(legacy),
  lockup: groupReleases<Sablier.Version.Lockup>(lockup),
};

// Re-export individual collections
export { airdrops, flow, legacy, lockup };
