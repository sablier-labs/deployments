import { sortDeployments } from "@src/helpers";
import type { Sablier } from "@src/types";
import { mainnets, testnets } from "./deployments";

const sortedMainnets = sortDeployments(mainnets);
const sortedTestnets = sortDeployments(testnets);

export const deployments: Sablier.Deployment[] = [...sortedMainnets, ...sortedTestnets];
export { default as aliases } from "./aliases";
export { manifest } from "./manifest";
