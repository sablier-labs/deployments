import path from "node:path";
import type { Sablier } from "@src/types";
import type { Options as GlobbyOptions } from "globby";
import { globby } from "globby";
import { logInfo } from "./logger";

const ROOT_DIR = path.join(__dirname, "..");

export async function checkBroadcast(
  release: Sablier.Release,
  chain: Sablier.Chain,
  contractPath?: string,
): Promise<string | null> {
  return chain.isZK
    ? checkZKBroadcast(release, chain, contractPath)
    : checkStandardBroadcast(release, chain, contractPath);
}
/**
 * Checks that the broadcast file exists for the specified release and chain.
 * @param release - The release to check
 * @param chain - The chain to check
 * @param contractPath - The inner directory path to the contract to check, e.g. "core" or "periphery"
 * @returns The path to the broadcast file if it exists, otherwise null
 */
async function checkStandardBroadcast(
  release: Sablier.Release,
  chain: Sablier.Chain,
  contractPath?: string,
): Promise<string | null> {
  return checkPath(release, chain, { onlyFiles: true }, contractPath, ".json");
}

/**
 * Checks that the ZK broadcast directory exists for the specified release and chain.
 * @param release - The release to check
 * @param chain - The chain to check
 * @param contractPath - The inner directory path to the contract to check, e.g. "core" or "periphery"
 * @returns The path to the broadcast directory if it exists, otherwise null
 */
async function checkZKBroadcast(
  release: Sablier.Release,
  chain: Sablier.Chain,
  contractPath?: string,
): Promise<string | null> {
  return checkPath(release, chain, { onlyDirectories: true }, contractPath, "");
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
async function checkPath(
  release: Sablier.Release,
  chain: Sablier.Chain,
  options: GlobbyOptions,
  contractPath = "",
  suffix = "",
): Promise<string | null> {
  const chainType = chain.isTestnet ? "testnets" : "mainnets";
  const chainPath = path.join(chainType, `${chain.slug}${suffix}`);
  const basePath = path.join(__dirname, "..", "data", release.protocol, release.version);
  const contractPathWithSlashes = contractPath ? `/${contractPath}/` : "";
  const pathToCheck = path.join(basePath, contractPathWithSlashes, chainPath);

  const [pathExists] = await globby(pathToCheck, options);
  const found = pathExists ? pathToCheck : null;

  if (!pathExists) {
    const relativePath = path.relative(ROOT_DIR, pathToCheck);
    logInfo({
      msg: `No broadcasts for ${chain.name} at ${relativePath}`,
      release,
    });
    return null;
  }

  return found;
}
