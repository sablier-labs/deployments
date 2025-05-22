import { ChainId } from "@src/chains/ids";
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
      [ChainId.ARBITRUM_SEPOLIA]: {
        [lockupV1_0.core.SABLIER_V2_COMPTROLLER]: true,
      },
    },
    "v1.1": {
      [ChainId.ARBITRUM_ONE]: {
        [lockupV1_1.core.SABLIER_V2_LOCKUP_LINEAR]: true,
        [lockupV1_1.core.SABLIER_V2_NFT_DESCRIPTOR]: true,
      },
      [ChainId.BASE]: {
        [lockupV1_1.core.SABLIER_V2_NFT_DESCRIPTOR]: true,
      },
      [ChainId.BSC]: {
        [lockupV1_1.core.SABLIER_V2_NFT_DESCRIPTOR]: true,
      },
      [ChainId.ETHEREUM]: {
        [lockupV1_1.core.SABLIER_V2_LOCKUP_DYNAMIC]: true,
        [lockupV1_1.core.SABLIER_V2_NFT_DESCRIPTOR]: true,
      },
      [ChainId.GNOSIS]: {
        [lockupV1_1.core.SABLIER_V2_LOCKUP_LINEAR]: true,
        [lockupV1_1.core.SABLIER_V2_NFT_DESCRIPTOR]: true,
      },
      [ChainId.OP_MAINNET]: {
        [lockupV1_1.core.SABLIER_V2_NFT_DESCRIPTOR]: true,
      },
      [ChainId.POLYGON]: {
        [lockupV1_1.core.SABLIER_V2_NFT_DESCRIPTOR]: true,
      },
      [ChainId.SCROLL]: {
        [lockupV1_1.core.SABLIER_V2_NFT_DESCRIPTOR]: true,
      },
      [ChainId.ARBITRUM_SEPOLIA]: {
        [lockupV1_1.core.SABLIER_V2_COMPTROLLER]: true,
        [lockupV1_1.core.SABLIER_V2_NFT_DESCRIPTOR]: true,
      },
      [ChainId.ETHEREUM_SEPOLIA]: {
        [lockupV1_1.core.SABLIER_V2_NFT_DESCRIPTOR]: true,
      },
    },
  },
};

export function isKnownMissing(release: Sablier.Release, chain: Sablier.Chain, contractName: string): boolean {
  return _.get(missingBroadcasts, [release.protocol, release.version, chain.id, contractName]) ?? false;
}
