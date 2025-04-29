import { sortDeployments } from "@src/helpers";
import { getLockupV1Release } from "@src/releases/helpers";
import type { Sablier } from "@src/types";
import aliases from "./aliases";
import { mainnets, testnets } from "./deployments";
import { manifest } from "./manifest";

const sortedMainnets = sortDeployments(mainnets);
const sortedTestnets = sortDeployments(testnets);
export const deployments: Sablier.DeploymentLockupV1[] = [...sortedMainnets, ...sortedTestnets];

export const release = getLockupV1Release({
  aliases,
  deployments,
  isLatest: false,
  manifest,
  protocol: "lockup",
  version: "v1.0",
});
