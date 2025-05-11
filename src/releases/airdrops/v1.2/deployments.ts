/**
 * @file This file re-exports some of the Lockup v1.2 deployments as Airdrops v1.2 deployments.
 */
import { getChain } from "@src/chains";
import _ from "lodash";
import { deployments } from "../../lockup/v1.2";
import { names } from "./manifest";

export const mainnets = _.filter(deployments, (deployment) => {
  const chain = getChain(deployment.chainId);
  return (
    !chain.isTestnet &&
    _.some(deployment.periphery, (contract) => contract.name === names.SABLIER_V2_MERKLE_LOCKUP_FACTORY)
  );
});

export const testnets = _.filter(deployments, (deployment) => {
  const chain = getChain(deployment.chainId);
  return (
    chain.isTestnet &&
    _.some(deployment.periphery, (contract) => contract.name === names.SABLIER_V2_MERKLE_LOCKUP_FACTORY)
  );
});
