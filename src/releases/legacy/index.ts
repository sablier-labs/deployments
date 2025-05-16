import type { Sablier } from "@src/types";
import { release as releaseV1_0 } from "./v1.0";
import { release as releaseV1_1 } from "./v1.1";

const legacy: Sablier.Release[] = [releaseV1_0, releaseV1_1];

export default legacy;
