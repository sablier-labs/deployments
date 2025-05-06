import { releases } from "@src/releases";
import _ from "lodash";
import logger from "./logger";

interface AliasRow {
  alias: string;
  contractName: string;
  release: string;
}

async function main() {
  const rows: AliasRow[] = [];

  for (const release of releases) {
    const aliases = release.aliases;
    const releaseName = `${release.protocol} ${release.version}`;

    _.forOwn(aliases, (alias, key) => {
      let contractName: string;

      // Lockup v1.x has core/periphery structure, others are flat
      if (release.kind === "lockupV1") {
        // Type cast the manifest to ManifestLockupV1
        const manifest = release.manifest;
        contractName = _.get(manifest.core, key) || _.get(manifest.periphery, key) || key;
      } else {
        // For the array-based manifest, the key should be the contract name itself
        contractName = key;
      }

      rows.push({
        alias,
        contractName,
        release: releaseName,
      });
    });
  }

  if (rows.length === 0) {
    console.log("❌ No aliases found");
    return;
  }

  console.log(`✅ Found ${rows.length} total aliases\n`);

  rows.sort((a, b) => a.alias.localeCompare(b.alias));

  const headers = ["Alias", "Contract Name", "Release"];
  const colWidths = headers.map((h, i) => Math.max(h.length, ...rows.map((row) => Object.values(row)[i].length)));

  const headerRow = headers.map((h, i) => h.padEnd(colWidths[i])).join(" | ");
  const sep = colWidths.map((w) => "-".repeat(w)).join("-|-");
  console.log(headerRow);
  console.log(sep);

  for (const row of rows) {
    const vals = [row.alias, row.contractName, row.release];
    const line = vals.map((v, i) => v.padEnd(colWidths[i])).join(" | ");
    console.log(line);
  }
}

main().catch((error) => {
  logger.error(`Error checking missing broadcasts: ${error.message}`);
  if (error.stack) {
    logger.error(error.stack);
  }
  process.exit(1);
});
