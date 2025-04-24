import type { Sablier } from "../../../types";
import mainnetsV1_3_0 from "./mainnets";
import testnetsV1_3_0 from "./testnets";

const deploymentsV1_3_0: Record<number, Sablier.Deployment> = {
  ...mainnetsV1_3_0,
  ...testnetsV1_3_0,
};

export default deploymentsV1_3_0;
