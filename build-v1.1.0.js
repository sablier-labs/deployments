#!/usr/bin/env node

const fs = require("fs");
const path = require("path");

// Define paths
const BROADCASTS_DIR = path.join(__dirname, "flow/v1.1.0/broadcasts");
const OUTPUT_FILE = path.join(__dirname, "src/releases/flow/flow-v1.1.0.ts");

// Contract names to look for
const CONTRACT_NAMES = {
  FLOW: "SablierFlow",
  DESCRIPTOR: "FlowNFTDescriptor",
};

// Function to extract contract addresses from broadcast files
function extractContractAddresses() {
  const contracts = {};
  const chainContracts = {};

  // Read all JSON files in the broadcasts directory
  const files = fs.readdirSync(BROADCASTS_DIR).filter((file) => file.endsWith(".json") && !file.startsWith("."));

  console.log(`Found ${files.length} broadcast files`);

  files.forEach((file) => {
    const filePath = path.join(BROADCASTS_DIR, file);
    const chainName = file.replace(".json", "");

    try {
      const data = JSON.parse(fs.readFileSync(filePath, "utf8"));

      // Extract contract addresses from transactions
      if (data.transactions && Array.isArray(data.transactions)) {
        data.transactions.forEach((tx) => {
          if (tx.contractName && tx.contractAddress) {
            if (!chainContracts[chainName]) {
              chainContracts[chainName] = {};
            }

            chainContracts[chainName][tx.contractName] = tx.contractAddress;

            // Also store by contract type for easier lookup
            if (!contracts[tx.contractName]) {
              contracts[tx.contractName] = {};
            }
            contracts[tx.contractName][chainName] = tx.contractAddress;
          }
        });
      }
    } catch (error) {
      console.error(`Error processing ${file}:`, error.message);
    }
  });

  return { contracts, chainContracts };
}

// Function to generate the release file
function generateReleaseFile(data) {
  // Start with Ethereum (mainnet) data as that's typically the reference deployment
  const ethereumData = data.chainContracts.mainnet;

  if (!ethereumData || !ethereumData[CONTRACT_NAMES.FLOW] || !ethereumData[CONTRACT_NAMES.DESCRIPTOR]) {
    console.error("Could not find required contracts for Ethereum mainnet");
    process.exit(1);
  }

  // Generate the file content
  const content = `import { chains } from "../../chains";
import type { SablierRelease } from "../../types";

export const flow: SablierRelease = {
  "v1.1.0": {
    chainId: chains.ethereum.id,
    contracts: [
      {
        address: "${ethereumData[CONTRACT_NAMES.FLOW]}",
        name: "${CONTRACT_NAMES.FLOW}",
      },
      {
        address: "${ethereumData[CONTRACT_NAMES.DESCRIPTOR]}",
        name: "${CONTRACT_NAMES.DESCRIPTOR}",
      },
    ],
    indexers: {
      envio: "https://indexer.hyperindex.xyz/3b4ea6b/v1/graphql",
      thegraph: {
        explorer: "https://thegraph.com/explorer/subgraphs/ECxBJhKceBGaVvK6vqmK3VQAncKwPeAQutEb8TeiUiod",
        studio: "https://api.studio.thegraph.com/query/57079/sablier-flow/version/latest",
        subgraph: {
          id: "ECxBJhKceBGaVvK6vqmK3VQAncKwPeAQutEb8TeiUiod",
          url: (apiKey: string) => {
            return \`https://gateway.thegraph.com/api/\${apiKey}/subgraphs/id/ECxBJhKceBGaVvK6vqmK3VQAncKwPeAQutEb8TeiUiod\`;
          },
        },
      },
    },
  },
};
`;

  // Write the file
  fs.writeFileSync(OUTPUT_FILE, content);
  console.log(`Generated release file at: ${OUTPUT_FILE}`);

  // Return the content for logging
  return content;
}

// Main function
function main() {
  console.log("Extracting contract addresses from broadcast files...");
  const data = extractContractAddresses();

  console.log("\nFound contracts:");
  Object.keys(data.contracts).forEach((contractName) => {
    console.log(`${contractName}:`);
    Object.keys(data.contracts[contractName]).forEach((chain) => {
      console.log(`  ${chain}: ${data.contracts[contractName][chain]}`);
    });
  });

  console.log("\nGenerating release file...");
  const content = generateReleaseFile(data);

  console.log("\nSuccessfully created flow-v1.1.0.ts");
}

main();
