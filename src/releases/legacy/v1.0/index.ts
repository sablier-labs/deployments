import { sortDeployments } from "@src/helpers";
import type { Sablier } from "@src/types";
import { mainnets } from "./deployments";

const sortedMainnets = sortDeployments(mainnets);

export const deployments: Sablier.Deployment[] = [...sortedMainnets];
export { manifest } from "./manifest";
3;
