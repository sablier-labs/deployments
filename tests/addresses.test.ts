import { releases } from "@src";
import type { Sablier } from "@src/types";
import { isAddress } from "viem";
import { describe, expect, it } from "vitest";

// Use https://ethsum.netlify.app to fix failing tests
const checkAddressesFor = (protocol: Sablier.Protocol) => {
  const releaseArray = releases[protocol] as Sablier.Release[];
  for (const release of releaseArray) {
    describe(`Release ${release.version}`, () => {
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
};

describe("Address Checksums", () => {
  describe("Airdrops", () => {
    checkAddressesFor("airdrops");
  });

  describe("Flow", () => {
    checkAddressesFor("flow");
  });

  describe("Lockup", () => {
    checkAddressesFor("lockup");
  });
});
