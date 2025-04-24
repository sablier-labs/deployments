import type { Sablier } from "../../types";
import * as v2_0_0 from "./v2.0.0";

const releaseV2_0_0: Sablier.Release = {
  manifest: v2_0_0.manifest,
  deployments: v2_0_0.deployments,
  protocol: "lockup",
  version: "v2.0.0",
};

export const lockup: Sablier.Release[] = [releaseV2_0_0];

export const lockupByVersion: Record<Sablier.Version, Sablier.Release> = {
  [releaseV2_0_0.version]: releaseV2_0_0,
};
