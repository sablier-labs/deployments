import contractNames from "@src/contract-names";
import { createModuleTestSuite } from "../utils";

/** Supported versions for testing */
const SUPPORTED_VERSIONS = ["v2.0.0"] as const;

for (const version of SUPPORTED_VERSIONS) {
  createModuleTestSuite({
    protocol: "lockup",
    version,
    contracts: {
      lockup: contractNames.lockup.SABLIER_LOCKUP,
      batchLockup: contractNames.lockup.SABLIER_BATCH_LOCKUP,
      nftDescriptor: contractNames.lockup.LOCKUP_NFT_DESCRIPTOR,
      helpers: contractNames.lockup.HELPERS,
      vestingMath: contractNames.lockup.VESTING_MATH,
    },
  });
}
