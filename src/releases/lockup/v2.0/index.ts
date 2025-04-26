import type { Sablier } from "@src/types";
import { mainnets, testnets } from "./deployments";

export const deployments: Sablier.Deployment[] = [...mainnets, ...testnets];
export { default as manifest } from "./manifest";
export { default as aliases } from "./aliases";
