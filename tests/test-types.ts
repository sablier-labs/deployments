export interface ContractReturn {
  internal_type: string;
  value: string;
}

export interface FlowDeploymentJSON {
  returns: {
    flow: ContractReturn;
    flowNFTDescriptor: ContractReturn;
  };
}

export interface AirdropDeploymentJSON {
  returns: {
    merkleFactory: ContractReturn;
  };
}

export type DeploymentJSON = FlowDeploymentJSON | AirdropDeploymentJSON;

export interface Contract {
  name: string;
  address: string;
}

export interface ZKDeploymentJSON {
  contractName: string;
  entries: Array<{
    address: string;
    salt: string;
  }>;
}
