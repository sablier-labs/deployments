/**
 * @see https://docs.sablier.com/api/overview
 */
import { ChainId } from "@src/chains/ids";
import type { Sablier } from "@src/types";

const ENVIO_BASE_URL = "https://indexer.hyperindex.xyz";

const envio = {
  endpoints: {
    airdrops: `${ENVIO_BASE_URL}/508d217/v1/graphql`,
    flow: `${ENVIO_BASE_URL}/3b4ea6b/v1/graphql`,
    lockup: `${ENVIO_BASE_URL}/53b7e25/v1/graphql`,
  },
  /**
   * Chains not supported by Envio. Monitor their docs for updates.
   * @see https://docs.envio.dev/docs/HyperSync/hypersync-supported-networks
   * @see https://github.com/enviodev/docs/issues/619
   */
  unsupportedChains: {
    [ChainId.CORE_DAO]: true,
    [ChainId.FORM]: true,
    [ChainId.IOTEX]: true,
    [ChainId.LIGHTLINK]: true,
    [ChainId.SEI]: true,
    [ChainId.SUPERSEED]: true,
    [ChainId.TAIKO]: true,
    [ChainId.TANGLE]: true,
    [ChainId.ULTRA]: true,
  },
};

/** @internal */
export function getEnvioEndpoint(protocol: Sablier.Protocol, chainId: number): string | undefined {
  if (protocol === "legacy" || chainId in envio.unsupportedChains) {
    return undefined;
  }
  return envio.endpoints[protocol];
}
