import fs from "node:fs";
import path from "node:path";

interface Transaction {
  contractName: string;
  hash: string;
  transactionType: string;
  contractAddress: string;
  function: string | null;
  arguments: unknown | null;
  transaction: {
    type: string;
    from: string;
    to: string;
    gas: string;
    value: string;
    data: string;
    nonce: string;
    accessList: unknown[];
  };
  additionalContracts: unknown[];
  isFixedGasLimit: boolean;
}

interface NFTDescriptor {
  internal_type: string;
  value: string;
}

interface DeploymentData {
  returns?: {
    nftDescriptor: NFTDescriptor;
    targetApprove: NFTDescriptor;
  };
  transactions?: Transaction[];
  receipts?: unknown[];
  timestamp?: number;
  commit?: string;
  chain?: number;
  multi?: boolean;
}

// Function to recursively find all JSON files in a directory
function findJsonFiles(dir: string): string[] {
  const files = fs.readdirSync(dir);
  let jsonFiles: string[] = [];

  for (const file of files) {
    const filePath = path.join(dir, file);
    const stat = fs.statSync(filePath);

    if (stat.isDirectory()) {
      // Delete artifacts directories
      if (file === "artifacts") {
        try {
          fs.rmSync(filePath, { recursive: true, force: true });
          // console.log(`Deleted artifacts directory: ${filePath}`);
          continue;
        } catch (error) {
          console.error(
            `Error deleting artifacts directory ${filePath}:`,
            error instanceof Error ? error.message : String(error),
          );
        }
      }
      jsonFiles = jsonFiles.concat(findJsonFiles(filePath));
    } else if (file.endsWith(".json")) {
      // Delete arbitrum-nova.json immediately if found
      if (file === "arbitrum-nova.json") {
        try {
          fs.unlinkSync(filePath);
          // console.log(`Deleted ${filePath}`);
          continue;
        } catch (error) {
          console.error(`Error deleting ${filePath}:`, error instanceof Error ? error.message : String(error));
        }
      }
      jsonFiles.push(filePath);
    }
  }

  return jsonFiles;
}

// Helper function to find NFT descriptor transaction
function findNftDescriptorTransaction(transactions: Transaction[] | undefined): Transaction | undefined {
  return transactions?.find((tx) => tx.contractName === "SablierV2NFTDescriptor");
}

// Helper function to find target approve transaction
function findTargetApproveTransaction(transactions: Transaction[] | undefined): Transaction | undefined {
  return transactions?.find((tx) => tx.contractName === "SablierV2ProxyTargetApprove");
}

// Helper function to check if deployment has valid NFT descriptor data
function hasValidNftDescriptorData(data: DeploymentData): boolean {
  return Boolean(data.returns?.nftDescriptor && findNftDescriptorTransaction(data.transactions));
}

// Helper function to check if deployment has valid target approve data
function hasValidTargetApproveData(data: DeploymentData): boolean {
  return Boolean(data.returns?.targetApprove && findTargetApproveTransaction(data.transactions));
}

// Function to process a file and update NFT descriptor data
function processFile(v100FilePath: string, v101Data: DeploymentData): void {
  try {
    const v100Content = fs.readFileSync(v100FilePath, "utf8");
    const v100Data: DeploymentData = JSON.parse(v100Content);

    // Find the NFT descriptor transactions
    const v100NftDescriptorTransaction = findNftDescriptorTransaction(v100Data.transactions);
    const v101NftDescriptorTransaction = findNftDescriptorTransaction(v101Data.transactions);

    // Find the target approve transactions
    const v100TargetApproveTransaction = findTargetApproveTransaction(v100Data.transactions);
    const v101TargetApproveTransaction = findTargetApproveTransaction(v101Data.transactions);

    // Initialize returns if it doesn't exist
    if (!v100Data.returns) {
      v100Data.returns = {
        nftDescriptor: { internal_type: "", value: "" },
        targetApprove: { internal_type: "", value: "" },
      };
    }

    // Update or add the NFT descriptor data
    if (v101Data.returns?.nftDescriptor) {
      v100Data.returns.nftDescriptor = v101Data.returns.nftDescriptor;
    }

    // Update or add the target approve data
    if (v101Data.returns?.targetApprove) {
      v100Data.returns.targetApprove = v101Data.returns.targetApprove;
    }

    // Initialize transactions array if it doesn't exist
    if (!v100Data.transactions) {
      v100Data.transactions = [];
    }

    // Handle NFT descriptor transaction
    if (v101NftDescriptorTransaction && !v100NftDescriptorTransaction) {
      v100Data.transactions.push(v101NftDescriptorTransaction);
    } else if (v100NftDescriptorTransaction && v101NftDescriptorTransaction) {
      const transactionIndex = v100Data.transactions.findIndex((tx) => tx.contractName === "SablierV2NFTDescriptor");
      if (transactionIndex !== -1) {
        v100Data.transactions[transactionIndex] = v101NftDescriptorTransaction;
      }
    }

    // Handle target approve transaction
    if (v101TargetApproveTransaction && !v100TargetApproveTransaction) {
      v100Data.transactions.push(v101TargetApproveTransaction);
    } else if (v100TargetApproveTransaction && v101TargetApproveTransaction) {
      const transactionIndex = v100Data.transactions.findIndex(
        (tx) => tx.contractName === "SablierV2ProxyTargetApprove",
      );
      if (transactionIndex !== -1) {
        v100Data.transactions[transactionIndex] = v101TargetApproveTransaction;
      }
    }

    // Create a new object without receipts, timestamp, and commit
    const { receipts: _, timestamp: __, commit: ___, ...dataWithoutExtraFields } = v100Data;

    // Write the updated data back to the file
    fs.writeFileSync(v100FilePath, JSON.stringify(dataWithoutExtraFields, null, 2));
  } catch (error) {
    console.error(`Error processing ${v100FilePath}:`, error instanceof Error ? error.message : String(error));
  }
}

// Main function
function main(): void {
  const baseDir = path.join(__dirname, "data", "lockup");
  const v100Dir = path.join(baseDir, "v1.0.0");
  const v101Dir = path.join(baseDir, "v1.0.1");

  // Find all JSON files in v1.0.1 directories
  const v101Files = findJsonFiles(v101Dir);
  const v101DataMap = new Map<string, DeploymentData>();

  // Read and store v1.0.1 data
  for (const v101FilePath of v101Files) {
    try {
      const v101Content = fs.readFileSync(v101FilePath, "utf8");
      const v101Data: DeploymentData = JSON.parse(v101Content);

      if (hasValidNftDescriptorData(v101Data) || hasValidTargetApproveData(v101Data)) {
        // Store the data using the absolute path as key, but remove v1.0.1 from the path
        const normalizedPath = v101FilePath.replace("v1.0.1/", "");
        v101DataMap.set(normalizedPath, v101Data);
      }
    } catch (error) {
      console.error(`Error reading ${v101FilePath}:`, error instanceof Error ? error.message : String(error));
    }
  }

  // Find all JSON files in v1.0.0 directories
  const v100Files = findJsonFiles(v100Dir);

  // Update v1.0.0 files with corresponding v101Data
  for (const v100FilePath of v100Files) {
    const normalizedPath = v100FilePath.replace("v1.0.0/", "");
    const v101Data = v101DataMap.get(normalizedPath);

    if (v101Data) {
      processFile(v100FilePath, v101Data);
    } else {
      console.log(`No matching v1.0.1 file found for ${v100FilePath}`);
    }
  }
}

// Run the script
main();
