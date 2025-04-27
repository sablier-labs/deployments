import fs from "node:fs";
import type { Sablier } from "@src/types";
import { globby } from "globby";
import { checkBroadcast, checkZKBroadcast } from "../../scripts/check-broadcast";
import {} from "./finders";
import type { BroadcastJSON, ZKBroadcastJSON } from "./types";

export async function loadBroadcastJSON(
  release: Sablier.Release,
  chain: Sablier.Chain,
  releaseModule?: string,
): Promise<BroadcastJSON | null> {
  const foundPath = await checkBroadcast(release, chain, releaseModule);
  if (!foundPath) {
    return null;
  }

  const broadcast = await fs.promises.readFile(foundPath, "utf8");
  return JSON.parse(broadcast);
}

/**
 * Loads ZK deployment JSON files for contract names
 */
export async function loadZKBroadcastJSONs(
  release: Sablier.Release,
  chain: Sablier.Chain,
  releaseModule?: string,
): Promise<ZKBroadcastJSON[] | null> {
  const dirs = await checkZKBroadcast(release, chain, releaseModule);
  if (!dirs) {
    return null;
  }

  // Read all JSON files in the directory.
  const results: ZKBroadcastJSON[] = [];
  for (const foundDir of dirs) {
    const jsonFiles = await globby("*.json", { cwd: foundDir, absolute: true });
    for (const filePath of jsonFiles) {
      const broadcast = await fs.promises.readFile(filePath, "utf8");
      results.push(JSON.parse(broadcast));
    }
  }
  return results;
}
