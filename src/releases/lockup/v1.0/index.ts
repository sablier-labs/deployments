import { sortDeployments } from "@src/helpers";
import { releaseLockupV1Release } from "@src/releases/resolvers";
import type { Sablier } from "@src/types";
import aliases from "./aliases";
import { mainnets, testnets } from "./deployments";
import manifest from "./manifest";

const sortedMainnets = sortDeployments(mainnets);
const sortedTestnets = sortDeployments(testnets);
export const deployments: Sablier.DeploymentLockupV1[] = [...sortedMainnets, ...sortedTestnets];

export const release = releaseLockupV1Release({
  aliases,
  deployments,
  isLatest: false,
  manifest,
  protocol: "lockup",
  version: "v1.0",
});
