import { ChainId } from "@src/chains/ids";
import type { Sablier } from "@src/types";
import { ENVIO_BASE_URL } from "./constants";

type Endpoints = Partial<Record<Sablier.Protocol, string>>;
type SubgraphBaseURLs = { [chainId: number]: string };

const config = {
  envio: {
    endpoints: {
      airdrops: `${ENVIO_BASE_URL}/508d217/v1/graphql`,
      flow: `${ENVIO_BASE_URL}/3b4ea6b/v1/graphql`,
      lockup: `${ENVIO_BASE_URL}/53b7e25/v1/graphql`,
    } as Endpoints,
    /** @dev We assume that Envio is available for all protocols, never just a few. */
    supportedChains: [
      /* Mainnets */
      ChainId.ARBITRUM_ONE,
      ChainId.AVALANCHE,
      ChainId.BASE,
      ChainId.BSC,
      ChainId.CHILIZ,
      ChainId.ETHEREUM,
      ChainId.GNOSIS,
      ChainId.LINEA,
      ChainId.MODE,
      ChainId.MORPH,
      ChainId.OP_MAINNET,
      ChainId.POLYGON,
      ChainId.SCROLL,
      ChainId.SUPERSEED,
      ChainId.TANGLE,
      ChainId.ZK_SYNC_ERA,
      /* Testnets */
      ChainId.ARBITRUM_SEPOLIA,
      ChainId.BASE_SEPOLIA,
      ChainId.ETHEREUM_SEPOLIA,
      ChainId.OP_SEPOLIA,
    ],
  },
  subgraph: {
    baseURLs: {
      [ChainId.LIGHTLINK]: "https://graph.phoenix.lightlink.io/query/subgraphs/name/lightlink",
      [ChainId.ULTRA]: "https://graph.evm.ultra.io/subgraphs/name/sablier",
      [ChainId.XDC]: "https://graphql.xinfin.network/subgraphs/name/xdc",
    } as SubgraphBaseURLs,
  },
};

export default config;
