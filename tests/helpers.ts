import fs from "node:fs";
import path from "node:path";
import { chains } from "@src";
import type { Sablier } from "@src/types";
import { entries } from "lodash";
import { getBroadcastPath, getZKBroadcastDir } from "../scripts/get-broadcasts";
import type { AirdropDeploymentJSON, FlowDeploymentJSON, ZKDeploymentJSON } from "./test-types";

/**
 * Loads deployment JSON file for a given chain
 */
export async function loadBroadcastJSON(
  protocol: Sablier.Protocol,
  version: string,
  chainId: number,
): Promise<FlowDeploymentJSON | AirdropDeploymentJSON | null> {
  const jsonPath = await getBroadcastPath(protocol, version, chainId);
  if (!jsonPath) {
    // console.info(`Broadcast not found for ${chains.allById[chainId].name} (ID: ${chainId})`);
    return null;
  }

  const fileContent = await fs.promises.readFile(jsonPath, "utf8");
  return JSON.parse(fileContent);
}

/**
 * Loads ZK deployment JSON files for contract names
 */
export async function loadZKBroadcastJSON(
  protocol: Sablier.Protocol,
  version: string,
  chainId: number,
  manifest: Record<string, string>,
): Promise<Record<string, ZKDeploymentJSON> | null> {
  const dirPath = await getZKBroadcastDir(protocol, version, chainId);
  if (!dirPath) {
    // console.info(`Broadcast not found for ${chains.allById[chainId].name} (ID: ${chainId})`);
    return null;
  }

  const results: Record<string, ZKDeploymentJSON> = {};

  for (const [key, contractName] of entries(manifest)) {
    try {
      const contractPath = path.join(dirPath, `${contractName}.json`);
      const contractContent = await fs.promises.readFile(contractPath, "utf8");
      results[key] = JSON.parse(contractContent);
    } catch {
      console.info(
        `Contract ${contractName} not found for ${protocol} ${version} on ${chains.allById[chainId].name} (ID: ${chainId})`,
      );
    }
  }

  return results;
}
