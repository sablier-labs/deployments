// TODO: helper for finding the most recent deployment for a chain ID
import { airdrops, airdropsByVersion } from "./airdrops";
import { flow, flowByVersion } from "./flow";
import { lockup, lockupByVersion } from "./lockup";

export const releases = { airdrops, flow, lockup };
export const releasesByVersion = {
  airdrops: airdropsByVersion,
  flow: flowByVersion,
  lockup: lockupByVersion,
};
