import type { Sablier } from "@src/types";
import lockupV1_1 from "../../lockup/v1.1/manifest";

const manifest: Sablier.Manifest.Standard = {
  SABLIER_V2_MERKLE_STREAMER_FACTORY: lockupV1_1.periphery.SABLIER_V2_MERKLE_STREAMER_FACTORY,
};

export default manifest;
