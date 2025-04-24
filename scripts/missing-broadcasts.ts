/**
 * This script checks for missing broadcasts for a given protocol. It will look at the releases
 * and check if the associated broadcasts exist in the data directory. The script does not check
 * for all chains, only the ones listed in the releases.
 *
 * Usage:
 *   bun run scripts/missing-broadcasts.ts --airdrops
 *   bun run scripts/missing-broadcasts.ts --flow
 *   bun run scripts/missing-broadcasts.ts --lockup
 */
import { getChain, releases } from "@src";
import logger from "@src/logger";
import type { Sablier } from "@src/types";
import _ from "lodash";
import { checkBroadcastPaths, checkZKBroadcastDirs } from "./check-broadcasts";

// Emojis for better visual output
const EMOJIS = {
  check: "✅",
  cross: "❌",
  folder: "📁",
  mainnet: "🌐",
  testnet: "🧪",
  version: "📦",
  warning: "⚠️",
} as const;

type BroadcastType = `--${Sablier.Protocol}`;

function parseArgs(): BroadcastType {
  const flag = process.argv[2] as BroadcastType;
  const validFlags: BroadcastType[] = ["--flow", "--airdrops", "--lockup"];
  if (!flag || !validFlags.includes(flag)) {
    logger.error("Error: Please provide one of these flags: --flow, --airdrops, or --lockup");
    process.exit(1);
  }

  return flag;
}

// Get broadcast type from command line
const broadcastFlag = parseArgs();
const protocol = broadcastFlag.slice(2) as Sablier.Protocol; // Remove -- prefix

/**
 * Prints a section header with a nice separator
 */
function printSectionHeader(text: string): void {
  const separator = "═".repeat(50);
  console.log(`\n${separator}`);
  console.log(text);
  console.log(`${separator}\n`);
}

/**
 * Main function to check for missing broadcasts
 */
async function checkMissingBroadcasts(): Promise<void> {
  const missing: Record<string, Sablier.Chain[]> = {};
  const releasesToCheck = releases[protocol];

  console.log(`\n${EMOJIS.folder} Checking ${protocol} broadcasts...\n`);

  for (const release of releasesToCheck) {
    for (const deployment of release.deployments) {
      const chain = getChain(deployment.chainId);
      const found = chain.isZK ? await checkZKBroadcastDirs(release, chain) : await checkBroadcastPaths(release, chain);

      if (!found) {
        if (!missing[release.version]) {
          missing[release.version] = [];
        }
        missing[release.version].push(chain);
      }
    }
  }

  // Output results
  if (_.keys(missing).length === 0) {
    printSectionHeader(`${EMOJIS.check} All listed chains have broadcasts`);
    return;
  }

  // Print warning about missing broadcasts
  printSectionHeader(`${EMOJIS.warning} Missing Broadcasts`);

  // Print results grouped by version
  const versionKeys = _.keys(missing);
  for (let i = 0; i < versionKeys.length; i++) {
    const version = versionKeys[i];
    const versionMissing = missing[version];

    // Add a separator line before each version except the first one
    if (i !== 0) {
      console.log(`${"·".repeat(50)}\n`);
    }

    console.log(`${EMOJIS.version} Version: ${version}`);

    // Group by network type
    const mainnets = versionMissing.filter((c) => !c.isTestnet);
    const testnets = versionMissing.filter((c) => c.isTestnet);

    if (mainnets.length > 0) {
      console.log(`\n${EMOJIS.mainnet} Mainnets:`);
      for (const c of mainnets) {
        console.log(`   ${EMOJIS.cross} ${c.name} (ID ${c.id})`);
      }
    }

    if (testnets.length > 0) {
      console.log(`\n${EMOJIS.testnet} Testnets:`);
      for (const c of testnets) {
        console.log(`   ${EMOJIS.cross} ${c.name} (ID ${c.id})`);
      }
    }

    console.log(); // Empty line between versions
  }

  // Print summary
  const totalMissing = _.values(missing).flat().length;
  const mainnetCount = _.values(missing)
    .flat()
    .filter((c) => !c.isTestnet).length;
  const testnetCount = _.values(missing)
    .flat()
    .filter((c) => c.isTestnet).length;

  printSectionHeader("Summary");
  console.log(`Total missing broadcasts: ${totalMissing}`);
  console.log(`${EMOJIS.mainnet} Missing mainnet broadcasts: ${mainnetCount}`);
  console.log(`${EMOJIS.testnet} Missing testnet broadcasts: ${testnetCount}\n`);
}

// Run the script
checkMissingBroadcasts().catch((error) => {
  logger.error(`Error checking missing broadcasts: ${error.message}`);
  if (error.stack) {
    logger.error(error.stack);
  }
  process.exit(1);
});
