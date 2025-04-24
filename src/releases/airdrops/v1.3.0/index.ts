import type { Sablier } from "@src/types";
import mainnetsV1_3_0 from "./mainnets";
import testnetsV1_3_0 from "./testnets";

export const deploymentsV1_3_0: Sablier.Deployment[] = [...mainnetsV1_3_0, ...testnetsV1_3_0];
export { default as contractManifestV1_3_0 } from "./manifest";
