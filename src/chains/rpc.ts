import * as viem from "viem/chains";

type RPCGenerator = (apiKey: string) => string;

const alchemyRPCs: Record<number, RPCGenerator> = {
  [viem.arbitrum.id]: (apiKey) => `https://arb-mainnet.g.alchemy.com/v2/${apiKey}`,
  [viem.avalanche.id]: (apiKey) => `https://avalanche-mainnet.g.alchemy.com/v2/${apiKey}`,
  [viem.base.id]: (apiKey) => `https://base-mainnet.g.alchemy.com/v2/${apiKey}`,
  [viem.bsc.id]: (apiKey) => `https://bsc-mainnet.g.alchemy.com/v2/${apiKey}`,
  [viem.mainnet.id]: (apiKey) => `https://eth-mainnet.g.alchemy.com/v2/${apiKey}`,
  [viem.linea.id]: (apiKey) => `https://linea-mainnet.g.alchemy.com/v2/${apiKey}`,
  [viem.optimism.id]: (apiKey) => `https://opt-mainnet.g.alchemy.com/v2/${apiKey}`,
  [viem.polygon.id]: (apiKey) => `https://polygon-mainnet.g.alchemy.com/v2/${apiKey}`,
  [viem.scroll.id]: (apiKey) => `https://scroll-mainnet.g.alchemy.com/v2/${apiKey}`,
  [viem.zksync.id]: (apiKey) => `https://zksync-mainnet.g.alchemy.com/v2/${apiKey}`,
};

const infuraRPCs: Record<number, RPCGenerator> = {
  [viem.arbitrum.id]: (apiKey) => `https://arbitrum-mainnet.infura.io/v3/${apiKey}`,
  [viem.avalanche.id]: (apiKey) => `https://avalanche-mainnet.infura.io/v3/${apiKey}`,
  [viem.bsc.id]: (apiKey) => `https://bsc-mainnet.infura.io/v3/${apiKey}`,
  [viem.mainnet.id]: (apiKey) => `https://mainnet.infura.io/v3/${apiKey}`,
  [viem.linea.id]: (apiKey) => `https://linea-mainnet.infura.io/v3/${apiKey}`,
  [viem.optimism.id]: (apiKey) => `https://optimism-mainnet.infura.io/v3/${apiKey}`,
  [viem.polygon.id]: (apiKey) => `https://polygon-mainnet.infura.io/v3/${apiKey}`,
  [viem.scroll.id]: (apiKey) => `https://scroll-mainnet.infura.io/v3/${apiKey}`,
  [viem.zksync.id]: (apiKey) => `https://zksync-mainnet.infura.io/v3/${apiKey}`,
};

export function getAlchemyRPC(chainId: number): RPCGenerator | undefined {
  const generator = alchemyRPCs[chainId];
  if (!generator) {
    console.debug(`No Alchemy RPC URL found for chain ${chainId}`);
  }
  return generator;
}

export function getInfuraRPC(chainId: number): RPCGenerator | undefined {
  const generator = infuraRPCs[chainId];
  if (!generator) {
    console.debug(`No Infura RPC URL found for chain ${chainId}`);
  }
  return generator;
}
