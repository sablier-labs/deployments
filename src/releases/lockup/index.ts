import type { Sablier } from "@src/types";
import * as v1_0 from "./v1.0";
import * as v1_1 from "./v1.1";
import * as v1_2 from "./v1.2";
import * as v2_0 from "./v2.0";

const releaseV1_0: Sablier.ReleaseLockupV1 = {
  aliases: v1_0.aliases,
  deployments: v1_0.deployments,
  isLatest: false,
  manifest: v1_0.manifest,
  protocol: "lockup",
  version: "v1.0",
};

const releaseV1_1: Sablier.ReleaseLockupV1 = {
  aliases: v1_1.aliases,
  deployments: v1_1.deployments,
  isLatest: false,
  manifest: v1_1.manifest,
  protocol: "lockup",
  version: "v1.1",
};

const releaseV1_2: Sablier.ReleaseLockupV1 = {
  aliases: v1_2.aliases,
  deployments: v1_2.deployments,
  isLatest: false,
  manifest: v1_2.manifest,
  protocol: "lockup",
  version: "v1.2",
};

const releaseV2_0: Sablier.ReleaseStandard = {
  aliases: v2_0.aliases,
  deployments: v2_0.deployments,
  isLatest: true,
  manifest: v2_0.manifest,
  protocol: "lockup",
  version: "v2.0",
};

export const lockup: Sablier.Release[] = [releaseV1_0, releaseV1_1, releaseV1_2, releaseV2_0];

export const lockupByVersion: Record<Sablier.VersionLockup, Sablier.Release> = {
  "v1.0": releaseV1_0,
  "v1.1": releaseV1_1,
  "v1.2": releaseV1_2,
  "v2.0": releaseV2_0,
};
