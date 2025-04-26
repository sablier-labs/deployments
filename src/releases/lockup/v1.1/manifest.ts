import { getNestedValues } from "@src/helpers";

export const map = {
  core: {
    SABLIER_V2_COMPTROLLER: "SablierV2Comptroller",
    SABLIER_V2_LOCKUP_DYNAMIC: "SablierV2LockupDynamic",
    SABLIER_V2_LOCKUP_LINEAR: "SablierV2LockupLinear",
    SABLIER_V2_NFT_DESCRIPTOR: "SablierV2NFTDescriptor",
  },
  periphery: {
    SABLIER_V2_BATCH: "SablierV2Batch",
    SABLIER_V2_MERKLE_STREAMER_FACTORY: "SablierV2MerkleStreamerFactory",
  },
};

export const manifest = {
  core: getNestedValues(map.core),
  periphery: getNestedValues(map.periphery),
};
