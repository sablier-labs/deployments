import type { Sablier } from "@src/types";
import lockupV1_2 from "../../lockup/v1.2/manifest";

const manifest: Sablier.Manifest.Standard = {
  SABLIER_V2_MERKLE_LOCKUP_FACTORY: lockupV1_2.periphery.SABLIER_V2_MERKLE_LOCKUP_FACTORY,
};

export default manifest;
