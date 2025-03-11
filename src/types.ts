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
  isSupportedByUI: boolean;
  /** Whether this is a testnet network */
  isTestnet: boolean;
  /** Whether this is a zkVM like zkSync */
  isZK: boolean;
  /** Used in deployment files to identify the chain */
  key: string;
  /** Native token information for this chain */
  nativeToken: NativeToken;
  /** Name of the chain */
  name: string;
  /** JSON-RPC configuration */
  rpc: {
    /** Alchemy RPC URL generator */
    alchemy?: (apiKey: string) => string;
    /** Infura RPC URL generator */
    infura?: (apiKey: string) => string;
    /** Public RPC URL; might be unreliable for production use */
    public: string;
  };
}

export interface SablierContract {
  address: string;
  name: string;
}

export type SablierProtocol = "airdrops" | "flow" | "lockup";

export interface SablierSubgraph {
  id: string;
  name: string;
}

export type SablierSubgraphs = Record<number, SablierSubgraph>;

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

export interface SablierDeployment {
  [chainId: number]: {
    contracts: SablierContract[];
    indexers: Indexers;
  };
}

export interface SablierDeployments {
  [version: `v${number}.${number}.${number}`]: SablierDeployment[];
}

interface Indexers {
  envio?: string;
  thegraph?: TheGraph;
}
