/**
 * @file This file re-exports some of the Lockup v1.1 deployments as Airdrops v1.1 deployments.
 */
import { getChain } from "@src/chains";
import _ from "lodash";
import { deployments } from "../../lockup/v1.1";
import manifest from "./manifest";

export const mainnets = _.filter(deployments, (deployment) => {
  const chain = getChain(deployment.chainId);
  const found = _.some(
    deployment.periphery,
    (contract) => contract.name === manifest.SABLIER_V2_MERKLE_STREAMER_FACTORY,
  );
  return !chain.isTestnet && found;
});

export const testnets = _.filter(deployments, (deployment) => {
  const chain = getChain(deployment.chainId);
  const found = _.some(
    deployment.periphery,
    (contract) => contract.name === manifest.SABLIER_V2_MERKLE_STREAMER_FACTORY,
  );
  return chain.isTestnet && found;
});
