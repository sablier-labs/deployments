import * as mainnets from "./mainnets";

type RPCGenerator = (apiKey: string) => string;

export const alchemyRPCs: Record<number, RPCGenerator> = {
  [mainnets.abstract.id]: (apiKey) => `https://abstract-mainnet.g.alchemy.com/v2/${apiKey}`,
  [mainnets.arbitrum.id]: (apiKey) => `https://arb-mainnet.g.alchemy.com/v2/${apiKey}`,
  [mainnets.avalanche.id]: (apiKey) => `https://avax-mainnet.g.alchemy.com/v2/${apiKey}`,
  [mainnets.base.id]: (apiKey) => `https://base-mainnet.g.alchemy.com/v2/${apiKey}`,
  [mainnets.berachain.id]: (apiKey) => `https://berachain-mainnet.g.alchemy.com/v2/${apiKey}`,
  [mainnets.blast.id]: (apiKey) => `https://blast-mainnet.g.alchemy.com/v2/${apiKey}`,
  [mainnets.bsc.id]: (apiKey) => `https://bnb-mainnet.g.alchemy.com/v2/${apiKey}`,
  [mainnets.ethereum.id]: (apiKey) => `https://eth-mainnet.g.alchemy.com/v2/${apiKey}`,
  [mainnets.gnosis.id]: (apiKey) => `https://gnosis-mainnet.g.alchemy.com/v2/${apiKey}`,
  [mainnets.linea.id]: (apiKey) => `https://linea-mainnet.g.alchemy.com/v2/${apiKey}`,
  [mainnets.optimism.id]: (apiKey) => `https://opt-mainnet.g.alchemy.com/v2/${apiKey}`,
  [mainnets.polygon.id]: (apiKey) => `https://polygon-mainnet.g.alchemy.com/v2/${apiKey}`,
  [mainnets.ronin.id]: (apiKey) => `https://ronin-mainnet.g.alchemy.com/v2/${apiKey}`,
  [mainnets.scroll.id]: (apiKey) => `https://scroll-mainnet.g.alchemy.com/v2/${apiKey}`,
  [mainnets.sei.id]: (apiKey) => `https://sei-mainnet.g.alchemy.com/v2/${apiKey}`,
  [mainnets.superseed.id]: (apiKey) => `https://superseed-mainnet.g.alchemy.com/v2/${apiKey}`,
  [mainnets.unichain.id]: (apiKey) => `https://unichain-mainnet.g.alchemy.com/v2/${apiKey}`,
  [mainnets.zksync.id]: (apiKey) => `https://zksync-mainnet.g.alchemy.com/v2/${apiKey}`,
};

export const infuraRPCs: Record<number, RPCGenerator> = {
  [mainnets.arbitrum.id]: (apiKey) => `https://arbitrum-mainnet.infura.io/v3/${apiKey}`,
  [mainnets.avalanche.id]: (apiKey) => `https://avalanche-mainnet.infura.io/v3/${apiKey}`,
  [mainnets.base.id]: (apiKey) => `https://base-mainnet.infura.io/v3/${apiKey}`,
  [mainnets.blast.id]: (apiKey) => `https://blast-mainnet.infura.io/v3/${apiKey}`,
  [mainnets.bsc.id]: (apiKey) => `https://bsc-mainnet.infura.io/v3/${apiKey}`,
  [mainnets.ethereum.id]: (apiKey) => `https://mainnet.infura.io/v3/${apiKey}`,
  [mainnets.linea.id]: (apiKey) => `https://linea-mainnet.infura.io/v3/${apiKey}`,
  [mainnets.optimism.id]: (apiKey) => `https://optimism-mainnet.infura.io/v3/${apiKey}`,
  [mainnets.polygon.id]: (apiKey) => `https://polygon-mainnet.infura.io/v3/${apiKey}`,
  [mainnets.scroll.id]: (apiKey) => `https://scroll-mainnet.infura.io/v3/${apiKey}`,
  [mainnets.zksync.id]: (apiKey) => `https://zksync-mainnet.infura.io/v3/${apiKey}`,
};
