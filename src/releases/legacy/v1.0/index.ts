import { sortDeployments } from "@src/helpers";
import { resolveStandardRelease } from "@src/releases/resolvers";
import type { Sablier } from "@src/types";
import { mainnets } from "./deployments";
import manifest from "./manifest";

const sortedMainnets = sortDeployments(mainnets);
export const deployments: Sablier.Deployment[] = [...sortedMainnets];

export const release = resolveStandardRelease({
  deployments,
  isLatest: false,
  manifest,
  protocol: "legacy",
  version: "v1.0",
});
