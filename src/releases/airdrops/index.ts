import type { Sablier } from "@src/types";
import { contractManifestV1_3_0, deploymentsV1_3_0 } from "./v1.3.0";

const releaseV1_3_0: Sablier.ReleaseStandard = {
  manifest: contractManifestV1_3_0,
  deployments: deploymentsV1_3_0,
  protocol: "airdrops",
  version: "v1.3.0",
};

export const airdrops: Sablier.Release[] = [releaseV1_3_0];

export const airdropsByVersion: Record<Sablier.Version, Sablier.Release> = {
  [releaseV1_3_0.version]: releaseV1_3_0,
};
