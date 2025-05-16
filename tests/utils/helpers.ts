import fs from "node:fs";
import { checkBroadcast, checkZKBroadcast } from "@scripts/check-broadcast";
import { logAndThrow } from "@scripts/logger";
import type { Sablier } from "@src/types";
import { globby } from "globby";
import _ from "lodash";
import type { BroadcastJSON, ZKBroadcastJSON } from "./types";

const CONTRACT_PREFIX = "contract ";

/**
 * Finds a contract in the broadcast data.
 */
export function findContract(data: BroadcastJSON, contractName: string): Sablier.Contract | null {
  const contractFromReturns = findInReturns(data, contractName);
  if (contractFromReturns) return contractFromReturns;

  // Check in libraries
  const contractFromLibraries = findInLibraries(data, contractName);
  if (contractFromLibraries) return contractFromLibraries;

  return null;
}

export function findZKContract(zkData: ZKBroadcastJSON[], contractName: string): ZKBroadcastJSON | null {
  return zkData.find((zk) => zk.contractName === contractName) ?? null;
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
export function findInReturns(data: BroadcastJSON, contractName: string): Sablier.Contract | null {
  if (!data.returns) return null;
  for (const contractReturn of _.values(data.returns)) {
    const sanitizedName = contractReturn.internal_type.replace(CONTRACT_PREFIX, "");
    if (contractName === sanitizedName) {
      return { address: contractReturn.value, name: contractName };
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
export function findInLibraries(data: BroadcastJSON, contractName: string): Sablier.Contract | null {
  if (!data.libraries) return null;

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
  return null;
}

export async function loadBroadcastJSON(
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
export async function loadZKBroadcastJSONs(
  release: Sablier.Release,
  chain: Sablier.Chain,
  componentName?: string,
): Promise<ZKBroadcastJSON[] | null> {
  const dirs = await checkZKBroadcast(release, chain, componentName);
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

export function throwNotFoundErr(release: Sablier.Release, chainName: string, contractName: string): never {
  const msg = `Found broadcasts for ${chainName}, but contract ${contractName} is missing`;
  logAndThrow({ msg, release });
}
