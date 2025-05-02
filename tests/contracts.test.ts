import { getAllContractsForRelease, releases } from "@src/releases";
import { isAddress } from "viem";
import { describe, expect, it } from "vitest";

/**
 * @note Use https://ethsum.netlify.app to fix failing tests
 */
describe("Address Checksums", () => {
  describe("Should have all addresses checksummed", () => {
    for (const release of releases) {
      describe(`${release.protocol} ${release.version}`, () => {
        const contracts = getAllContractsForRelease(release);
        for (const contract of contracts) {
          it(`${contract.name} should have a checksummed address`, () => {
            expect(isAddress(contract.address), `Non-checksummed address: ${contract.address}`).toBe(true);
          });
        }
      });
    }
  });
});
