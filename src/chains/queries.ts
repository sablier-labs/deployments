import type { Sablier } from "@src/types";
import _ from "lodash";
import { chains as allChains } from "./data";

const queries = {
  get: (chainId: number): Sablier.Chain | undefined => {
    return _.find(allChains, { id: chainId });
  },
  getAll: (): Sablier.Chain[] => {
    return _.values(allChains);
  },
  getName: (chainId: number): string | undefined => {
    return _.find(allChains, { id: chainId })?.name;
  },
  getOrThrow: (chainId: number): Sablier.Chain => {
    const chain = _.find(allChains, { id: chainId });
    if (!chain) {
      throw new Error(`Chain with ID ${chainId} not found`);
    }
    return chain;
  },
};

export default queries;
