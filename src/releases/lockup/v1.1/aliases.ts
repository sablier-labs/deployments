import { map } from "./manifest";

const aliases = {
  [map.core.SABLIER_V2_LOCKUP_DYNAMIC]: "LD2",
  [map.core.SABLIER_V2_LOCKUP_LINEAR]: "LL2",
  [map.periphery.SABLIER_V2_MERKLE_STREAMER_FACTORY]: "MSF2", // MSF = Merkle Streamer Factory
};

export default aliases;
