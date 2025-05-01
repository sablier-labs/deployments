import type { Sablier } from "@src/types";
import { release as releaseV1_3 } from "./v1.3";

export const airdrops: Sablier.Release[] = [releaseV1_3];

export const airdropsByVersion: Record<Sablier.Version.Airdrops, Sablier.Release> = {
  "v1.3": releaseV1_3,
};
