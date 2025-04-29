import { sortDeployments } from "@src/helpers";
import { getStandardRelease } from "@src/releases/helpers";
import type { Sablier } from "@src/types";
import { mainnets } from "./deployments";
import { manifest } from "./manifest";

const sortedMainnets = sortDeployments(mainnets);
export const deployments: Sablier.Deployment[] = [...sortedMainnets];

export const release = getStandardRelease({
  deployments,
  isLatest: false,
  manifest,
  protocol: "legacy",
  version: "v1.0",
});
