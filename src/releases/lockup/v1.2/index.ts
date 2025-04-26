import { sortDeployments } from "@src/helpers";
import type { Sablier } from "@src/types";
import { mainnets, testnets } from "./deployments";

const sortedMainnets = sortDeployments(mainnets);
const sortedTestnets = sortDeployments(testnets);

export const deployments: Sablier.DeploymentLockupV1[] = [...sortedMainnets, ...sortedTestnets];
export { manifest } from "./manifest";
export { default as aliases } from "./aliases";
