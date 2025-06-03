import { releases } from "@src/releases";
import { createTestSuite } from "./utils/generators";

// Note: it's important to run the tests in this order because the contracts in some releases have been
// deployed in a previous release.
createTestSuite(releases.lockup["v1.0"]);
createTestSuite(releases.lockup["v1.1"]);
createTestSuite(releases.lockup["v1.2"]);
createTestSuite(releases.lockup["v2.0"]);
