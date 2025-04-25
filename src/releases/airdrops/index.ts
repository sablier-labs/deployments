import type { Sablier } from "@src/types";
import * as v1_3_0 from "./v1.3.0";

const releaseV1_3_0: Sablier.ReleaseStandard = {
  manifest: v1_3_0.contractManifest,
  deployments: v1_3_0.deployments,
  protocol: "airdrops",
  version: "v1.3.0",
};

export const airdrops: Sablier.Release[] = [releaseV1_3_0];

export const airdropsByVersion: Record<Sablier.VersionAirdrops, Sablier.Release> = {
  "v1.3.0": releaseV1_3_0,
};
