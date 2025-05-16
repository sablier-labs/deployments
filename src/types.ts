import type { Protocol, Version } from "./enums";

export namespace Sablier {
  /* -------------------------------------------------------------------------- */
  /*                                    TYPES                                   */
  /* -------------------------------------------------------------------------- */

  /** Ethereum address in the format 0x followed by 40 hex characters. */
  export type Address = `0x${string}`;

  export type AliasMap = { [contractName: string]: string };

  export type Chain = {
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
  };

  export type CompilerSettings = {
    evmVersion: string;
    optimizer: boolean;
    optimizerRuns: number;
    version: `v${number}.${number}.${number}`;
    viaIR: boolean;
  };

  /**
   * The base contract type.
   */
  export type Contract = {
    /** Optional alias for the contract, used in the Sablier Interface and the indexers. */
    alias?: string;
    /** The address of the contract. */
    address: Address;
    /** The block number at which the contract was deployed. */
    block?: number;
    /** Compiler settings for the contract. */
    compilerSettings?: CompilerSettings;
    /** URL to the explorer page for the contract. */
    explorerURL?: string;
    /** The name of the contract. */
    name: string;
  };

  export type ContractCatalogEntry = {
    alias?: string;
    name: string;
    protocol: Sablier.Protocol;
    version: Sablier.Version;
  };

  /**
   * Look up contract information by address.
   */
  export type ContractCatalog = {
    [protocol in Protocol]: {
      [chainId: number]: {
        [address: Address]: ContractCatalogEntry;
      };
    };
  };

  /** @internal */
  export type ContractMap = {
    [contractName: string]: Address | [Address, number];
  };

  export type Protocol =
    | typeof Protocol.Airdrops
    | typeof Protocol.Flow
    | typeof Protocol.Legacy
    | typeof Protocol.Lockup;

  export type Release = Release.Standard | Release.LockupV1;

  export type Repository = {
    commit: string;
    url: `https://github.com/sablier-labs/${string}`;
  };

  /** The native token on an EVM chain, used for paying gas fees. */
  export type NativeToken = {
    decimals: number;
    name: string;
    symbol: string;
  };

  /* -------------------------------------------------------------------------- */
  /*                                 NAMESPACES                                 */
  /* -------------------------------------------------------------------------- */
  export namespace Deployment {
    export type Standard = {
      chainId: number;
      contracts: Contract[];
    };

    export type LockupV1 = Standard & {
      core: Contract[];
      periphery: Contract[];
    };
  }

  export type Deployment = Deployment.Standard | Deployment.LockupV1;

  export namespace Indexer {
    type Common = {
      chainId: number;
      protocol: Protocol;
    };

    export type Envio = Common & {
      envio: string;
    };

    export type TheGraph = Common & {
      graph: TheGraph.Subgraph;
    };
  }

  export namespace Manifest {
    export type LockupV1 = {
      core: Standard;
      periphery: Standard;
    };

    export type Standard = {
      [contractKey: string]: string;
    };
  }

  export type Manifest = Manifest.LockupV1 | Manifest.Standard;

  /**
   * A collection of deployments for a given protocol and version.
   */
  export namespace Release {
    type Common = {
      /** A map of contract names to their aliases, used in the Sablier Interface and the TheGraphs. */
      aliases?: AliasMap;
      /** An array of contract names. */
      contractNames: string[];
      /** Whether this is the latest release for this protocol. */
      isLatest: boolean;
      /** The kind of release. */
      kind: "standard" | "lockupV1";
      /** The Sablier protocol released, e.g. `airdrops`. */
      protocol: Protocol;
      /** Repository information for the release. */
      repository?: Repository;
      /** The version of the release, e.g., `v1.3`. */
      version: Version;
    };

    /**
     * Lockup v1.x release used to separate Lockup contracts into core and periphery sub-categories.
     * @see https://github.com/sablier-labs/v2-periphery
     */
    export type LockupV1 = Common & {
      deployments: Deployment.LockupV1[];
      kind: "lockupV1";
      manifest: Manifest.LockupV1;
    };

    export type Standard = Common & {
      deployments: Deployment.Standard[];
      kind: "standard";
      manifest: Manifest.Standard;
    };
  }

  export namespace TheGraph {
    type SubgraphCommon = {
      /** URL to The Graph explorer. */
      explorerURL?: string;
      /** The kind of subgraph. */
      kind: "custom" | "official";
      /** URL to The Graph studio. */
      studioURL?: string;
    };

    export type SubgraphCustom = SubgraphCommon & {
      kind: "custom";
      subgraphURL: string;
      subgraph?: never;
    };

    export type SubgraphOfficial = SubgraphCommon & {
      kind: "official";
      subgraphURL?: never;
      subgraph: {
        id: string;
        /** Function to generate the TheGraph URL with a user-provided API key. */
        url: (apiKey: string) => string;
      };
    };

    export type Subgraph = SubgraphCustom | SubgraphOfficial;
  }

  export namespace Version {
    export type Airdrops = typeof Version.Airdrops.V1_1 | typeof Version.Airdrops.V1_2 | typeof Version.Airdrops.V1_3;

    export type Flow = typeof Version.Flow.V1_0 | typeof Version.Flow.V1_1;

    export type Legacy = typeof Version.Legacy.V1_0 | typeof Version.Legacy.V1_1;

    export type Lockup =
      | typeof Version.Lockup.V1_0
      | typeof Version.Lockup.V1_1
      | typeof Version.Lockup.V1_2
      | typeof Version.Lockup.V2_0;
  }

  export type Version = Version.Airdrops | Version.Flow | Version.Legacy | Version.Lockup;
}
