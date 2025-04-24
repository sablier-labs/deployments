export declare namespace Sablier {
  export type Address = `0x${string}`;

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

  /**
   * Can be either a contract or a public library.
   */
  export interface Contract {
    address: Address;
    name: string;
  }

  /**
   * A release is a collection of deployments for a given protocol and version.
   */
  export interface Release {
    /** An array of `Deployment` objects. */
    deployments: Deployment[];
    /** A map of all contracts and libraries shipped in the release. */
    manifest: {
      [key: string]: string;
    };
    /** The Sablier protocol of the release, e.g. `airdrops`. */
    protocol: Protocol;
    /** The version of the release, e.g., `v1.0.0`. */
    version: Version;
  }

  export interface Deployment {
    chainId: number;
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
