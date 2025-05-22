import { releasesByVersion } from "@src/releases";
import { createTestSuite } from "./utils/generators";

// Note: it's important to run the tests in this order because the contracts in some releases have been
// deployed in a previous release.
createTestSuite(releasesByVersion.lockup["v1.0"]);
createTestSuite(releasesByVersion.lockup["v1.1"]);
createTestSuite(releasesByVersion.lockup["v1.2"]);
createTestSuite(releasesByVersion.lockup["v2.0"]);
