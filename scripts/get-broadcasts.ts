import fs from "node:fs";
import path from "node:path";
import { chains } from "@src";
import type { Sablier } from "@src/types";
import { globby } from "globby";
const DATA_PATH = path.join(__dirname, "..", "data");

export async function getBroadcastPath(
  protocol: Sablier.Protocol,
  version: string,
  chainId: number,
): Promise<string | null> {
  const chain = chains.allById[chainId];
  const chainType = chain.isTestnet ? "testnets" : "mainnets";
  const broadcastPath = path.join(DATA_PATH, protocol, version, chainType, `${chain.key}.json`);

  const [jsonPath] = await globby(broadcastPath);
  if (!jsonPath) {
    return null;
  }
  return jsonPath;
}

export async function getZKBroadcastDir(
  protocol: Sablier.Protocol,
  version: string,
  chainId: number,
): Promise<string | null> {
  const chain = chains.allById[chainId];
  const chainType = chain.isTestnet ? "testnets" : "mainnets";
  const broadcastPath = path.join(DATA_PATH, protocol, version, chainType, chain.key);

  try {
    await fs.promises.access(broadcastPath);
    return broadcastPath;
  } catch {
    return null;
  }
}
