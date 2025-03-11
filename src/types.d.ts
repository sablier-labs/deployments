export interface NativeToken {
  decimals: number;
  name: string;
  symbol: string;
}
export interface SablierChain {
  explorerURL: string;
  id: number;
  isTestnet: boolean;
  nativeToken: NativeToken;
  name: string;
}

// Also used for libraries, e.g., `Helpers` and `LockupMath`
export interface SablierContract {
  address: string;
  name: string;
}

export interface TheGraph {
  explorer: string;
  studio: string;
  subgraph: {
    id: string;
    url: (apiKey: string) => string;
  };
}

export type Indexers = { envio?: string; thegraph?: TheGraph };

export interface SablierDeployment {
  [chainId: number]: {
    contracts: SablierContract[];
    indexers: Indexers;
  };
}

export interface SablierDeployments {
  [version: `v${number}.${number}.${number}`]: SablierDeployment[];
}
