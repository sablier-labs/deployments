import { releases } from "@src";
import { createModuleTestSuite } from "../utils";

for (const release of releases.flow) {
  createModuleTestSuite(release);
}
