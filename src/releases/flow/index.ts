import type { Sablier } from "@src/types";
import { release as releaseV1_0 } from "./v1.0";
import { release as releaseV1_1 } from "./v1.1";

export const flow: Sablier.Release[] = [releaseV1_0, releaseV1_1];

export const flowByVersion: Record<Sablier.VersionFlow, Sablier.Release> = {
  "v1.0": releaseV1_0,
  "v1.1": releaseV1_1,
};
