import type { Sablier } from "@src/types";
import { mainnets, testnets } from "./deployments";

export const deployments: Sablier.Deployment[] = [...mainnets, ...testnets];
export { manifest } from "./manifest";
export { default as aliases } from "./aliases";
