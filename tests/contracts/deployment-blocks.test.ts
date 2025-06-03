import { names } from "@src/contracts";
import { Protocol } from "@src/enums";
import { sablier } from "@src/sablier";
import type { Sablier } from "@src/types";
import { describe, expect, it } from "vitest";

// These contracts are indexed by the Sablier Indexers, so they require a deployment block number.
// See https://github.com/sablier-labs/indexers
const INDEXED: Record<Sablier.Protocol, string[]> = {
  [Protocol.Airdrops]: [
    names.SABLIER_MERKLE_FACTORY,
    names.SABLIER_V2_MERKLE_LOCKUP_FACTORY,
    names.SABLIER_V2_MERKLE_STREAMER_FACTORY,
  ],
  [Protocol.Flow]: [names.SABLIER_FLOW],
  [Protocol.Legacy]: [],
  [Protocol.Lockup]: [
    names.SABLIER_V2_LOCKUP_LINEAR,
    names.SABLIER_V2_LOCKUP_DYNAMIC,
    names.SABLIER_V2_LOCKUP_TRANCHED,
    names.SABLIER_LOCKUP,
  ],
};

describe("Deployment blocks", () => {
  for (const release of sablier.releases.getAll()) {
    describe(`${release.protocol} ${release.version}`, () => {
      const contracts = sablier.contracts.getAll({ release })!;

      for (const contract of contracts) {
        if (!INDEXED[release.protocol].includes(contract.name)) {
          it.skip(`Skipped ${contract.name} because it's not an indexed contract.`, () => {});
          continue;
        }

        it(`${contract.name} should have a deployment block number`, () => {
          const errorMsg = `No block number found for ${contract.name}`;
          expect(contract.block, errorMsg).toBeDefined();
        });
      }
    });
  }
});
