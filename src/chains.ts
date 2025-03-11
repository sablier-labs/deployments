import type { SablierChain } from "./types";

// ========================================================
// Mainnets
// ========================================================

export const ethereum: SablierChain = {
  explorerURL: "https://etherscan.io",
  gasToken: {
    decimals: 18,
    name: "Ether",
    symbol: "ETH",
  },
  id: 1,
  isTestnet: false,
  name: "Ethereum",
};

export const arbitrum: SablierChain = {
  explorerURL: "https://arbiscan.io",
  gasToken: {
    decimals: 18,
    name: "Ether",
    symbol: "ETH",
  },
  id: 42161,
  isTestnet: false,
  name: "Arbitrum",
};

export const avalanche: SablierChain = {
  explorerURL: "https://snowtrace.io",
  gasToken: {
    decimals: 18,
    name: "Avalanche",
    symbol: "AVAX",
  },
  id: 43114,
  isTestnet: false,
  name: "Avalanche",
};

export const base: SablierChain = {
  explorerURL: "https://basescan.org",
  gasToken: {
    decimals: 18,
    name: "Ether",
    symbol: "ETH",
  },
  id: 8453,
  isTestnet: false,
  name: "Base",
};

export const berachain: SablierChain = {
  explorerURL: "https://artio.beratrail.io",
  gasToken: {
    decimals: 18,
    name: "Bera",
    symbol: "BERA",
  },
  id: 80094,
  isTestnet: false,
  name: "Berachain",
};

export const bnbSmartChain: SablierChain = {
  explorerURL: "https://bscscan.com",
  gasToken: {
    decimals: 18,
    name: "BNB",
    symbol: "BNB",
  },
  id: 56,
  isTestnet: false,
  name: "BNB Smart Chain",
};

export const blast: SablierChain = {
  explorerURL: "https://blastscan.io",
  gasToken: {
    decimals: 18,
    name: "Ether",
    symbol: "ETH",
  },
  id: 81457,
  isTestnet: false,
  name: "Blast",
};

export const chiliz: SablierChain = {
  explorerURL: "https://scan.chiliz.com",
  gasToken: {
    decimals: 18,
    name: "Chiliz",
    symbol: "CHZ",
  },
  id: 88888,
  isTestnet: false,
  name: "Chiliz Chain",
};

export const gnosis: SablierChain = {
  explorerURL: "https://gnosisscan.io",
  gasToken: {
    decimals: 18,
    name: "xDAI",
    symbol: "xDAI",
  },
  id: 100,
  isTestnet: false,
  name: "Gnosis",
};

export const iotex: SablierChain = {
  explorerURL: "https://iotexscan.io",
  gasToken: {
    decimals: 18,
    name: "IoTeX",
    symbol: "IOTX",
  },
  id: 4690,
  isTestnet: false,
  name: "IoTeX",
};

export const lightlink: SablierChain = {
  explorerURL: "https://phoenix.lightlink.io",
  gasToken: {
    decimals: 18,
    name: "Ether",
    symbol: "ETH",
  },
  id: 1890,
  isTestnet: false,
  name: "Lightlink",
};

export const linea: SablierChain = {
  explorerURL: "https://lineascan.build",
  gasToken: {
    decimals: 18,
    name: "Ether",
    symbol: "ETH",
  },
  id: 59144,
  isTestnet: false,
  name: "Linea",
};

export const mode: SablierChain = {
  explorerURL: "https://explorer.mode.network",
  gasToken: {
    decimals: 18,
    name: "Ether",
    symbol: "ETH",
  },
  id: 34443,
  isTestnet: false,
  name: "Mode",
};

export const morph: SablierChain = {
  explorerURL: "https://explorer.morphl2.io",
  gasToken: {
    decimals: 18,
    name: "Ether",
    symbol: "ETH",
  },
  id: 2818,
  isTestnet: false,
  name: "Morph",
};

