import { releasesByVersion } from "@src/releases";
import { createTestSuite } from "./utils/generators";

createTestSuite(releasesByVersion.flow["v1.0"]);
createTestSuite(releasesByVersion.flow["v1.1"]);
