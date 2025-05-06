/**
 * @file Type definitions for JSON structures that can be found under `./data`
 * These types represent the structure of broadcast and ZK broadcast JSON files
 * used in the deployment process.
 */

export interface BroadcastJSON {
  libraries: string[];
  returns: {
    [key: string]: ContractReturn;
  };
}

export interface ContractReturn {
  internal_type: string;
  value: `0x${string}`;
}

export interface ZKBroadcastJSON {
  contractName: string;
  entries: Array<{
    address: `0x${string}`;
    salt: string;
  }>;
}
