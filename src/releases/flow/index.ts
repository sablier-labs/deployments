import type { Sablier } from "@src/types";
import * as v1_0_0 from "./v1.0.0";
import * as v1_1_0 from "./v1.1.0";

const releaseV1_0_0: Sablier.ReleaseStandard = {
  manifest: v1_0_0.manifest,
  deployments: v1_0_0.deployments,
  protocol: "flow",
  version: "v1.0.0",
};

const releaseV1_1_0: Sablier.ReleaseStandard = {
  manifest: v1_1_0.manifest,
  deployments: v1_1_0.deployments,
  protocol: "flow",
  version: "v1.1.0",
};

export const flow: Sablier.Release[] = [releaseV1_0_0, releaseV1_1_0];

export const flowByVersion: Record<Sablier.VersionFlow, Sablier.Release> = {
  "v1.0.0": releaseV1_0_0,
  "v1.1.0": releaseV1_1_0,
};
