import { logAndThrow } from "@scripts/logger";
import queries from "@src/queries";
import { releases, releasesByVersion } from "@src/releases";
import axios from "axios";
import _ from "lodash";
import { isAddress } from "viem";
import { describe, expect, it } from "vitest";
import etherscanChainIds from "./setup/etherscan";

/**
 * @note Use https://ethsum.netlify.app to fix failing tests
 */
describe("Address checksums", () => {
  for (const release of releases) {
    describe(`${release.protocol} ${release.version}`, () => {
      const contracts = queries.contracts.getAll({ release });
      if (!contracts) {
        logAndThrow({ msg: "No contracts found", release });
      }

      for (const contract of contracts) {
        it(`${contract.name} should have a checksummed address`, () => {
          const message = `Found non-checksummed address: ${contract.address}`;
          expect(isAddress(contract.address), message).toBe(true);
        });
      }
    });
  }
});

describe("Contract catalog", () => {
  const releasesToTest = [
    releasesByVersion.airdrops["v1.3"],
    releasesByVersion.flow["v1.1"],
    releasesByVersion.legacy["v1.1"],
    releasesByVersion.lockup["v2.0"],
  ];

  for (const release of releasesToTest) {
    it(`should have a valid catalog for ${release.protocol} ${release.version}`, () => {
      const deployment = release.deployments[0];
      const contract = deployment.contracts[0];
      const lowercaseAddress = contract.address.toLowerCase();
      const entry = queries.contracts.get({
        chainId: deployment.chainId,
        contractAddress: lowercaseAddress,
        release,
      });
      expect(entry).toStrictEqual(contract);
    });
  }
});

const shouldRunBlockTests = process.env.CI && process.env.TEST_ONLY_CONTRACTS;
describe.runIf(shouldRunBlockTests)("Block numbers", () => {
  const ETHERSCAN_API_KEY = process.env.VITE_ETHERSCAN_API_KEY;
  if (!ETHERSCAN_API_KEY) {
    logAndThrow({ msg: "VITE_ETHERSCAN_API_KEY is not set" });
  }

  /**
   * Fetches contract creation block number from Etherscan API
   */
  async function getContractCreationBlock(address: string, chainId: number): Promise<number | null> {
    const addressLower = address.toLowerCase();
    const apiURL = `https://api.etherscan.io/v2/api?chainid=${chainId}&module=contract&action=getcontractcreation&contractaddresses=${addressLower}&apikey=${ETHERSCAN_API_KEY}`;

    try {
      const response = await axios.get(apiURL);
      const blockNumber = _.get(response.data, "result[0].blockNumber");

      return blockNumber ? Number.parseInt(blockNumber, 10) : null;
    } catch {
      return null;
    }
  }

  for (const release of releases) {
    describe(`${release.protocol} ${release.version}`, () => {
      for (const deployment of release.deployments) {
        const chainId = deployment.chainId;
        const chain = queries.chains.getOrThrow(chainId);

        // Skip chains not supported by Etherscan
        if (!etherscanChainIds.includes(chainId)) {
          it.skip(`Skipped ${chain.name} because it's not supported by Etherscan`, () => {});
          continue;
        }

        const contractsWithBlocks = deployment.contracts.filter((contract) => contract.block);
        if (contractsWithBlocks.length === 0) {
          it.skip(`Skipped ${release.protocol} ${release.version} on ${chain.name} because it has no contracts with block numbers`, () => {});
          continue;
        }

        describe(`on ${chain.name}`, () => {
          for (const contract of contractsWithBlocks) {
            it(`contract ${contract.name}`, async () => {
              const actualBlockNumber = await getContractCreationBlock(contract.address, chainId);
              expect(contract.block).toEqual(actualBlockNumber);
            });
          }
        });
      }
    });
  }
});
