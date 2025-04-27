import { airdropsByVersion } from "@src/releases/airdrops";
import { createTestSuite } from "./utils/generators";

createTestSuite(airdropsByVersion["v1.3"]);
