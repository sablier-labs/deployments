/**
 * @see https://docs.sablier.com/api/overview
 */

import * as airdrops from "./airdrops";
import * as flow from "./flow";
import * as lockup from "./lockup";

export const indexers = [
  ...airdrops.envios,
  ...airdrops.subgraphs,
  ...flow.envios,
  ...flow.subgraphs,
  ...lockup.envios,
  ...lockup.subgraphs,
];

export const indexersByType = {
  envios: [...airdrops.envios, ...flow.envios, ...lockup.envios],
  subgraphs: [...airdrops.subgraphs, ...flow.subgraphs, ...lockup.subgraphs],
};

export const indexersByProtocol = {
  airdrops: [...airdrops.envios, ...airdrops.subgraphs],
  flow: [...flow.envios, ...flow.subgraphs],
  lockup: [...lockup.envios, ...lockup.subgraphs],
};
