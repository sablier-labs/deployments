import type versions from "./versions";

export declare namespace Sablier {
  /** Ethereum address in the format 0x followed by 40 hexadecimal characters. */
  export type Address = `0x${string}`;

  export interface AliasMap {
    [contractName: string]: string;
  }

  /** The native token on an EVM chain, used for paying gas fees. */
  export interface NativeToken {
    decimals: number;
    name: string;
    symbol: string;
  }

  export interface Chain {
    /** URL of the blockchain explorer. */
    explorerURL: string;
    /** Chain ID. */
    id: number;
    /** Whether this chain is supported by the Sablier Interface at https://app.sablier.com. */
    isSupportedByUI: boolean;
    /** Whether this is a testnet network. */
    isTestnet: boolean;
    /** Whether this is a zkVM like zkSync. */
    isZK: boolean;
    /** Used in deployment files to identify the chain. */
    key: string;
    /** Native token information for this chain. */
    nativeToken: NativeToken;
    /** Name of the chain. */
    name: string;
    /** JSON-RPC configuration. */
    rpc: {
      /** Alchemy RPC URL generator. */
      alchemy?: (apiKey: string) => string;
      /** Infura RPC URL generator. */
      infura?: (apiKey: string) => string;
      /** Public RPC URL; might be unreliable for production use. */
      public: string;
    };
  }

  export type CompilerSettings = {
    evmVersion: string;
    optimizer: boolean;
    optimizerRuns: number;
    version: `v${number}.${number}.${number}`;
    viaIR: boolean;
  };

  /**
   * Can be either a contract or a public library.
   */
  export interface Contract {
    /** Optional alias for the contract, used in the Sablier Interface and the subgraphs. */
    alias?: string;
    /** The address of the contract. */
    address: Address;
    /** Compiler settings for the contract. */
    compilerSettings?: CompilerSettings;
    /** URL to the explorer page for the contract. */
    explorerURL?: string;
    /** The name of the contract. */
    name: string;
    /** Repository information for the contract. */
    repository?: Repository;
  }

  export interface ContractMap {
    [contractName: string]: Address;
  }

  export interface Deployment {
    chainId: number;
    contracts: Contract[];
    indexers: Indexers;
  }

  export interface DeploymentLockupV1 extends Deployment {
    core: Contract[];
    periphery: Contract[];
  }

  export interface Indexers {
    envio?: string;
    thegraph?: TheGraph;
  }

  export interface ManifestLockupV1 {
    core: string[];
    periphery: string[];
  }

  export type Manifest = string[] | ManifestLockupV1;

  /** Supported Sablier protocol types. */
  export type Protocol = "airdrops" | "flow" | "lockup";

  /**
   * Base interface for all releases
   */
  export interface ReleaseBase {
    /** A map of contract names to their aliases, used in the Sablier Interface and the subgraphs. */
    aliases: { [contractName: string]: string };
    /** Whether this is the latest release for the protocol. */
    isLatest: boolean;
    /** The Sablier protocol released, e.g. `airdrops`. */
    protocol: Protocol;
    /** The version of the release, e.g., `v1.0`. */
    version: Version;
  }

  /**
   * A Lockup v1.x release is a historical release that used to separate Lockup contracts into
   * core and periphery sub-categories.
   * @see https://github.com/sablier-labs/v2-periphery
   */
  export interface ReleaseLockupV1 extends ReleaseBase {
    deployments: DeploymentLockupV1[];
    manifest: ManifestLockupV1;
  }

  /**
   * A standard release is a collection of deployments for a given protocol and version.
   * This is the default release type for most protocols.
   */
  export interface ReleaseStandard extends ReleaseBase {
    deployments: Deployment[];
    manifest: Manifest;
  }

  /**
   * Union type representing all possible release types
   */
  export type Release = ReleaseStandard | ReleaseLockupV1;

  export interface Repository {
    commit: string;
    url: `https://github.com/sablier-labs/${string}`;
  }

  export interface Subgraph {
    id: string;
    name: string;
  }

  /** Map of chain IDs to their corresponding subgraph configurations. */
  export type Subgraphs = Record<number, Subgraph>;

  export interface TheGraph {
    /** URL to The Graph explorer. */
    explorer: string;
    /** URL to The Graph studio. */
    studio: string;
    subgraph: {
      /** ID of the subgraph. */
      id: string;
      /** Function to generate the subgraph URL with a user-provided API key. */
      url: (apiKey: string) => string;
    };
  }

  export type VersionAirdrops = typeof versions.airdrops.v1_3;

  export type VersionFlow = typeof versions.flow.v1_0 | typeof versions.flow.v1_1;

  export type VersionLockup =
    | typeof versions.lockup.v1_0
    | typeof versions.lockup.v1_1
    | typeof versions.lockup.v1_2
    | typeof versions.lockup.v2_0;

  export type Version = VersionAirdrops | VersionFlow | VersionLockup;
}
