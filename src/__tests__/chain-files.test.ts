import fs from "node:fs";
import path from "node:path";
import { mainnets, testnets } from "../chains";

function camelToKebab(str: string): string {
  return str.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase();
}

function getAllJsonFiles(dir: string): string[] {
  const files: string[] = [];
  const entries = fs.readdirSync(dir, { withFileTypes: true });

  for (const entry of entries) {
    const fullPath = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      files.push(...getAllJsonFiles(fullPath));
    } else if (entry.isFile() && entry.name.endsWith(".json")) {
      files.push(entry.name.replace(".json", ""));
    }
  }

  return files;
}

function findDirectoriesWithName(rootDir: string, targetName: string): string[] {
  const directories: string[] = [];
  const entries = fs.readdirSync(rootDir, { withFileTypes: true });

  for (const entry of entries) {
    const fullPath = path.join(rootDir, entry.name);
    if (entry.isDirectory()) {
      if (entry.name === targetName) {
        directories.push(fullPath);
      } else {
        directories.push(...findDirectoriesWithName(fullPath, targetName));
      }
    }
  }

  return directories;
}

describe("Chain file consistency", () => {
  it("should have consistent chain names between files and chains.ts", () => {
    const errors: string[] = [];

    // Find all mainnets and testnets directories recursively
    const mainnetDirs = [
      ...findDirectoriesWithName(path.join(process.cwd(), "airdrops"), "mainnets"),
      ...findDirectoriesWithName(path.join(process.cwd(), "src", "flow"), "mainnets"),
    ];
    const testnetDirs = [
      ...findDirectoriesWithName(path.join(process.cwd(), "airdrops"), "testnets"),
      ...findDirectoriesWithName(path.join(process.cwd(), "src", "flow"), "testnets"),
    ];

    // Get all JSON files from the found directories
    const foundMainnets = mainnetDirs.flatMap((dir) => getAllJsonFiles(dir));
    const foundTestnets = testnetDirs.flatMap((dir) => getAllJsonFiles(dir));

    // Convert chain names from chains.ts to kebab-case
    const expectedMainnets = Object.keys(mainnets).map(camelToKebab);
    const expectedTestnets = Object.keys(testnets).map(camelToKebab);

    // Check for missing chains in files
    for (const chain of expectedMainnets) {
      if (!foundMainnets.includes(chain)) {
        errors.push(`Mainnet chain "${chain}" is defined in chains.ts but not found in any JSON files`);
      }
    }

    for (const chain of expectedTestnets) {
      if (!foundTestnets.includes(chain)) {
        errors.push(`Testnet chain "${chain}" is defined in chains.ts but not found in any JSON files`);
      }
    }

    // Check for extra chains in files
    for (const chain of foundMainnets) {
      if (!expectedMainnets.includes(chain)) {
        errors.push(`Mainnet chain "${chain}" found in JSON files but not defined in chains.ts`);
      }
    }

    for (const chain of foundTestnets) {
      if (!expectedTestnets.includes(chain)) {
        errors.push(`Testnet chain "${chain}" found in JSON files but not defined in chains.ts`);
      }
    }

    // Log all errors if any exist
    if (errors.length > 0) {
      console.error("\nChain consistency errors found:");
      for (const error of errors) {
        console.error(`- ${error}`);
      }
    }

    // The test will pass even if there are errors, but they will be logged
    expect(errors.length).toBe(0);
  });
});
