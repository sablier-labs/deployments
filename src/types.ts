export declare namespace Sablier {
  /** Ethereum address in the format 0x followed by 40 hexadecimal characters */
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

  /**
   * A map of all contracts and libraries shipped in the release.
   * The value is the contract name.
   */
  export interface ManifestStandard {
    [key: string]: string;
  }

  /**
   * A map of all contracts and libraries shipped in the release, with an extra level of nesting.
   * Needed for Lockup v1.x releases, which have "core" and "periphery" categories.
   */
  export interface ManifestLockupV1 {
    core: ManifestStandard;
    periphery: ManifestStandard;
  }

  export type Manifest = ManifestStandard | ManifestLockupV1;

  /** Supported Sablier protocol types */
  export type Protocol = "airdrops" | "flow" | "lockup";

  /**
   * Base interface for all releases
   */
  export interface ReleaseBase {
    /** The Sablier protocol released, e.g. `airdrops`. */
    protocol: Protocol;
    /** The version of the release, e.g., `v1.0.0`. */
    version: Version;
  }

  /**
   * A Lockup v1.x release is a specialized release type that separates contracts into
   * core and periphery categories.
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

  export interface Subgraph {
    id: string;
    name: string;
  }

  /** Map of chain IDs to their corresponding subgraph configurations */
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

  /** Version string in the format vX.Y.Z where X, Y, and Z are numbers */
  export type Version = `v${number}.${number}.${number}`;
}

/** Type guard to check if a manifest is a Lockup v1.x manifest */
export function isLockupV1Manifest(manifest: Sablier.Manifest): manifest is Sablier.ManifestLockupV1 {
  return "core" in manifest && "periphery" in manifest;
}

/** Type guard to check if a release is a Lockup v1.x release */
export function isLockupV1Release(release: Sablier.Release): release is Sablier.ReleaseLockupV1 {
  return "core" in release.manifest && "periphery" in release.manifest;
}
