import type { Sablier } from "../../../types";
import mainnetsV1_0_0 from "./mainnets";
import testnetsV1_0_0 from "./testnets";

const deploymentsV1_0_0: Record<number, Sablier.Deployment> = {
  ...mainnetsV1_0_0,
  ...testnetsV1_0_0,
};

export default deploymentsV1_0_0;
