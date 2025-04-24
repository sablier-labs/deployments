import { chains, releases } from "@src";
import type { Sablier } from "@src/types";
import _ from "lodash";
import {} from "./get-broadcasts";

// Parse command line arguments
type BroadcastType = `--${Sablier.Protocol}`;

function parseArgs(): BroadcastType {
  const flag = process.argv[2] as BroadcastType;

  if (!flag) {
    console.error("Error: Please provide one of these flags: --flow, --airdrops, or --lockup");
    process.exit(1);
  }

  const validFlags: BroadcastType[] = ["--flow", "--airdrops", "--lockup"];
  if (!validFlags.includes(flag)) {
    console.error("Error: Invalid flag. Please use one of: --flow, --airdrops, or --lockup");
    process.exit(1);
  }

  return flag;
}

// Get broadcast type from command line
const broadcastFlag = parseArgs();
const protocol = broadcastFlag.slice(2) as Sablier.Protocol; // Remove -- prefix

// Get source broadcasts based on type
function getReleases(): Sablier.Release[] {
  if (protocol === "flow") return releases.flow;
  if (protocol === "airdrops") return releases.airdrops;
  return releases.lockup;
}

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

interface MissingBroadcast {
  chainId: number;
  chainName: string;
  chainKey: string;
  version: string;
  isTestnet: boolean;
}

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
  const missingBroadcasts: MissingBroadcast[] = [];
  const releases = getReleases();

  console.log(`\n${EMOJIS.folder} Checking ${protocol} broadcasts...\n`);

  for (const release of releases) {
    for (const deployment of release.deployments) {
      const chainId = deployment.chainId;
      const chain = chains.allById[chainId];
      const broadcastPath = chain.isZK
        ? await getZKBroadcastDir(protocol, release.version, chainId)
        : await getBroadcastPath(protocol, release.version, chainId);

      if (!broadcastPath) {
        missingBroadcasts.push({
          chainId,
          chainName: chain.name,
          chainKey: chain.key,
          version: release.version,
          isTestnet: chain.isTestnet,
        });
      }
    }
  }

  // Output results
  if (missingBroadcasts.length === 0) {
    printSectionHeader(`${EMOJIS.check} All listed chains have broadcasts`);
    return;
  }

  // Print warning about missing broadcasts
  printSectionHeader(`${EMOJIS.warning} Missing Broadcasts`);

  // Group by version
  const groupedByVersion = missingBroadcasts.reduce(
    (acc, curr) => {
      if (!acc[curr.version]) {
        acc[curr.version] = [];
      }
      acc[curr.version].push(curr);
      return acc;
    },
    {} as Record<string, MissingBroadcast[]>,
  );

  // Print results grouped by version
  for (const [version, broadcasts] of _.entries(groupedByVersion)) {
    // Add a separator line before each version except the first one
    if (_.keys(groupedByVersion).indexOf(version) !== 0) {
      console.log(`${"·".repeat(50)}\n`);
    }

    console.log(`${EMOJIS.version} Version: ${version}`);

    // Group by network type
    const mainnets = broadcasts.filter((d) => !d.isTestnet);
    const testnets = broadcasts.filter((d) => d.isTestnet);

    if (mainnets.length > 0) {
      console.log(`\n${EMOJIS.mainnet} Mainnets:`);
      for (const broadcast of mainnets) {
        console.log(`   ${EMOJIS.cross} ${broadcast.chainName} (ID ${broadcast.chainId})`);
      }
    }

    if (testnets.length > 0) {
      console.log(`\n${EMOJIS.testnet} Testnets:`);
      for (const broadcast of testnets) {
        console.log(`   ${EMOJIS.cross} ${broadcast.chainName} (ID ${broadcast.chainId})`);
      }
    }

    console.log(); // Empty line between versions
  }

  // Print summary
  const totalMissing = missingBroadcasts.length;
  const mainnetCount = missingBroadcasts.filter((d) => !d.isTestnet).length;
  const testnetCount = missingBroadcasts.filter((d) => d.isTestnet).length;

  printSectionHeader("Summary");
  console.log(`Total missing broadcasts: ${totalMissing}`);
  console.log(`${EMOJIS.mainnet} Missing mainnet broadcasts: ${mainnetCount}`);
  console.log(`${EMOJIS.testnet} Missing testnet broadcasts: ${testnetCount}\n`);
}

// Run the script
checkMissingBroadcasts().catch(console.error);
