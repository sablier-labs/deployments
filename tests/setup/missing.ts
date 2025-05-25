import { chains } from "@src/chains";
import lockupV1_0 from "@src/releases/lockup/v1.0/manifest";
import lockupV1_1 from "@src/releases/lockup/v1.1/manifest";
import type { Sablier } from "@src/types";
import _ from "lodash";

type ContractMap = Record<string, boolean>;
type ChainMap = Record<number, ContractMap>;
type VersionMap = Partial<Record<Sablier.Version, ChainMap>>;
type ProtocolMap = Partial<Record<Sablier.Protocol, VersionMap>>;

// A map of known missing broadcasts.
export const missingBroadcasts: ProtocolMap = {
  lockup: {
    "v1.0": {
      [chains.arbitrumSepolia.id]: {
        [lockupV1_0.core.SABLIER_V2_COMPTROLLER]: true,
      },
    },
    "v1.1": {
      [chains.arbitrum.id]: {
        [lockupV1_1.core.SABLIER_V2_LOCKUP_LINEAR]: true,
        [lockupV1_1.core.SABLIER_V2_NFT_DESCRIPTOR]: true,
      },
      [chains.base.id]: {
        [lockupV1_1.core.SABLIER_V2_NFT_DESCRIPTOR]: true,
      },
      [chains.bsc.id]: {
        [lockupV1_1.core.SABLIER_V2_NFT_DESCRIPTOR]: true,
      },
      [chains.ethereum.id]: {
        [lockupV1_1.core.SABLIER_V2_LOCKUP_DYNAMIC]: true,
        [lockupV1_1.core.SABLIER_V2_NFT_DESCRIPTOR]: true,
      },
      [chains.gnosis.id]: {
        [lockupV1_1.core.SABLIER_V2_LOCKUP_LINEAR]: true,
        [lockupV1_1.core.SABLIER_V2_NFT_DESCRIPTOR]: true,
      },
      [chains.optimism.id]: {
        [lockupV1_1.core.SABLIER_V2_NFT_DESCRIPTOR]: true,
      },
      [chains.polygon.id]: {
        [lockupV1_1.core.SABLIER_V2_NFT_DESCRIPTOR]: true,
      },
      [chains.scroll.id]: {
        [lockupV1_1.core.SABLIER_V2_NFT_DESCRIPTOR]: true,
      },
      [chains.arbitrumSepolia.id]: {
        [lockupV1_1.core.SABLIER_V2_COMPTROLLER]: true,
        [lockupV1_1.core.SABLIER_V2_NFT_DESCRIPTOR]: true,
      },
      [chains.ethereumSepolia.id]: {
        [lockupV1_1.core.SABLIER_V2_NFT_DESCRIPTOR]: true,
      },
    },
  },
};

export function isKnownMissing(release: Sablier.Release, chain: Sablier.Chain, contractName: string): boolean {
  return _.get(missingBroadcasts, [release.protocol, release.version, chain.id, contractName]) ?? false;
}
