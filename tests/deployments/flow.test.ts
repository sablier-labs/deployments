import contractNames from "@src/contract-names";
import { createModuleTestSuite } from "../utils";

/** Supported versions for testing */
const SUPPORTED_VERSIONS = ["v1.0.0", "v1.1.0"] as const;

for (const version of SUPPORTED_VERSIONS) {
  createModuleTestSuite({
    protocol: "flow",
    version,
    contracts: {
      flow: contractNames.flow.SABLIER_FLOW,
      flowNFTDescriptor: contractNames.flow.FLOW_NFT_DESCRIPTOR,
    },
  });
}
