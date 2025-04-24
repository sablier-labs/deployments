import type { Sablier } from "../../../types";
import mainnetsV1_1_0 from "./mainnets";
import testnetsV1_1_0 from "./testnets";

const deploymentsV1_1_0: Record<number, Sablier.Deployment> = {
  ...mainnetsV1_1_0,
  ...testnetsV1_1_0,
};

export default deploymentsV1_1_0;
