export declare namespace Sablier {
  /** The native token on an EVM chain, used for paying gas fees */
  export interface NativeToken {
    decimals: number;
    name: string;
    symbol: string;
  }

  export interface Chain {
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

  export interface ChainDeployment {
    [chainId: number]: Deployment;
  }

  export interface Contract {
    address: string;
    name: string;
  }

  export interface Deployment {
    contracts: Contract[];
    indexers: Indexers;
  }

  export interface Indexers {
    envio?: string;
    thegraph?: TheGraph;
  }

  export type Protocol = "airdrops" | "flow" | "lockup";

  export interface Subgraph {
    id: string;
    name: string;
  }

  export type Subgraphs = Record<number, Subgraph>;

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

  export type Version = `v${number}.${number}.${number}`;
}
