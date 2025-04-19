/** The native token on an EVM chain, used for paying gas fees */
export interface NativeToken {
  decimals: number;
  name: string;
  symbol: string;
}

export interface SablierChain {
  /** URL of the blockchain explorer */
  explorerURL: string;
  /** Chain ID */
  id: number;
  /** Whether this chain is listed in the Sablier Interface at https://app.sablier.com */
  isListedInInterface: boolean;
  /** Whether this is a testnet network */
  isTestnet: boolean;
  /** Native token information for this chain */
  nativeToken: NativeToken;
  /** Name of the chain */
  name: string;
  /**
   * Public RPC URL for the network.
   * @warning This is a public node and should not be relied upon for production use.
   * It's recommended to use your own node or a reliable RPC provider.
   */
  rpcURL: string;
}

export interface SablierContract {
  address: string;
  name: string;
}

export interface TheGraph {
  /** URL to The Graph explorer */
  explorer: string;
  /** URL to The Graph studio */
  studio: string;
  subgraph: {
    /** ID of the subgraph */
    id: string;
    /** Function to generate the subgraph URL with a user-provided API key */
    url: (apiKey: string) => string;
  };
}

export type Indexers = {
  envio?: string;
  thegraph?: TheGraph;
};

export interface SablierDeployment {
  [chainId: number]: {
    contracts: SablierContract[];
    indexers: Indexers;
  };
}

export interface SablierDeployments {
  [version: `v${number}.${number}.${number}`]: SablierDeployment[];
}
