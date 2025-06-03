/**
 * @file This script checks for missing broadcasts for a given protocol. It will look at the releases
 * and check if the associated broadcasts exist in the data directory. The script does not check
 * for all chains, only the ones listed in the releases.
 *
 * Usage:
 *   bun run scripts/print-missing.ts airdrops
 *   bun run scripts/print-missing.ts flow
 *   bun run scripts/print-missing.ts lockup
 */
import { sablier } from "@src/sablier";
import type { Sablier } from "@src/types";
import _ from "lodash";
import { checkBroadcast } from "./check-broadcast";
import logger from "./logger";

const EMOJIS = {
  check: "✅",
  cross: "❌",
  folder: "📁",
  mainnet: "🌐",
  testnet: "🧪",
  version: "📦",
  warning: "⚠️",
} as const;

/* -------------------------------------------------------------------------- */
/*                                    MAIN                                    */
/* -------------------------------------------------------------------------- */

async function main(): Promise<void> {
  const missing: Record<string, Sablier.Chain[]> = {};
  const protocol = parseArgs();

  logger.info(`\n${EMOJIS.folder} Checking ${protocol} broadcasts...\n`);

  const allReleases = sablier.releases.getAll({ protocol });
  for (const release of allReleases) {
    for (const deployment of release.deployments) {
      const chain = sablier.chains.getOrThrow(deployment.chainId);

      let hasValidBroadcasts = false;

      if (release.kind === "lockupV1") {
        const components = ["core", "periphery"];
        hasValidBroadcasts = await Promise.all(
          components.map((component) => checkBroadcast(release, chain, component)),
        ).then((results) => results.every(Boolean));
      } else {
        const paths = await checkBroadcast(release, chain);
        hasValidBroadcasts = !_.isEmpty(paths);
      }

      // Add to missing list if broadcasts aren't valid
      if (!hasValidBroadcasts) {
        _.defaults(missing, { [release.version]: [] });
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

main();

/* -------------------------------------------------------------------------- */
/*                                   HELPERS                                  */
/* -------------------------------------------------------------------------- */

function parseArgs(): Sablier.Protocol {
  const protocol = process.argv[2] as Sablier.Protocol;
  const validProtocols: Sablier.Protocol[] = ["airdrops", "flow", "legacy", "lockup"];
  if (!protocol || !validProtocols.includes(protocol)) {
    const msg = `Error: Please provide one of these protocols: ${validProtocols.join(", ")}`;
    logger.error(msg);
    throw new Error(msg);
  }

  return protocol;
}

function printSectionHeader(text: string): void {
  const separator = "═".repeat(50);
  console.log(`\n${separator}`);
  console.log(text);
  console.log(`${separator}\n`);
}
