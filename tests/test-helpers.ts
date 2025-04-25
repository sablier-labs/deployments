import fs from "node:fs";
import path from "node:path";
import logger from "@src/logger";
import type { Sablier } from "@src/types";
import _ from "lodash";
import { checkBroadcastPaths, checkZKBroadcastDirs } from "../scripts/check-broadcasts";
import type { BroadcastJSON, ZKBroadcastJSON } from "./test-types";

const CONTRACT_PREFIX = "contract ";

/**
 * Finds a contract in the broadcast data.
 */
export function findContract(data: BroadcastJSON[], contractName: string): Sablier.Contract | null {
  // Check in contract returns
  const contractFromReturns = findInReturns(data, contractName);
  if (contractFromReturns) return contractFromReturns;

  // Check in libraries
  const contractFromLibraries = findInLibraries(data, contractName);
  if (contractFromLibraries) return contractFromLibraries;

  return null;
}

export function findZKContract(zkData: ZKBroadcastJSON[], contractName: string): ZKBroadcastJSON | null {
  return zkData.find((zkBroadcast) => zkBroadcast.contractName === contractName) ?? null;
}

/**
 * Finds a contract in the returns data
 * @example
 * "returns": {
 *  "lockup": {
 *    "internal_type": "contract SablierLockup",
 *    "value": "0x7C01AA3783577E15fD7e272443D44B92d5b21056"
 *  }
 * }
 */
export function findInReturns(broadcastData: BroadcastJSON[], contractName: string): Sablier.Contract | null {
  for (const data of broadcastData) {
    for (const contractReturn of _.values(data.returns)) {
      const sanitizedName = contractReturn.internal_type.replace(CONTRACT_PREFIX, "");
      if (contractName === sanitizedName) {
        return { address: contractReturn.value, name: contractName };
      }
    }
  }

  return null;
}

/**
 * Finds a contract in the libraries data
 * @example
 * "libraries": [
 *   "src/libraries/Helpers.sol:Helpers:0xf8076E4Fb5cfE8be1C26E61222DC51828Db8C1dc"
 * ]
 */
export function findInLibraries(broadcastData: BroadcastJSON[], contractName: string): Sablier.Contract | null {
  for (const data of broadcastData) {
    for (const library of data.libraries) {
      // Ensure we have the format "path/to/file.sol:ContractName:0xAddress"
      const parts = library.split(":");
      if (parts.length !== 3) continue;

      const libraryName = parts[1];
      const libraryAddress = parts[2] as `0x${string}`;

      if (contractName === libraryName) {
        return { address: libraryAddress, name: contractName };
      }
    }
  }
  return null;
}

export function throwNotFoundErr(release: Sablier.Release, chainName: string, contractName: string): never {
  let err = `${release.protocol}:${release.version} `;
  err += `Found broadcasts for ${chainName}, but contract ${contractName} is missing`;
  logger.error(err);
  throw new Error(err);
}

export async function loadBroadcastJSONs(
  release: Sablier.Release,
  chain: Sablier.Chain,
): Promise<BroadcastJSON[] | null> {
  const paths = await checkBroadcastPaths(release, chain);
  if (paths.found.length === 0) {
    return null;
  }

  const results: BroadcastJSON[] = [];
  for (const foundPath of paths.found) {
    const broadcast = await fs.promises.readFile(foundPath, "utf8");
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
  if (dirs.found.length === 0) {
    return null;
  }

  // Read all files in the directory.
  const results: ZKBroadcastJSON[] = [];
  for (const foundDir of dirs.found) {
    const files = await fs.promises.readdir(foundDir);
    for (const file of files) {
      const filePath = path.join(foundDir, file);
      const broadcast = await fs.promises.readFile(filePath, "utf8");
      results.push(JSON.parse(broadcast));
    }
  }
  return results;
}
