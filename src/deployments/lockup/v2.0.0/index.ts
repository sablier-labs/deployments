import type { Sablier } from "../../../types";
import mainnetsV2_0_0 from "./mainnets";
import testnetsV2_0_0 from "./testnets";

const deploymentsV2_0_0: Record<number, Sablier.Deployment> = {
  ...mainnetsV2_0_0,
  ...testnetsV2_0_0,
};

export default deploymentsV2_0_0;
