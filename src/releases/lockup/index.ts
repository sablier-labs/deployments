import type { Sablier } from "@src/types";
import { release as releaseV1_0 } from "./v1.0";
import { release as releaseV1_1 } from "./v1.1";
import { release as releaseV1_2 } from "./v1.2";
import { release as releaseV2_0 } from "./v2.0";

const lockup: Sablier.Release[] = [releaseV1_0, releaseV1_1, releaseV1_2, releaseV2_0];

export default lockup;
