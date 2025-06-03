import { chains } from "@src/chains";
import { ENVIO_BASE_URL } from "./constants";

export const config = {
  envio: {
    endpoints: {
      airdrops: `${ENVIO_BASE_URL}/508d217/v1/graphql`,
      flow: `${ENVIO_BASE_URL}/3b4ea6b/v1/graphql`,
      lockup: `${ENVIO_BASE_URL}/53b7e25/v1/graphql`,
    },
    /** @dev We assume that Envio is available for all protocols, never just a few. */
    supportedChains: [
      /* -------------------------------------------------------------------------- */
      /*                                  MAINNETS                                  */
      /* -------------------------------------------------------------------------- */
      chains.arbitrum.id,
      chains.avalanche.id,
      chains.base.id,
      chains.bsc.id,
      chains.chiliz.id,
      chains.ethereum.id,
      chains.gnosis.id,
      chains.linea.id,
      chains.mode.id,
      chains.morph.id,
      chains.optimism.id,
      chains.polygon.id,
      chains.scroll.id,
      chains.superseed.id,
      chains.tangle.id,
      chains.zksync.id,
      /* -------------------------------------------------------------------------- */
      /*                                  TESTNETS                                  */
      /* -------------------------------------------------------------------------- */
      chains.arbitrumSepolia.id,
      chains.baseSepolia.id,
      chains.ethereumSepolia.id,
      chains.optimismSepolia.id,
    ],
  },
  graph: {
    custom: {
      [chains.lightlink.id]: "https://graph.phoenix.lightlink.io/query/subgraphs/name/lightlink",
      [chains.xdc.id]: "https://graphql.xinfin.network/subgraphs/name/xdc",
    },
  },
};

/** @internal */
export type EnvioProtocol = keyof typeof config.envio.endpoints;

/** @internal */
export type TheGraphCustomChainId = keyof typeof config.graph.custom;
