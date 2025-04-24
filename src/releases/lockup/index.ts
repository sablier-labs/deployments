import type { Sablier } from "@src/types";
import * as v1_2_0 from "./v1.2.0";
import * as v2_0_0 from "./v2.0.0";

const releaseV1_2_0: Sablier.ReleaseLockupV1 = {
  manifest: v1_2_0.manifest,
  deployments: v1_2_0.deployments,
  protocol: "lockup",
  version: "v1.2.0",
};

const releaseV2_0_0: Sablier.ReleaseStandard = {
  manifest: v2_0_0.manifest,
  deployments: v2_0_0.deployments,
  protocol: "lockup",
  version: "v2.0.0",
};

export const lockup: Sablier.Release[] = [releaseV1_2_0, releaseV2_0_0];

export const lockupByVersion: Record<Sablier.Version, Sablier.Release> = {
  [releaseV1_2_0.version]: releaseV1_2_0,
  [releaseV2_0_0.version]: releaseV2_0_0,
};
