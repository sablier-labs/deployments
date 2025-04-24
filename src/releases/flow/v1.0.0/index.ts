import type { Sablier } from "../../../types";
import mainnets from "./mainnets";
import testnets from "./testnets";

export const deployments: Sablier.Deployment[] = [...mainnets, ...testnets];
export { default as manifest } from "./manifest";
