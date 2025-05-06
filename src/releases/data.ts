import { airdrops, airdropsByVersion } from "./airdrops";
import { flow, flowByVersion } from "./flow";
import { legacy, legacyByVersion } from "./legacy";
import { lockup, lockupByVersion } from "./lockup";

export const releases = [...airdrops, ...flow, ...legacy, ...lockup];
export const releasesByProtocol = {
  airdrops,
  flow,
  legacy,
  lockup,
};

export { airdrops, flow, legacy, lockup };
export { airdropsByVersion, flowByVersion, legacyByVersion, lockupByVersion };
