import { sortDeployments } from "@src/helpers";
import { resolveReleaseStandard } from "@src/releases/resolvers";
import type { Sablier } from "@src/types";
import aliases from "./aliases";
import { mainnets, testnets } from "./deployments";
import { manifest } from "./manifest";

const sortedMainnets = sortDeployments(mainnets);
const sortedTestnets = sortDeployments(testnets);
export const deployments: Sablier.Deployment[] = [...sortedMainnets, ...sortedTestnets];

export const release = resolveReleaseStandard({
  aliases: aliases,
  deployments: deployments,
  isLatest: true,
  manifest: manifest,
  protocol: "airdrops",
  version: "v1.3",
});
