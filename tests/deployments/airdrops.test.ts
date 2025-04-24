import contractNames from "@src/contract-names";
import { createModuleTestSuite } from "../utils";

/** Supported versions for testing */
const SUPPORTED_VERSIONS = ["v1.3.0"] as const;

for (const version of SUPPORTED_VERSIONS) {
  createModuleTestSuite({
    protocol: "airdrops",
    version,
    contracts: {
      merkleFactory: contractNames.airdrops.SABLIER_MERKLE_FACTORY,
    },
  });
}
