// TODO: helper for finding the most recent deployment for a chain ID
import { airdrops } from "./airdrops";
import { flow } from "./flow";
import { lockup } from "./lockup";

export { airdropsByVersion } from "./airdrops";
export { flowByVersion } from "./flow";
export { lockupByVersion } from "./lockup";

export const releases = [...airdrops, ...flow, ...lockup];
export const releasesByProtocol = {
  airdrops,
  flow,
  lockup,
};
