import path from "node:path";
import { isLockupV1Release } from "@src/types";
import type { Sablier } from "@src/types";
import { globby } from "globby";

const DATA_PATH = path.join(__dirname, "..", "data");

export async function getBroadcastPaths(release: Sablier.Release, chain: Sablier.Chain): Promise<string[] | null> {
  const chainType = chain.isTestnet ? "testnets" : "mainnets";

  const basePath = path.join(DATA_PATH, release.protocol, release.version);
  const suffixPath = path.join(chainType, `${chain.key}.json`);

  const paths = [];
  if (isLockupV1Release(release)) {
    const corePath = path.join(basePath, "core", suffixPath);
    const peripheryPath = path.join(basePath, "periphery", suffixPath);
    paths.push(corePath, peripheryPath);
  } else {
    paths.push(path.join(basePath, suffixPath));
  }

  // Using globby to check for file existence.
  const foundPaths = await globby(paths, { onlyFiles: true });
  if (!foundPaths || foundPaths.length === 0) {
    console.info(`Broadcasts not found for ${chain.name} (ID: ${chain.id})`);
    return null;
  }

  // Only one of the paths may be found.
  if (paths.length !== foundPaths.length) {
    console.info(`Either core or periphery broadcasts not found for ${chain.name} (ID: ${chain.id})`);
  }

  return foundPaths;
}

export async function getZKBroadcastDirs(release: Sablier.Release, chain: Sablier.Chain): Promise<string[] | null> {
  const chainType = chain.isTestnet ? "testnets" : "mainnets";

  const basePath = path.join(DATA_PATH, release.protocol, release.version);
  const suffixPath = path.join(chainType, chain.key);

  const dirs = [];
  if (isLockupV1Release(release)) {
    const coreDir = path.join(basePath, "core", suffixPath);
    const peripheryDir = path.join(basePath, "periphery", suffixPath);
    dirs.push(coreDir, peripheryDir);
  } else {
    dirs.push(path.join(basePath, suffixPath));
  }

  // Using globby to check for directory existence.
  const foundDirs = await globby(dirs, { onlyDirectories: true });
  if (!foundDirs || foundDirs.length === 0) {
    console.info(`Broadcasts not found for ${chain.name} (ID: ${chain.id})`);
    return null;
  }

  // Only one of the directories may be found.
  if (dirs.length !== foundDirs.length) {
    console.info(`Either core or periphery broadcasts not found for ${chain.name} (ID: ${chain.id})`);
  }

  return foundDirs;
}
