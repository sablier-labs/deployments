/**
 * @file This file re-exports some of the Lockup v1.1 deployments as Airdrops v1.1 deployments.
 */
import chainsQueries from "@src/chains/queries";
import { deployments } from "@src/releases/lockup/v1.1";
import _ from "lodash";
import manifest from "./manifest";

const filterByTestnet = (isTestnet: boolean) =>
  _.filter(deployments, (deployment) => {
    const chain = chainsQueries.get(deployment.chainId);
    return (
      chain?.isTestnet === isTestnet &&
      _.some(deployment.periphery, (contract) => contract.name === manifest.SABLIER_V2_MERKLE_STREAMER_FACTORY)
    );
  });

export const mainnets = filterByTestnet(false);
export const testnets = filterByTestnet(true);
