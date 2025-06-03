import queries from "@src/queries";
import { releases } from "@src/releases";
import { isAddress } from "viem";
import { describe, expect, it } from "vitest";

/**
 * @note Use https://ethsum.netlify.app to fix failing tests
 */
describe("Address checksums", () => {
  for (const release of releases) {
    describe(`${release.protocol} ${release.version}`, () => {
      const contracts = queries.contracts.getAll({ release })!;

      for (const contract of contracts) {
        it(`${contract.name} should have a checksummed address`, () => {
          const errorMsg = `Found non-checksummed address: ${contract.address}`;
          expect(isAddress(contract.address), errorMsg).toBe(true);
        });
      }
    });
  }
});
