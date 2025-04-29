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

    // Process each alias in the release
    _.forOwn(aliases, (alias, key) => {
      let contractName: string;

      // Lockup v1.x has core/periphery structure, others are flat
      if (release.kind === "lockupV1") {
        // Type cast the manifest to ManifestLockupV1
        const manifest = release.manifest;
        contractName = _.get(manifest.core, key) || _.get(manifest.periphery, key) || key;
      } else {
        // For the array-based manifest, we just use the key directly
        // since the key should be the contract name itself
        contractName = key;
      }

      rows.push({
        alias,
        contractName,
        release: releaseName,
      });
    });
  }

  // Print as a table
  if (rows.length === 0) {
    console.log("❌ No aliases found");
    return;
  }

  console.log(`✅ Found ${rows.length} total aliases\n`);

  // Sort rows alphabetically by alias
  rows.sort((a, b) => a.alias.localeCompare(b.alias));

  // Calculate column widths
  const headers = ["Alias", "Contract Name", "Release"];
  const colWidths = headers.map((h, i) => Math.max(h.length, ...rows.map((row) => Object.values(row)[i].length)));

  // Print header
  const headerRow = headers.map((h, i) => h.padEnd(colWidths[i])).join(" | ");
  const sep = colWidths.map((w) => "-".repeat(w)).join("-|-");
  console.log(headerRow);
  console.log(sep);

  // Print rows
  for (const row of rows) {
    const vals = [row.alias, row.contractName, row.release];
    const line = vals.map((v, i) => v.padEnd(colWidths[i])).join(" | ");
    console.log(line);
  }
}

main().catch((err) => {
  logger.error(err);
  process.exit(1);
});
