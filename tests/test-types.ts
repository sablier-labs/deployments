export interface BroadcastJSON {
  returns: {
    [key: string]: ContractReturn;
  };
}

export interface Contract {
  name: string;
  address: string;
}

export interface ContractReturn {
  internal_type: string;
  value: string;
}

export interface ZKBroadcastJSON {
  contractName: string;
  entries: Array<{
    address: string;
    salt: string;
  }>;
}
