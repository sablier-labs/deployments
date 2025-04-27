import { flowByVersion } from "@src/releases/flow";
import { createTestSuite } from "./utils/generators";

createTestSuite(flowByVersion["v1.0"]);
createTestSuite(flowByVersion["v1.1"]);
