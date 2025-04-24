/**
 * This test suite ensures consistency between chain definitions in the package and deployment files.
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
import { chains } from "@src";
import axios from "axios";
import { globby } from "globby";
import { beforeAll, describe, expect, it } from "vitest";

const DATA_PATH = path.join(__dirname, "..", "data");
// TODO: figure out why we don't have broadcasts for these chains
const EXCLUDED_CHAINS: string[] = ["arbitrum-goerli", "arbitrum-nova", "goerli", "iotex", "tangle", "ultra"];

async function getAllBroadcasts(): Promise<string[]> {
  // Find all mainnets and testnets directories
  const dirs = await globby([path.join(DATA_PATH, "**/mainnets"), path.join(DATA_PATH, "**/testnets")], {
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

  // Return unique values
  return results;
}

describe("Package chains are in sync with broadcasts", () => {
  let broadcastChains: string[] = [];
  let packageChains: string[] = [];
  const errors: Set<string> = new Set();

  beforeAll(async () => {
    // Get all deployment files
    broadcastChains = await getAllBroadcasts();

    // Filter excluded chains
    packageChains = chains.all.filter((chain) => !EXCLUDED_CHAINS.includes(chain.key)).map((chain) => chain.key);
  });

  it("should have every chain in at least one broadcast", () => {
    errors.clear();
    for (const chain of packageChains) {
      if (!broadcastChains.includes(chain)) {
        errors.add(`Chain "${chain}" is defined in package but NOT found in any broadcast`);
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
    for (const chain of broadcastChains) {
      if (!packageChains.includes(chain) && !EXCLUDED_CHAINS.includes(chain)) {
        errors.add(`Chain "${chain}" found in broadcasts but NOT defined in package`);
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

describe("Ping public JSON-RPC servers", () => {
  // Generate a test for each chain
  for (const chain of chains.all) {
    // Skip chains without public RPC URLs
    if (!chain.rpc.public) {
      continue;
    }

    it.runIf(process.env.CI)(`should respond to JSON-RPC requests on ${chain.name} (ID: ${chain.id})`, async () => {
      const rpcRequest = {
        jsonrpc: "2.0",
        id: 1,
        method: "eth_chainId",
        params: [],
      };

      const response = await axios.post(chain.rpc.public, rpcRequest, {
        headers: {
          "Content-Type": "application/json",
        },
        timeout: 5000, // 5 second timeout
      });

      // Verify we got a proper JSON-RPC response
      expect(response.status).toBe(200);
      expect(response.data).toHaveProperty("jsonrpc", "2.0");
      expect(response.data).toHaveProperty("id", 1);
      expect(response.data).toHaveProperty("result");
    });
  }
});
