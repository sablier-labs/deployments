import path from "node:path";
import logger from "@src/logger";
import { isLockupV1Release } from "@src/types";
import type { Sablier } from "@src/types";
import { globby } from "globby";
import type { Options as GlobbyOptions } from "globby";

const ROOT_DIR = path.join(__dirname, "..");

interface PathCheckResult {
  found: string[];
  hasAllExpected: boolean;
}

async function checkPaths(
  release: Sablier.Release,
  chain: Sablier.Chain,
  options: GlobbyOptions,
  suffix = "",
): Promise<PathCheckResult> {
  const chainType = chain.isTestnet ? "testnets" : "mainnets";
  const basePath = path.join(__dirname, "..", "data", release.protocol, release.version);
  const chainPath = path.join(chainType, `${chain.key}${suffix}`);

  const potentialPaths: string[] = [];

  // Helper function to check and add paths
  async function checkAndAddPath(pathToCheck: string): Promise<void> {
    const [pathExists] = await globby(pathToCheck, options);

    if (pathExists) {
      potentialPaths.push(pathToCheck);
    } else {
      const relativePath = path.relative(ROOT_DIR, pathToCheck);
      let info = `${release.protocol}:${release.version} `;
      info += `No broadcasts for ${chain.name} at ${relativePath}`;
      logger.info(info);
    }
  }

  if (isLockupV1Release(release)) {
    // For LockupV1, check both core and periphery paths
    await checkAndAddPath(path.join(basePath, "core", chainPath));
    await checkAndAddPath(path.join(basePath, "periphery", chainPath));
    return {
      found: potentialPaths,
      hasAllExpected: potentialPaths.length === 2,
    };
  }

  // For all other releases, check the standard path
  await checkAndAddPath(path.join(basePath, chainPath));
  return {
    found: potentialPaths,
    hasAllExpected: potentialPaths.length === 1,
  };
}

/**
 * Checks for JSON broadcast files for the specified release and chain
 */
export async function checkBroadcastPaths(release: Sablier.Release, chain: Sablier.Chain): Promise<PathCheckResult> {
  return checkPaths(release, chain, { onlyFiles: true }, ".json");
}

/**
 * Checks for ZK broadcast directories for the specified release and chain
 */
export async function checkZKBroadcastDirs(release: Sablier.Release, chain: Sablier.Chain): Promise<PathCheckResult> {
  return checkPaths(release, chain, { onlyDirectories: true });
}
