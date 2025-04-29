import { getNestedValues } from "@src/helpers";

/** @internal */
export const names = {
  core: {
    SABLIER_V2_LOCKUP_DYNAMIC: "SablierV2LockupDynamic",
    SABLIER_V2_LOCKUP_LINEAR: "SablierV2LockupLinear",
    SABLIER_V2_LOCKUP_TRANCHED: "SablierV2LockupTranched",
    SABLIER_V2_NFT_DESCRIPTOR: "SablierV2NFTDescriptor",
  },
  periphery: {
    SABLIER_V2_BATCH_LOCKUP: "SablierV2BatchLockup",
    SABLIER_V2_MERKLE_LOCKUP_FACTORY: "SablierV2MerkleLockupFactory",
  },
};

export const manifest = {
  core: getNestedValues(names.core),
  periphery: getNestedValues(names.periphery),
};
