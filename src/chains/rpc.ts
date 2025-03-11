import { ChainId } from "./ids";

type RPCGenerator = (apiKey: string) => string;

export function getAlchemyRPC(chainId: number): RPCGenerator | undefined {
  switch (chainId) {
    case ChainId.ARBITRUM_ONE:
      return (apiKey) => `https://arb-mainnet.g.alchemy.com/v2/${apiKey}`;
    case ChainId.AVALANCHE:
      return (apiKey) => `https://avalanche-mainnet.g.alchemy.com/v2/${apiKey}`;
    case ChainId.BASE:
      return (apiKey) => `https://base-mainnet.g.alchemy.com/v2/${apiKey}`;
    case ChainId.BSC:
      return (apiKey) => `https://bsc-mainnet.g.alchemy.com/v2/${apiKey}`;
    case ChainId.ETHEREUM:
      return (apiKey) => `https://eth-mainnet.g.alchemy.com/v2/${apiKey}`;
    case ChainId.LINEA:
      return (apiKey) => `https://linea-mainnet.g.alchemy.com/v2/${apiKey}`;
    case ChainId.OP_MAINNET:
      return (apiKey) => `https://opt-mainnet.g.alchemy.com/v2/${apiKey}`;
    case ChainId.POLYGON:
      return (apiKey) => `https://polygon-mainnet.g.alchemy.com/v2/${apiKey}`;
    case ChainId.SCROLL:
      return (apiKey) => `https://scroll-mainnet.g.alchemy.com/v2/${apiKey}`;
    case ChainId.ZK_SYNC_ERA:
      return (apiKey) => `https://zksync-mainnet.g.alchemy.com/v2/${apiKey}`;
    default:
      return undefined;
  }
}

export function getInfuraRPC(chainId: number): RPCGenerator | undefined {
  switch (chainId) {
    case ChainId.ARBITRUM_ONE:
      return (apiKey) => `https://arbitrum-mainnet.infura.io/v3/${apiKey}`;
    case ChainId.AVALANCHE:
      return (apiKey) => `https://avalanche-mainnet.infura.io/v3/${apiKey}`;
    case ChainId.BSC:
      return (apiKey) => `https://bsc-mainnet.infura.io/v3/${apiKey}`;
    case ChainId.ETHEREUM:
      return (apiKey) => `https://mainnet.infura.io/v3/${apiKey}`;
    case ChainId.LINEA:
      return (apiKey) => `https://linea-mainnet.infura.io/v3/${apiKey}`;
    case ChainId.OP_MAINNET:
      return (apiKey) => `https://optimism-mainnet.infura.io/v3/${apiKey}`;
    case ChainId.POLYGON:
      return (apiKey) => `https://polygon-mainnet.infura.io/v3/${apiKey}`;
    case ChainId.SCROLL:
      return (apiKey) => `https://scroll-mainnet.infura.io/v3/${apiKey}`;
    case ChainId.ZK_SYNC_ERA:
      return (apiKey) => `https://zksync-mainnet.infura.io/v3/${apiKey}`;
    default:
      return undefined;
  }
}
