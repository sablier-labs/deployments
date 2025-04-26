import { map } from "./manifest";

const aliases = {
  [map.core.SABLIER_V2_LOCKUP_DYNAMIC]: "LD3",
  [map.core.SABLIER_V2_LOCKUP_LINEAR]: "LL3",
  [map.core.SABLIER_V2_LOCKUP_TRANCHED]: "LT3",
  [map.periphery.SABLIER_V2_MERKLE_LOCKUP_FACTORY]: "MSF3", // MSF = Merkle Streamer Factory
};

export default aliases;
