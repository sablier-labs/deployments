import { releases } from "@src";
import { isAddress } from "viem";
import { describe, expect, it } from "vitest";

/**
 * @note Use https://ethsum.netlify.app to fix failing tests
 */
describe("Address Checksums", () => {
  for (const release of releases) {
    describe(`${release.protocol} ${release.version}`, () => {
      it("should have all addresses checksummed", () => {
        for (const deployment of release.deployments) {
          for (const contract of deployment.contracts) {
            expect(
              isAddress(contract.address),
              `Non-checksummed address in ${release.protocol}: ${contract.address}`,
            ).toBe(true);
          }
        }
      });
    });
  }
});
