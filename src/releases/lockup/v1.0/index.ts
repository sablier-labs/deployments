import type { Sablier } from "@src/types";
import mainnets from "./mainnets";
import testnets from "./testnets";

export const deployments: Sablier.DeploymentLockupV1[] = [...mainnets, ...testnets];
export { default as manifest } from "./manifest";
