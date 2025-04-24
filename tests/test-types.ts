export interface BroadcastJSON {
  libraries: Array<string>;
  returns: {
    [key: string]: ContractReturn;
  };
}

export interface Contract {
  name: string;
  address: `0x${string}`;
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
