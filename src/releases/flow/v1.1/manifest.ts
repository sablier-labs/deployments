import { getNestedValues } from "@src/helpers";

export const map = {
  FLOW_NFT_DESCRIPTOR: "FlowNFTDescriptor",
  SABLIER_FLOW: "SablierFlow",
};

export const manifest = getNestedValues(map);
