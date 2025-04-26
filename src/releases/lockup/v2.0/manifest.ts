import { getNestedValues } from "@src/helpers";

export const map = {
  HELPERS: "Helpers",
  LOCKUP_NFT_DESCRIPTOR: "LockupNFTDescriptor",
  SABLIER_BATCH_LOCKUP: "SablierBatchLockup",
  SABLIER_LOCKUP: "SablierLockup",
  VESTING_MATH: "VestingMath",
};

export const manifest = getNestedValues(map);
