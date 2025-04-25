import type { Sablier } from "@src/types";
import mainnets from "./mainnets";
import testnets from "./testnets";

export const deployments: Sablier.Deployment[] = [...mainnets, ...testnets];
export { default as contractManifest } from "./manifest";
