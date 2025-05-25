import type { Sablier } from "@src/types";
import _ from "lodash";
import chainsQueries from "./chains/queries";
import contractsQueries from "./contracts/queries";
import { releases as allReleases } from "./releases";
import releasesQueries from "./releases/queries";

const deployments = {
  get: (opts: { chainId: number; release: Sablier.Release }): Sablier.Deployment | undefined => {
    const { release, chainId } = opts || {};
    return _.find(release.deployments, (d) => d.chainId === chainId);
  },
  /**
   * Get many deployments.
   * - no options           ⇒ all across all releases
   * - {release}            ⇒ that release's deployments
   */
  getAll: (): Sablier.Deployment[] | undefined => {
    return allReleases.flatMap((r) => r.deployments);
  },
};

const queries = {
  chains: chainsQueries,
  contracts: contractsQueries,
  deployments,
  releases: releasesQueries,
};

export default queries;
