import type { Sablier } from "@src/types";
import * as v1_0 from "./v1.0";
import * as v1_1 from "./v1.1";

const releaseV1_0: Sablier.ReleaseStandard = {
  aliases: v1_0.aliases,
  deployments: v1_0.deployments,
  isLatest: false,
  manifest: v1_0.manifest,
  protocol: "flow",
  version: "v1.0",
};

const releaseV1_1: Sablier.ReleaseStandard = {
  aliases: v1_1.aliases,
  deployments: v1_1.deployments,
  isLatest: false,
  manifest: v1_1.manifest,
  protocol: "flow",
  version: "v1.1",
};

export const flow: Sablier.Release[] = [releaseV1_0, releaseV1_1];

export const flowByVersion: Record<Sablier.VersionFlow, Sablier.Release> = {
  "v1.0": releaseV1_0,
  "v1.1": releaseV1_1,
};
