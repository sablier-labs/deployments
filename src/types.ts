import type versions from "./versions";

export declare namespace Sablier {
  /**
   * @description Ethereum address in the format 0x followed by 40 hexadecimal characters.
   */
  export type Address = `0x${string}`;

  export type AliasMap = Record<string, string>;

  /**
   * @description The native token on an EVM chain, used for paying gas fees.
   */
  export type NativeToken = {
    decimals: number;
    name: string;
    symbol: string;
  };

  export type Chain = {
    /** @description URL of the blockchain explorer. */
    explorerURL: string;
    /** @description Chain ID. */
    id: number;
    /** @description Whether this chain is supported by the Sablier Interface at https://app.sablier.com. */
    isSupportedByUI: boolean;
    /** @description Whether this is a testnet network. */
    isTestnet: boolean;
    /** @description Whether this is a zkVM like zkSync. */
    isZK: boolean;
    /** @description Used in deployment files to identify the chain. */
    key: string;
    /** @description Native token information for this chain. */
    nativeToken: NativeToken;
    /** @description Name of the chain. */
    name: string;
    /** @description JSON-RPC configuration. */
    rpc: {
      /** @description Alchemy RPC URL generator. */
      alchemy?: (apiKey: string) => string;
      /** @description Infura RPC URL generator. */
      infura?: (apiKey: string) => string;
      /** @description Public RPC URL; might be unreliable for production use. */
      public: string;
    };
  };

  export type CompilerSettings = {
    evmVersion: string;
    optimizer: boolean;
    optimizerRuns: number;
    version: `v${number}.${number}.${number}`;
    viaIR: boolean;
  };

  /**
   * @description Can be either a contract or a public library.
   */
  export type Contract = {
    /** @description Optional alias for the contract, used in the Sablier Interface and the subgraphs. */
    alias?: string;
    /** @description The address of the contract. */
    address: Address;
    /** @description Compiler settings for the contract. */
    compilerSettings?: CompilerSettings;
    /** @description URL to the explorer page for the contract. */
    explorerURL?: string;
    /** @description The name of the contract. */
    name: string;
    /** @description Repository information for the contract. */
    repository?: Repository;
  };

  export type ContractMap = Record<string, Address>;

  export type Deployment = {
    chainId: number;
    contracts: Contract[];
    indexers: Indexers;
  };

  export type DeploymentLockupV1 = Deployment & {
    core: Contract[];
    periphery: Contract[];
  };

  export type Indexers = {
    envio?: string;
    thegraph?: TheGraph;
  };

  export type ManifestLockupV1 = {
    core: string[];
    periphery: string[];
  };

  export type Manifest = string[] | ManifestLockupV1;

  /**
   * @description Supported Sablier protocol types.
   */
  export type Protocol = "airdrops" | "flow" | "legacy" | "lockup";

  /**
   * @description Base interface for all releases
   */
  export type ReleaseBase = {
    /** @description A map of contract names to their aliases, used in the Sablier Interface and the subgraphs. */
    aliases?: { [contractName: string]: string };
    /** @description Whether this is the latest release for this protocol. */
    isLatest: boolean;
    /** @description The Sablier protocol released, e.g. `airdrops`. */
    protocol: Protocol;
    /** @description The version of the release, e.g., `v1.3`. */
    version: Version;
  };

  /**
   * @description A Lockup v1.x release is a historical release that used to separate Lockup contracts into
   * core and periphery sub-categories.
   * @see https://github.com/sablier-labs/v2-periphery
   */
  export type ReleaseLockupV1 = ReleaseBase & {
    readonly kind: "lockupV1";
    deployments: DeploymentLockupV1[];
    manifest: ManifestLockupV1;
  };

  /**
   * @description A standard release is a collection of deployments for a given protocol and version.
   * This is the default release type for most protocols.
   */
  export type ReleaseStandard = ReleaseBase & {
    readonly kind: "standard";
    deployments: Deployment[];
    manifest: Manifest;
  };

  /**
   * @description Union type representing all possible release types
   */
  export type Release = ReleaseStandard | ReleaseLockupV1;

  export type Repository = {
    commit: string;
    url: `https://github.com/sablier-labs/${string}`;
  };

  export type Subgraph = {
    id: string;
    name: string;
  };

  /**
   * @description Map of chain IDs to their corresponding subgraph configurations.
   */
  export type Subgraphs = Record<number, Subgraph>;

  export type TheGraph = {
    /** @description URL to The Graph explorer. */
    explorer: string;
    /** @description URL to The Graph studio. */
    studio: string;
    subgraph: {
      /** @description ID of the subgraph. */
      id: string;
      /** @description Function to generate the subgraph URL with a user-provided API key. */
      url: (apiKey: string) => string;
    };
  };

  export type VersionAirdrops = typeof versions.airdrops.v1_3;

  export type VersionFlow = typeof versions.flow.v1_0 | typeof versions.flow.v1_1;

  export type VersionLegacy = typeof versions.legacy.v1_0 | typeof versions.legacy.v1_1;

  export type VersionLockup =
    | typeof versions.lockup.v1_0
    | typeof versions.lockup.v1_1
    | typeof versions.lockup.v1_2
    | typeof versions.lockup.v2_0;

  export type Version = VersionAirdrops | VersionFlow | VersionLegacy | VersionLockup;
}
