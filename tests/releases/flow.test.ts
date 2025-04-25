import { releases } from "@src";
import { createTestSuite } from "../test-generators";

for (const release of releases.flow) {
  createTestSuite(release);
}
