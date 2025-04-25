import type { Sablier } from "@src/types";
import * as v1_2 from "./v1.2";
import * as v2_0 from "./v2.0";

const releaseV1_2: Sablier.ReleaseLockupV1 = {
  manifest: v1_2.manifest,
  deployments: v1_2.deployments,
  protocol: "lockup",
  version: "v1.2",
};

const releaseV2_0: Sablier.ReleaseStandard = {
  manifest: v2_0.manifest,
  deployments: v2_0.deployments,
  protocol: "lockup",
  version: "v2.0",
};

export const lockup: Sablier.Release[] = [releaseV1_2, releaseV2_0];

export const lockupByVersion: Record<Sablier.VersionLockup, Sablier.Release> = {
  "v1.2": releaseV1_2,
  "v2.0": releaseV2_0,
};
