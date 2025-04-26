import { getNestedValues } from "@src/helpers";

export const names = {
  FLOW_NFT_DESCRIPTOR: "FlowNFTDescriptor",
  SABLIER_FLOW: "SablierFlow",
};

export const manifest = getNestedValues(names);
