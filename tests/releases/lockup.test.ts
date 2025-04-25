import { releases } from "@src";
import { createTestSuite } from "../test-generators";

for (const release of releases.lockup) {
  createTestSuite(release);
}
