import airdropsV1_1 from "@src/releases/airdrops/v1.1/manifest";
import airdropsV1_2 from "@src/releases/airdrops/v1.2/manifest";
import airdropsV1_3 from "@src/releases/airdrops/v1.3/manifest";
import flowV1_0 from "@src/releases/flow/v1.0/manifest";
import flowV1_1 from "@src/releases/flow/v1.1/manifest";
import legacyV1_0 from "@src/releases/legacy/v1.0/manifest";
import legacyV1_1 from "@src/releases/legacy/v1.1/manifest";
import lockupV1_0 from "@src/releases/lockup/v1.0/manifest";
import lockupV1_1 from "@src/releases/lockup/v1.1/manifest";
import lockupV1_2 from "@src/releases/lockup/v1.2/manifest";
import lockupV2_0 from "@src/releases/lockup/v2.0/manifest";
import type { Sablier } from "@src/types";
import _ from "lodash";

/**
 * At runtime: for v1.x, merge `core` + `periphery`; for v2.0, use the top-level record directly.
 */
function flattenNames(manifest: Sablier.Manifest): Record<string, string> {
  if ("core" in manifest && "periphery" in manifest) {
    const lockupManifest = manifest as Sablier.Manifest.LockupV1;
    return { ...lockupManifest.core, ...lockupManifest.periphery };
  }
  // v2.0 has no core/periphery nesting
  return { ...manifest } as Record<string, string>;
}

/**
 * Works at compile-time!
 */
type LeafKeys<T> = T extends { core: Record<string, unknown>; periphery: Record<string, unknown> }
  ? keyof T["core"] | keyof T["periphery"]
  : keyof T;

type A1_1 = LeafKeys<typeof airdropsV1_1>;
type A1_2 = LeafKeys<typeof airdropsV1_2>;
type A1_3 = LeafKeys<typeof airdropsV1_3>;

type F1_0 = LeafKeys<typeof flowV1_0>;
type F1_1 = LeafKeys<typeof flowV1_1>;

type LEGACY_1_0 = LeafKeys<typeof legacyV1_0>;
type LEGACY_1_1 = LeafKeys<typeof legacyV1_1>;

type L1_0 = LeafKeys<typeof lockupV1_0>;
type L1_1 = LeafKeys<typeof lockupV1_1>;
type L1_2 = LeafKeys<typeof lockupV1_2>;
type L2_0 = LeafKeys<typeof lockupV2_0>;

// Final exported type: only these known keys allowed
export type ContractNames = Record<
  A1_1 | A1_2 | A1_3 | F1_0 | F1_1 | LEGACY_1_0 | LEGACY_1_1 | L1_0 | L1_1 | L1_2 | L2_0,
  string
>;

// Runtime: flatten & merge across all releases
const manifests = [
  airdropsV1_1,
  airdropsV1_2,
  airdropsV1_3,
  flowV1_0,
  flowV1_1,
  legacyV1_0,
  legacyV1_1,
  lockupV1_0,
  lockupV1_1,
  lockupV1_2,
  lockupV2_0,
];
const flattened = manifests.map(flattenNames);

const names: ContractNames = _.merge({}, ...flattened) as ContractNames;

export default names;
