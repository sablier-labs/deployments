/**
 * This test suite ensures consistency between chain definitions in the package and deployment files.
 *
 * The tests verify that:
 * 1. All chains defined in the package have corresponding JSON deployment files
 * 2. All JSON deployment files correspond to chains defined in the package
 *
 * The test searches through deployment directories for JSON files and compares them against the
 * chains defined in the chains.ts configuration.
 */
import path from "node:path";
import { kebabCase } from "change-case";
import { globby } from "globby";
import { beforeAll, describe, expect, it } from "vitest";
import { chains } from "../src";

// TODO: figure out why we don't have broadcasts for these chains
const EXCLUDED_CHAINS = ["iotex", "ultra", "tangle"];

async function getAllDeploymentFiles(dir: string): Promise<string[]> {
  const dirs = await globby([`${dir}/**/mainnets/*/`, `${dir}/**/testnets/*/`], {
    onlyDirectories: true,
    deep: 1,
  });

  const jsonFiles = await globby([`${dir}/**/mainnets/**/*.json`, `${dir}/**/testnets/**/*.json`]);

  const all = [...dirs, ...jsonFiles];

  return all.map((item) => {
    if (item.endsWith("/")) {
      return path.basename(item.slice(0, -1));
    }
    return path.basename(item, ".json");
  });
}

describe("Chain file consistency", () => {
  let foundChains: string[] = [];
  let expectedChains: string[] = [];
  const errors: Set<string> = new Set();

  beforeAll(async () => {
    // Define the root directories to search in
    const rootDirs = ["airdrops", "flow", "lockup"];

    // Get all JSON files from the found directories
    foundChains = (
      await Promise.all(rootDirs.map((dir) => getAllDeploymentFiles(path.join(process.cwd(), dir))))
    ).flat();

    // Convert camelCase chain names to kebab-case and combine mainnets and testnets
    expectedChains = [
      ...Object.keys(chains.mainnets).map((chain) => kebabCase(chain)),
      ...Object.keys(chains.testnets).map((chain) => kebabCase(chain)),
    ].filter((chain) => !EXCLUDED_CHAINS.includes(chain));

    // Debug information
    console.info("Found chains:", foundChains);
    console.info("Expected chains:", expectedChains);
    console.info(
      "Missing chains:",
      expectedChains.filter((chain) => !foundChains.includes(chain)),
    );
  });

  it("should have all chains in deployment files", () => {
    errors.clear();
    for (const chain of expectedChains) {
      if (!foundChains.includes(chain)) {
        errors.add(`Chain "${chain}" is defined in package but NOT found in deployment files`);
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

  it("should not have extra chains in deployment files", () => {
    errors.clear();
    for (const chain of foundChains) {
      if (!expectedChains.includes(chain) && !EXCLUDED_CHAINS.includes(chain)) {
        errors.add(`Chain "${chain}" found in deployment files but NOT defined in package`);
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
