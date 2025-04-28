import type { Sablier } from "./types";

const versions: Record<Sablier.Protocol, Record<string, string>> = {
  airdrops: {
    v1_3: "v1.3",
  },
  flow: {
    v1_0: "v1.0",
    v1_1: "v1.1",
  },
  lockup: {
    v1_0: "v1.0",
    v1_1: "v1.1",
    v1_2: "v1.2",
    v2_0: "v2.0",
  },
} as const;

export default versions;
