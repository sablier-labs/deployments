import * as path from "node:path";
import type { Sablier } from "@src/types";
import * as fs from "fs-extra";
import { logVerbose } from "./internal/logger";

const ROOT_DIR = path.join(__dirname, "..");
const DATA_DIR = path.join(ROOT_DIR, "data");

/**
 * @example
 * data/
 * ├── lockup/
 * │ └── v2.0/
 * │   └── broadcasts/
 * │     └── mainnet.json
 * └── lockup/
 *   └── v1.2/
 *     └── core/
 *       └── broadcasts/
 *         └── mainnet.json
 */
export function checkBroadcast(release: Sablier.Release, chain: Sablier.Chain, innerPath?: string): string | null {
  let chainType = "";
  let chainPath = "";
  if (chain.isZK) {
    chainType = "broadcasts-zk";
    chainPath = path.join(chainType, chain.slug); // directory
  } else {
    chainType = "broadcasts";
    chainPath = path.join(chainType, `${chain.slug}.json`); // JSON file
  }

  const basePath = path.join(DATA_DIR, release.protocol, release.version);
  const pathToCheck = path.join(basePath, innerPath ?? "", chainPath);

  if (!fs.existsSync(pathToCheck)) {
    const relativePath = path.relative(ROOT_DIR, pathToCheck);
    logVerbose({
      msg: `No broadcasts for ${chain.slug} at ${relativePath}`,
      release,
    });
    return null;
  }

  return pathToCheck;
}
