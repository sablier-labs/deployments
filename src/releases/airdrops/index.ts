import type { Sablier } from "@src/types";
import * as v1_3 from "./v1.3";

const releaseV1_3: Sablier.ReleaseStandard = {
  aliases: v1_3.aliases,
  manifest: v1_3.manifest,
  deployments: v1_3.deployments,
  protocol: "airdrops",
  version: "v1.3",
};

export const airdrops: Sablier.Release[] = [releaseV1_3];

export const airdropsByVersion: Record<Sablier.VersionAirdrops, Sablier.Release> = {
  "v1.3": releaseV1_3,
};