export const optimism: SablierChain = {
  explorerURL: "https://optimistic.etherscan.io",
  gasToken: {
    decimals: 18,
    name: "Ether",
    symbol: "ETH",
  },
  id: 10,
  isTestnet: false,
  name: "Optimism",
};

export const polygon: SablierChain = {
  explorerURL: "https://polygonscan.com",
  gasToken: {
    decimals: 18,
    name: "Polygon",
    symbol: "POL",
  },
  id: 137,
  isTestnet: false,
  name: "Polygon",
};

export const scroll: SablierChain = {
  explorerURL: "https://scrollscan.com",
  gasToken: {
    decimals: 18,
    name: "Ether",
    symbol: "ETH",
  },
  id: 534352,
  isTestnet: false,
  name: "Scroll",
};

export const superseed: SablierChain = {
  explorerURL: "https://superseedscan.com",
  gasToken: {
    decimals: 18,
    name: "Ether",
    symbol: "ETH",
  },
  id: 5330,
  isTestnet: false,
  name: "Superseed",
};

export const tangle: SablierChain = {
  explorerURL: "https://explorer.tangle.tools",
  gasToken: {
    decimals: 18,
    name: "Tangle",
    symbol: "TNT",
  },
  id: 5845,
  isTestnet: false,
  name: "Tangle",
};

export const xdc: SablierChain = {
  explorerURL: "https://xdcscan.io",
  gasToken: {
    decimals: 18,
    name: "XDC",
    symbol: "XDC",
  },
  id: 50,
  isTestnet: false,
  name: "XDC",
};

export const zksyncEra: SablierChain = {
  explorerURL: "https://explorer.zksync.io",
  gasToken: {
    decimals: 18,
    name: "Ether",
    symbol: "ETH",
  },
  id: 324,
  isTestnet: false,
  name: "zkSync Era",
};

export const abstract: SablierChain = {
  explorerURL: "https://explorer.abstract.money",
  gasToken: {
    decimals: 18,
    name: "Ether",
    symbol: "ETH",
  },
  id: 2741,
  isTestnet: false,
  name: "Abstract",
};

// ========================================================
// Testnets
// ========================================================

export const ethereumSepolia: SablierChain = {
  explorerURL: "https://sepolia.etherscan.io",
  gasToken: {
    decimals: 18,
    name: "Ether",
    symbol: "ETH",
  },
  id: 11155111,
  isTestnet: true,
  name: "Ethereum Sepolia",
};

export const arbitrumSepolia: SablierChain = {
  explorerURL: "https://sepolia.arbiscan.io",
  gasToken: {
    decimals: 18,
    name: "Ether",
    symbol: "ETH",
  },
  id: 421614,
  isTestnet: true,
  name: "Arbitrum Sepolia",
};

export const baseSepolia: SablierChain = {
  explorerURL: "https://sepolia.basescan.org",
  gasToken: {
    decimals: 18,
    name: "Ether",
    symbol: "ETH",
  },
  id: 84532,
  isTestnet: true,
  name: "Base Sepolia",
};

export const optimismSepolia: SablierChain = {
  explorerURL: "https://sepolia-optimism.etherscan.io",
  gasToken: {
    decimals: 18,
    name: "Ether",
    symbol: "ETH",
  },
  id: 11155420,
  isTestnet: true,
  name: "Optimism Sepolia",
};

// ========================================================
// Chain Collections
// ========================================================

export const mainnets = {
  ethereum,
  arbitrum,
  avalanche,
  base,
  berachain,
  bnbSmartChain,
  blast,
  chiliz,
  gnosis,
  iotex,
  lightlink,
  linea,
  mode,
  morph,
  optimism,
  polygon,
  scroll,
  superseed,
  tangle,
  xdc,
  zksyncEra,
  abstract,
};

export const testnets = {
  arbitrumSepolia,
  baseSepolia,
  ethereumSepolia,
  optimismSepolia,
};

export const chains = {
  ...mainnets,
  ...testnets,
};
