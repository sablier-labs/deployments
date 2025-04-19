import chains from "../chains";
import { BaseURL, THEGRAPH_ORG_ID } from "../constants";
import { envioUnsupported } from "../indexers";
import type { SablierContract, SablierDeployment, TheGraph } from "../types";

// The same API endpoint for all chains supported by Envio
const ENVIO_ENDPOINT = `${BaseURL.ENVIO}/3b4ea6b/v1/graphql`;

// The same subgraph are used for all Flow releases
const FLOW_SUBGRAPHS: Record<number, { id: string; name: string }> = {
  // Mainnets
  [chains.ethereum.id]: { id: "ECxBJhKceBGaVvK6vqmK3VQAncKwPeAQutEb8TeiUiod", name: "sablier-flow-ethereum" },
  [chains.abstract.id]: { id: "Gq3e1gihMoSynURwGXQnPoKGVZzdsyomdrMH934vQHuG", name: "sablier-flow-abstract" },
  [chains.arbitrum.id]: { id: "C3kBBUVtW2rxqGpAgSgEuSaT49izkH6Q8UibRt7XFTyW", name: "sablier-flow-arbitrum" },
  [chains.avalanche.id]: { id: "6PAizjTALVqLLB7Ycq6XnpTeck8Z8QUpDFnVznMnisUh", name: "sablier-flow-avalanche" },
  [chains.base.id]: { id: "4XSxXh8ZgkzaA35nrbQG9Ry3FYz3ZFD8QBdWwVg5pF9W", name: "sablier-flow-base" },
  [chains.berachain.id]: { id: "J87eaBLfTe7kKWgUGqe5TxntNCzA4pyWmqJowMddehuh", name: "sablier-flow-berachain" },
  [chains.blast.id]: { id: "8joiC9LpUbSV6eGRr3RWXDArM8p9Q65FKiFekAakkyia", name: "sablier-flow-blast" },
  [chains.bsc.id]: { id: "2vU8KF4yWh3vvFjtg7MrRXMnYF3hPX2T3cvVBdaiXhNb", name: "sablier-flow-bsc" },
  [chains.chiliz.id]: { id: "7QX7tJsANNFpxFLLjqzmXRzfY1wPGp3Lty5xGbhgADa6", name: "sablier-flow-chiliz" },
  [chains.gnosis.id]: { id: "4KiJ53cTNKdFWPBPmDNQ55tYj8hn1WQg8R4UcTY2STLL", name: "sablier-flow-gnosis" },
  [chains.iotex.id]: { id: "6No3QmRiC8HXLEerDFoBpF47jUPRjhntmv28HHEMxcA2", name: "sablier-flow-iotex" },
  [chains.linea.id]: { id: "DV9XgcCCPKzUn6pgetg4yPetpW2fNoRKBUQC43aNeLG6", name: "sablier-flow-linea" },
  [chains.mode.id]: { id: "9TwfoUZoxYUyxzDgspCPyxW6uMUKetWQDaTGsZjY1qJZ", name: "sablier-flow-mode" },
  [chains.opMainnet.id]: { id: "AygPgsehNGSB4K7DYYtvBPhTpEiU4dCu3nt95bh9FhRf", name: "sablier-flow-opMainnet" },
  [chains.polygon.id]: { id: "ykp38sLarwz3cpmjSSPqo7UuTjYtkZ1KiL4PM2qwmT8", name: "sablier-flow-polygon" },
  [chains.scroll.id]: { id: "HFpTrPzJyrHKWZ9ebb4VFRQSxRwpepyfz5wd138daFkF", name: "sablier-flow-scroll" },
  [chains.zksyncEra.id]: { id: "9DRgWhDAMovpkej3eT8izum6jxEKHE62ciArffsTAScx", name: "sablier-flow-zksync" },
  // Testnets
  [chains.arbitrumSepolia.id]: {
    id: "2uWnxpYiDMkEMu1urxqt925mLfuax9XbvfcBoD97AU6d",
    name: "sablier-flow-arbitrum-sepolia",
  },
  [chains.baseSepolia.id]: { id: "AsnKT1waQMvuQxZAqfFuYwtRtAfN8uekDu75jPttfyLh", name: "sablier-flow-base-sepolia" },
  [chains.ethereumSepolia.id]: { id: "EU9AWmJjrjMRkjxcdHfuWPZvPTNAL3hiXfNGN5MwUpvm", name: "sablier-flow-sepolia" },
  [chains.opSepolia.id]: {
    id: "EFKqBB6TeH6etGuHCffnbMbETEgDZ6U29Lgpc4gpYvdB",
    name: "sablier-flow-opMainnet-sepolia",
  },
};

function getSubgraph(chainId: number): { id: string; name: string } {
  const subgraph = FLOW_SUBGRAPHS[chainId];
  if (!subgraph) {
    throw new Error(`Subgraph not found for chain ID: ${chainId}`);
  }
  return subgraph;
}

export function getDeployment(chainId: number, contracts: SablierContract[]): SablierDeployment {
  let envio: string | undefined;
  if (!envioUnsupported[chainId]) {
    envio = ENVIO_ENDPOINT;
  }

  let thegraph: TheGraph | undefined;
  const subgraph = getSubgraph(chainId);
  if (subgraph) {
    thegraph = {
      explorer: `${BaseURL.TheGraph.EXPLORER}/${subgraph.id}`,
      studio: `${BaseURL.TheGraph.STUDIO}/${THEGRAPH_ORG_ID}/${subgraph.name}/version/latest`,
      subgraph: {
        id: subgraph.id,
        url: (apiKey: string) => `${BaseURL.TheGraph.GATEWAY}/${apiKey}/subgraphs/id/${subgraph.id}`,
      },
    };
  }
  return {
    [chainId]: {
      contracts,
      indexers: {
        envio,
        thegraph,
      },
    },
  };
}
