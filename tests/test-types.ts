export interface AirdropDeploymentJSON {
  returns: {
    merkleFactory: ContractReturn;
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

export type DeploymentJSON = FlowDeploymentJSON | AirdropDeploymentJSON;

export interface FlowDeploymentJSON {
  returns: {
    flow: ContractReturn;
    flowNFTDescriptor: ContractReturn;
  };
}

export interface ZKDeploymentJSON {
  contractName: string;
  entries: Array<{
    address: string;
    salt: string;
  }>;
}
