/**
 * @see https://docs.sablier.com/api/overview
 */

import type { Sablier } from "@src/types";

import * as airdrops from "./airdrops";
import * as flow from "./flow";
import * as lockup from "./lockup";

export const indexers: Sablier.Indexer[] = [
  ...airdrops.envios,
  ...airdrops.subgraphs,
  ...flow.envios,
  ...flow.subgraphs,
  ...lockup.envios,
  ...lockup.subgraphs,
];

export const indexersByType = {
  envios: [...airdrops.envios, ...flow.envios, ...lockup.envios] as Sablier.IndexerEnvio[],
  subgraphs: [...airdrops.subgraphs, ...flow.subgraphs, ...lockup.subgraphs] as Sablier.IndexerSubgraph[],
};

export const indexersByProtocol = {
  airdrops: [...airdrops.envios, ...airdrops.subgraphs],
  flow: [...flow.envios, ...flow.subgraphs],
  lockup: [...lockup.envios, ...lockup.subgraphs],
};
