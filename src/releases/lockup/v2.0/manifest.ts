import { getNestedValues } from "@src/helpers";

/** @internal */
export const names = {
  HELPERS: "Helpers",
  LOCKUP_NFT_DESCRIPTOR: "LockupNFTDescriptor",
  SABLIER_BATCH_LOCKUP: "SablierBatchLockup",
  SABLIER_LOCKUP: "SablierLockup",
  VESTING_MATH: "VestingMath",
};

export const manifest = getNestedValues(names);
