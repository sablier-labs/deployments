import type Version from "./version";

export declare namespace Sablier {
  /** @description Ethereum address in the format 0x followed by 40 hex characters. */
  export type Address = `0x${string}`;

  export type AliasMap = { [contractName: string]: string };

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
    /** @description Optional alias for the contract, used in the Sablier Interface and the indexers. */
    alias?: string;
    /** @description The address of the contract. */
    address: Address;
    /** @description The block number at which the contract was deployed. */
    block?: number;
    /** @description Compiler settings for the contract. */
    compilerSettings?: CompilerSettings;
    /** @description URL to the explorer page for the contract. */
    explorerURL?: string;
    /** @description The name of the contract. */
    name: string;
  };

  export type ContractMap = Record<string, Address | [Address, number]>;

  export type Deployment = {
    chainId: number;
    contracts: Contract[];
  };

  export type DeploymentLockupV1 = Deployment & {
    core: Contract[];
    periphery: Contract[];
  };

  export type Protocol = "airdrops" | "flow" | "legacy" | "lockup";

  export type Release = Release.Standard | Release.LockupV1;

  export type Repository = {
    commit: string;
    url: `https://github.com/sablier-labs/${string}`;
  };

  /** @description The native token on an EVM chain, used for paying gas fees. */
  export type NativeToken = {
    decimals: number;
    name: string;
    symbol: string;
  };

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

  export type Indexer = Indexer.Envio | Indexer.TheGraph;

  export namespace Manifest {
    export type LockupV1 = {
      core: Standard;
      periphery: Standard;
    };

    export type Standard = {
      [contractKey: string]: string;
    };
  }

  export type Manifest = Manifest.Standard | Manifest.LockupV1;

  /**
   * @description A collection of deployments for a given protocol and version.
   */
  export namespace Release {
    type Common = {
      /** @description A map of contract names to their aliases, used in the Sablier Interface and the TheGraphs. */
      aliases?: AliasMap;
      /** @description An array of contract names. */
      contractNames: string[];
      /** @description Whether this is the latest release for this protocol. */
      isLatest: boolean;
      /** @description The kind of release. */
      kind: "standard" | "lockupV1";
      /** @description The Sablier protocol released, e.g. `airdrops`. */
      protocol: Protocol;
      /** @description Repository information for the release. */
      repository?: Repository;
      /** @description The version of the release, e.g., `v1.3`. */
      version: Version;
    };

    /**
     * @description Lockup v1.x release used to separate Lockup contracts into core and periphery sub-categories.
     * @see https://github.com/sablier-labs/v2-periphery
     */
    export type LockupV1 = Common & {
      deployments: DeploymentLockupV1[];
      kind: "lockupV1";
      manifest: Manifest.LockupV1;
    };

    export type Standard = Common & {
      deployments: Deployment[];
      kind: "standard";
      manifest: Manifest.Standard;
    };
  }

  export namespace TheGraph {
    type SubgraphCommon = {
      /** @description URL to The Graph explorer. */
      explorerURL?: string;
      /** @description The kind of subgraph. */
      kind: "custom" | "official";
      /** @description URL to The Graph studio. */
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
        /** @description Function to generate the TheGraph URL with a user-provided API key. */
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
