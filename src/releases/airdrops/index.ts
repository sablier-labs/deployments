import type { Sablier } from "@src/types";
import { getStandardRelease } from "../helpers";
import * as v1_3 from "./v1.3";

const releaseV1_3 = getStandardRelease({
  aliases: v1_3.aliases,
  deployments: v1_3.deployments,
  isLatest: true,
  manifest: v1_3.manifest,
  protocol: "airdrops",
  version: "v1.3",
});

export const airdrops: Sablier.Release[] = [releaseV1_3];

export const airdropsByVersion: Record<Sablier.VersionAirdrops, Sablier.Release> = {
  "v1.3": releaseV1_3,
};
