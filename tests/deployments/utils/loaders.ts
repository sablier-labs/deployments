import fs from "node:fs";
import { checkBroadcast } from "@scripts/check-broadcasts";
import type { Sablier } from "@src/types";
import { globby } from "globby";
import type { BroadcastJSON, ZKBroadcastJSON } from "../../types";

export async function loadBroadcastJSON(
  release: Sablier.Release,
  chain: Sablier.Chain,
  componentName?: string,
): Promise<BroadcastJSON | ZKBroadcastJSON[] | null> {
  return chain.isZK
    ? loadZKBroadcastJSONs(release, chain, componentName)
    : loadStandardBroadcastJSON(release, chain, componentName);
}

async function loadStandardBroadcastJSON(
  release: Sablier.Release,
  chain: Sablier.Chain,
  componentName?: string,
): Promise<BroadcastJSON | null> {
  const foundPath = await checkBroadcast(release, chain, componentName);
  if (!foundPath) {
    return null;
  }

  const broadcast = await fs.promises.readFile(foundPath, "utf8");
  return JSON.parse(broadcast);
}

/**
 * Loads ZK deployment JSON files for contract names
 */
async function loadZKBroadcastJSONs(
  release: Sablier.Release,
  chain: Sablier.Chain,
  componentName?: string,
): Promise<ZKBroadcastJSON[] | null> {
  const dirs = await checkBroadcast(release, chain, componentName);
  if (!dirs) {
    return null;
  }

  // Read all JSON files in the directory.
  const results: ZKBroadcastJSON[] = [];
  for (const foundDir of dirs) {
    const jsonFiles = await globby("*.json", { absolute: true, cwd: foundDir });
    for (const filePath of jsonFiles) {
      const broadcast = await fs.promises.readFile(filePath, "utf8");
      results.push(JSON.parse(broadcast));
    }
  }
  return results;
}
