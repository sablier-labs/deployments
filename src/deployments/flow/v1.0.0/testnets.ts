import { ChainId } from "../../../chains/ids";
import contractNames from "../../../contract-names";
import { getChainDeployment } from "../../../helpers";
import type { Sablier } from "../../../types";

/**
 * @description Testnet deployments for Flow v1.0.0
 */
const testnets: Record<number, Sablier.Deployment> = {
  ...getChainDeployment("flow", ChainId.ARBITRUM_SEPOLIA, [
    {
      address: "0x781b3b2527f2a0a1e6b429161f2717a8a28b9f46",
      name: contractNames.flow.SABLIER_FLOW,
    },
    {
      address: "0x9a08e6ae67c28002ee2c7cff9badecd33ae2151c",
      name: contractNames.flow.FLOW_NFT_DESCRIPTOR,
    },
  ]),
  ...getChainDeployment("flow", ChainId.BASE_SEPOLIA, [
    {
      address: "0xd5f78708d83ac2bc8734a8cdf2d112c1bb3b62a2",
      name: contractNames.flow.SABLIER_FLOW,
    },
    {
      address: "0x168ad0b246f604bc70bef87ecde585c3f1d49617",
      name: contractNames.flow.FLOW_NFT_DESCRIPTOR,
    },
  ]),
  ...getChainDeployment("flow", ChainId.BLAST_SEPOLIA, [
    {
      address: "0xa8c864c53e72301c2ab484d013627a5a7084174b",
      name: contractNames.flow.SABLIER_FLOW,
    },
    {
      address: "0x567a95aa72a23b924f79dfa437d28c38740e144c",
      name: contractNames.flow.FLOW_NFT_DESCRIPTOR,
    },
  ]),
  ...getChainDeployment("flow", ChainId.ETHEREUM_SEPOLIA, [
    {
      address: "0x5ae8c13f6ae094887322012425b34b0919097d8a",
      name: contractNames.flow.SABLIER_FLOW,
    },
    {
      address: "0xbc4da2fbdfe5c5eaa11bd0e282201e2abf40b1ee",
      name: contractNames.flow.FLOW_NFT_DESCRIPTOR,
    },
  ]),
  ...getChainDeployment("flow", ChainId.LINEA_SEPOLIA, [
    {
      address: "0xb0255ed1ee5c01dfe865c1b21bbf56a80f9ae739",
      name: contractNames.flow.SABLIER_FLOW,
    },
    {
      address: "0xcd8871a22640c57ba36984fb57e9c794f5df7f40",
      name: contractNames.flow.FLOW_NFT_DESCRIPTOR,
    },
  ]),
  ...getChainDeployment("flow", ChainId.MODE_TESTNET, [
    {
      address: "0xf5ac60870e1ccc4bfce23cfbb7a796a0d8dbaf47",
      name: contractNames.flow.SABLIER_FLOW,
    },
    {
      address: "0x1cae76b71913598d7664d16641ccb6037d8ed61a",
      name: contractNames.flow.FLOW_NFT_DESCRIPTOR,
    },
  ]),
  ...getChainDeployment("flow", ChainId.MORPH_HOLESKY, [
    {
      address: "0x9efc8663cab0e2d97ad17c9fbfc8392445517e94",
      name: contractNames.flow.SABLIER_FLOW,
    },
    {
      address: "0x3d664b2da905ddd0db931982fd9a759ea950d6e1",
      name: contractNames.flow.FLOW_NFT_DESCRIPTOR,
    },
  ]),
  ...getChainDeployment("flow", ChainId.OP_SEPOLIA, [
    {
      address: "0x417db0f2bd020fc4d6bccea6b2bb6be0c541862e",
      name: contractNames.flow.SABLIER_FLOW,
    },
    {
      address: "0x28401987a23ed9b8926b07f3b6855222a70c2128",
      name: contractNames.flow.FLOW_NFT_DESCRIPTOR,
    },
  ]),
  ...getChainDeployment("flow", ChainId.SUPERSEED_SEPOLIA, [
    {
      address: "0x905756b52efeaf75f6b1bb1bb0fc35eea15ae260",
      name: contractNames.flow.SABLIER_FLOW,
    },
    {
      address: "0xc43fb9fe4477d8e8bf68b9fd3a0163a4cffcbb31",
      name: contractNames.flow.FLOW_NFT_DESCRIPTOR,
    },
  ]),
  ...getChainDeployment("flow", ChainId.TAIKO_HEKLA, [
    {
      address: "0x29b7bafce0a04638dc91ca0b87a562cab8c3dbde",
      name: contractNames.flow.SABLIER_FLOW,
    },
    {
      address: "0xd45f45dd34045a368854f7987a84d9485b4b45e9",
      name: contractNames.flow.FLOW_NFT_DESCRIPTOR,
    },
  ]),
};

export default testnets;
