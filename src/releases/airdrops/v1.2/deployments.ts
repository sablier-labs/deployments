/**
 * @file This file re-exports some of the Lockup v1.2 deployments as Airdrops v1.2 deployments.
 */
import { chainsQueries } from "@src/chains/queries";
import { deployments } from "@src/releases/lockup/v1.2";
import type { Sablier } from "@src/types";
import _ from "lodash";
import manifest from "./manifest";

function filterByTestnet(isTestnet: boolean): Sablier.Deployment[] {
  return _.filter(deployments, (deployment) => {
    const chain = chainsQueries.get(deployment.chainId);
    return (
      chain?.isTestnet === isTestnet &&
      _.some(deployment.periphery, { name: manifest.SABLIER_V2_MERKLE_LOCKUP_FACTORY })
    );
  });
}

export const mainnets = filterByTestnet(false);
export const testnets = filterByTestnet(true);
