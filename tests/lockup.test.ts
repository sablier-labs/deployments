import { lockupByVersion } from "@src/releases/lockup";
import { createTestSuite } from "./utils/generators";

// Note: it's important to run the tests in this order because the contracts in some releases have been
// deployed in a previous release.
createTestSuite(lockupByVersion["v1.0"]);
createTestSuite(lockupByVersion["v1.1"]);
createTestSuite(lockupByVersion["v1.2"]);
createTestSuite(lockupByVersion["v2.0"]);
