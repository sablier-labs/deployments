import * as path from "node:path";
import type { Sablier } from "@src/types";
import * as fs from "fs-extra";
import { logInfo } from "./logger";

const ROOT_DIR = path.join(__dirname, "..");

export async function checkBroadcast(
  release: Sablier.Release,
  chain: Sablier.Chain,
  innerPath?: string,
): Promise<string | null> {
  if (chain.isZK) {
    return await checkZK(release, chain, innerPath);
  } else {
    return await checkStandard(release, chain, innerPath);
  }
}
/**
 * Checks that the broadcast file exists for the specified release and chain.
 * @param release - The release to check
 * @param chain - The chain to check
 * @param innerPath - The inner directory path to the contract to check, e.g. "core" or "periphery"
 * @returns The path to the broadcast file if it exists, otherwise null
 */
async function checkStandard(
  release: Sablier.Release,
  chain: Sablier.Chain,
  innerPath?: string,
): Promise<string | null> {
  return await checkPathExists(release, chain, innerPath, ".json");
}

/**
 * Checks that the ZK broadcast directory exists for the specified release and chain.
 * @param release - The release to check
 * @param chain - The chain to check
 * @param innerPath - The inner directory path to the contract to check, e.g. "core" or "periphery"
 * @returns The path to the broadcast directory if it exists, otherwise null
 */
async function checkZK(release: Sablier.Release, chain: Sablier.Chain, innerPath?: string): Promise<string | null> {
  return await checkPathExists(release, chain, innerPath, "");
}

/**
 * @example
 * data/
 * ├── lockup/
 * │ └── v2.0/
 * │   └── mainnets/
 * │     └── ethereum.json
 * └── lockup/
 *   └── v1.2/
 *     └── core/
 *       └── mainnets/
 *         └── ethereum.json
 */
async function checkPathExists(
  release: Sablier.Release,
  chain: Sablier.Chain,
  innerPath = "",
  suffix = "",
): Promise<string | null> {
  const chainType = chain.isTestnet ? "testnets" : "mainnets";
  const chainPath = path.join(chainType, `${chain.slug}${suffix}`);
  const basePath = path.join(__dirname, "..", "data", release.protocol, release.version);
  const contractPathWithSlashes = innerPath ? `/${innerPath}/` : "";
  const pathToCheck = path.join(basePath, contractPathWithSlashes, chainPath);

  if (!fs.existsSync(pathToCheck)) {
    const relativePath = path.relative(ROOT_DIR, pathToCheck);
    logInfo({
      msg: `No broadcasts for ${chain.name} at ${relativePath}`,
      release,
    });
  }

  return pathToCheck;
}
