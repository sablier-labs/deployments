import type { Sablier } from "../../types";
import deploymentsV1_0_0 from "./v1.0.0";
import deploymentsV1_1_0 from "./v1.1.0";

export const flow: Record<Sablier.Version, Sablier.ChainDeployment> = {
  "v1.0.0": deploymentsV1_0_0,
  "v1.1.0": deploymentsV1_1_0,
};
