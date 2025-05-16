import { sortDeployments } from "@src/helpers";
import { resolveStandardRelease } from "@src/releases/resolvers";
import type { Sablier } from "@src/types";
import aliases from "./aliases";
import { mainnets, testnets } from "./deployments";
import manifest from "./manifest";

const sortedMainnets = sortDeployments(mainnets);
const sortedTestnets = sortDeployments(testnets);
export const deployments: Sablier.Deployment[] = [...sortedMainnets, ...sortedTestnets];

export const release = resolveStandardRelease({
  aliases: aliases,
  deployments: deployments,
  isLatest: false,
  manifest: manifest,
  protocol: "flow",
  version: "v1.0",
});
