import fs from "node:fs";
import path from "node:path";
import type { Sablier } from "@src/types";
import { checkBroadcastPaths, checkZKBroadcastDirs } from "../scripts/check-broadcasts";
import type { BroadcastJSON, ZKBroadcastJSON } from "./test-types";

export async function loadBroadcastJSONs(
  release: Sablier.Release,
  chain: Sablier.Chain,
): Promise<BroadcastJSON[] | null> {
  const broadcastPaths = await checkBroadcastPaths(release, chain);
  if (!broadcastPaths) {
    return null;
  }

  const results: BroadcastJSON[] = [];
  for (const broadcastPath of broadcastPaths) {
    const broadcast = await fs.promises.readFile(broadcastPath, "utf8");
    results.push(JSON.parse(broadcast));
  }
  return results;
}

/**
 * Loads ZK deployment JSON files for contract names
 */
export async function loadZKBroadcastJSONs(
  release: Sablier.Release,
  chain: Sablier.Chain,
): Promise<ZKBroadcastJSON[] | null> {
  const dirs = await checkZKBroadcastDirs(release, chain);
  if (!dirs) {
    return null;
  }

  const results: ZKBroadcastJSON[] = [];
  for (const dir of dirs) {
    // Read all files in the directory.
    const files = await fs.promises.readdir(dir);
    for (const file of files) {
      const filePath = path.join(dir, file);
      const broadcast = await fs.promises.readFile(filePath, "utf8");
      results.push(JSON.parse(broadcast));
    }
  }
  return results;
}
