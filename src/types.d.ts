export interface SablierChain {
  explorerURL: string;
  id: number;
  isTestnet: boolean;
  gasToken: {
    decimals: number;
    name: string;
    symbol: string;
  };
  name: string;
}

// Also used for libraries, e.g., `Helpers` and `LockupMath`
export interface SablierContract {
  address: string;
  name: string;
}

interface TheGraph {
  explorer: string;
  studio: string;
  subgraph: {
    id: string;
    url: (apiKey: string) => string;
  };
}

// Either Envio or The Graph has to be provided
type Indexers = { envio: string; thegraph: TheGraph | null } | { envio: string | null; thegraph: TheGraph };

interface SablierRelease {
  [version: `v${number}.${number}.${number}`]: {
    chainId: number;
    contracts: SablierContract[];
    indexers: Indexers;
  };
}
