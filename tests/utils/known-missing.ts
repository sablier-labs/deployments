import { ChainId } from "@src/chains/ids";
import { names as lockupNamesV1_0 } from "@src/releases/lockup/v1.0/manifest";
import { names as lockupNamesV1_1 } from "@src/releases/lockup/v1.1/manifest";
import type { Sablier } from "@src/types";
import { versions } from "@src/versions";
import _ from "lodash";

type ContractMap = Record<string, boolean>;
type ChainMap = Record<number, ContractMap>;
type VersionMap = Partial<Record<Sablier.Version, ChainMap>>;
type ProtocolMap = Partial<Record<Sablier.Protocol, VersionMap>>;

export const knownMissing: ProtocolMap = {
  lockup: {
    [versions.lockup.v1_0]: {
      [ChainId.ARBITRUM_SEPOLIA]: {
        [lockupNamesV1_0.core.SABLIER_V2_COMPTROLLER]: true,
      },
    },
    [versions.lockup.v1_1]: {
      [ChainId.ARBITRUM_ONE]: {
        [lockupNamesV1_1.core.SABLIER_V2_LOCKUP_LINEAR]: true,
        [lockupNamesV1_1.core.SABLIER_V2_NFT_DESCRIPTOR]: true,
      },
      [ChainId.BASE]: {
        [lockupNamesV1_1.core.SABLIER_V2_NFT_DESCRIPTOR]: true,
      },
      [ChainId.BSC]: {
        [lockupNamesV1_1.core.SABLIER_V2_NFT_DESCRIPTOR]: true,
      },
      [ChainId.ETHEREUM]: {
        [lockupNamesV1_1.core.SABLIER_V2_LOCKUP_DYNAMIC]: true,
        [lockupNamesV1_1.core.SABLIER_V2_NFT_DESCRIPTOR]: true,
      },
      [ChainId.GNOSIS]: {
        [lockupNamesV1_1.core.SABLIER_V2_LOCKUP_LINEAR]: true,
        [lockupNamesV1_1.core.SABLIER_V2_NFT_DESCRIPTOR]: true,
      },
      [ChainId.OP_MAINNET]: {
        [lockupNamesV1_1.core.SABLIER_V2_NFT_DESCRIPTOR]: true,
      },
      [ChainId.POLYGON]: {
        [lockupNamesV1_1.core.SABLIER_V2_NFT_DESCRIPTOR]: true,
      },
      [ChainId.SCROLL]: {
        [lockupNamesV1_1.core.SABLIER_V2_NFT_DESCRIPTOR]: true,
      },
      [ChainId.ARBITRUM_SEPOLIA]: {
        [lockupNamesV1_1.core.SABLIER_V2_COMPTROLLER]: true,
        [lockupNamesV1_1.core.SABLIER_V2_NFT_DESCRIPTOR]: true,
      },
      [ChainId.ETHEREUM_SEPOLIA]: {
        [lockupNamesV1_1.core.SABLIER_V2_NFT_DESCRIPTOR]: true,
      },
    },
  },
};

export function isKnownMissing(release: Sablier.Release, chain: Sablier.Chain, contractName: string): boolean {
  return _.get(knownMissing, [release.protocol, release.version, chain.id, contractName]) ?? false;
}
