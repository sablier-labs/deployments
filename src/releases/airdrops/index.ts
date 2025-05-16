import type { Sablier } from "@src/types";
import { release as releaseV1_1 } from "./v1.1";
import { release as releaseV1_2 } from "./v1.2";
import { release as releaseV1_3 } from "./v1.3";

const airdrops: Sablier.Release[] = [releaseV1_1, releaseV1_2, releaseV1_3];

export default airdrops;
