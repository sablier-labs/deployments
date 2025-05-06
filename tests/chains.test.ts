/**
 * @file This test suite ensures consistency between chain definitions in the package and deployment files.
 *
 * The tests verify that:
 * 1. All chains defined in the package have corresponding deployment files
 * 2. All deployment files correspond to chains defined in the package
 *
 * The test searches through deployment directories for files and compares them against the chains
 * defined in the package.
 *
 * Additionally, it pings the public JSON-RPC servers of all chains to ensure they are reachable.
 */
import path from "node:path";
import { chains } from "@src/chains";
import { ChainId } from "@src/chains/ids";
import axios from "axios";
import { globby } from "globby";
import { beforeAll, describe, expect, it } from "vitest";

const MALFUNCTIONING_RPC: number[] = [ChainId.MELD];
const MISSING_BROADCASTS: string[] = ["iotex", "ronin", "tangle", "ultra"];
const PACKAGE_CHAINS = chains.filter((chain) => !MISSING_BROADCASTS.includes(chain.key)).map((chain) => chain.key);

describe("Package chains are in sync with broadcasts", () => {
  let broadcastChains: string[] = [];
  const errors: Set<string> = new Set();

  beforeAll(async () => {
    // Get all deployment files
    broadcastChains = await getAllBroadcastChains();
  });

  it("should have every chain in at least one broadcast", () => {
    errors.clear();
    for (const chainKey of PACKAGE_CHAINS) {
      if (!broadcastChains.includes(chainKey)) {
        errors.add(`Chain "${chainKey}" is defined in package but NOT found in any broadcast`);
      }
    }

    if (errors.size > 0) {
      throw new Error(
        `❌ Missing chains:\n${Array.from(errors)
          .map((e) => `  🔍 ${e}`)
          .join("\n")}`,
      );
    }
    expect(errors.size).toBe(0);
  });

  it("should not have any unknown chain in broadcasts", () => {
    errors.clear();
    for (const chainKey of broadcastChains) {
      if (!PACKAGE_CHAINS.includes(chainKey) && !MISSING_BROADCASTS.includes(chainKey)) {
        errors.add(`Chain "${chainKey}" found in broadcasts but NOT defined in package`);
      }
    }

    if (errors.size > 0) {
      throw new Error(
        `❌ Extra chains:\n${Array.from(errors)
          .map((e) => `  ⚠️ ${e}`)
          .join("\n")}`,
      );
    }
    expect(errors.size).toBe(0);
  });
});

const envVarsSet = process.env.CI && process.env.TEST_ONLY_CHAINS;
describe.runIf(envVarsSet)("Ping JSON-RPC server", () => {
  for (const chain of chains) {
    const shouldSkip: boolean = !chain.rpc.public || MALFUNCTIONING_RPC.includes(chain.id);

    it.skipIf(shouldSkip)(`${chain.name} (ID: ${chain.id})`, async () => {
      const rpcRequest = {
        jsonrpc: "2.0",
        id: 1,
        method: "eth_chainId",
        params: [],
      };

      await expect(
        axios.post(chain.rpc.public, rpcRequest, {
          headers: { "Content-Type": "application/json" },
          timeout: 10_000, // 10 seconds
        }),
      ).resolves.toMatchObject({
        status: 200,
        data: {
          jsonrpc: "2.0",
          id: 1,
          result: expect.any(String),
        },
      });
    });
  }
});

async function getAllBroadcastChains(): Promise<string[]> {
  const dataPath = path.join(__dirname, "..", "data");
  const dirs = await globby([path.join(dataPath, "**/mainnets"), path.join(dataPath, "**/testnets")], {
    onlyDirectories: true,
  });
  const results: string[] = [];

  for (const dir of dirs) {
    const entries = await globby(["*"], { cwd: dir, objectMode: true, onlyFiles: false });

    for (const entry of entries) {
      // It's a JSON file, use the basename without extension
      if (entry.path.endsWith(".json")) {
        results.push(path.basename(entry.path, ".json"));
      }
      // It's a directory, add its name
      else if (entry.dirent.isDirectory()) {
        results.push(entry.path);
      }
    }
  }

  return results;
}
