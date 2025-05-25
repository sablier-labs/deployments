import type { Sablier } from "@src/types";
import _ from "lodash";
import { releasesByProtocol, releasesByVersion } from "./data";

const queries = {
  get: (opts: { protocol: Sablier.Protocol; version: Sablier.Version }): Sablier.Release | undefined => {
    const { protocol, version } = opts;
    return _.get(releasesByVersion, [protocol, version]);
  },
  /**
   * Get the first release:
   * - {protocol}          ⇒ first overall
   * - {protocol,chainId}  ⇒ first on that chain
   */
  getFirst: (opts: { protocol: Sablier.Protocol; chainId?: number }): Sablier.Release | undefined => {
    const { protocol, chainId } = opts;
    const list = releasesByProtocol[protocol];

    if (chainId) {
      return _.find(list, (r) => _.some(r.deployments, { chainId }));
    }

    return list[0];
  },

  /**
   * Get the latest release for a protocol.
   * - {protocol}
   */
  getLatest: (opts: { protocol: Sablier.Protocol }): Sablier.Release => {
    const list = releasesByProtocol[opts.protocol];
    const latest = list[list.length - 1];
    if (!latest.isLatest) {
      throw new Error(`Latest release not found for Sablier ${opts.protocol}. Please report on GitHub.`);
    }
    return latest;
  },
};

export default queries;
