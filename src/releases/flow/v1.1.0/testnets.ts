import { ChainId } from "../../../chains/ids";
import { getDeployment, sortDeployments } from "../../../helpers";
import type { Sablier } from "../../../types";
import manifest from "./manifest";

/**
 * @description Testnet deployments for Flow v1.1.0
 */
const testnets: Sablier.Deployment[] = [
  getDeployment("flow", ChainId.ARBITRUM_SEPOLIA, {
    [manifest.SABLIER_FLOW]: "0xF9cbfFAe10010475A2800a5eFC11f4D4780cA48d",
    [manifest.FLOW_NFT_DESCRIPTOR]: "0x3E64A31C3974b6ae9f09a8fbc784519bF551e795",
  }),
  getDeployment("flow", ChainId.BASE_SEPOLIA, {
    [manifest.SABLIER_FLOW]: "0xFB6B72a5988A7701a9090C56936269241693a9CC",
    [manifest.FLOW_NFT_DESCRIPTOR]: "0xcb5591F6d0e0fFC03037ef7b006D1361C6D33D25",
  }),
  getDeployment("flow", ChainId.BLAST_SEPOLIA, {
    [manifest.SABLIER_FLOW]: "0x027b55FD4b26A78a0463304C63f35e97A35246FD",
    [manifest.FLOW_NFT_DESCRIPTOR]: "0x42Abaf2c1E36624FD0084998A9BeA4a753A93e45",
  }),
  getDeployment("flow", ChainId.ETHEREUM_SEPOLIA, {
    [manifest.SABLIER_FLOW]: "0x93FE8f86e881a23e5A2FEB4B160514Fd332576A6",
    [manifest.FLOW_NFT_DESCRIPTOR]: "0xc9dBf2D207D178875b698e5f7493ce2d8BA88994",
  }),
  getDeployment("flow", ChainId.LINEA_SEPOLIA, {
    [manifest.SABLIER_FLOW]: "0x3D0804610dE1b8DC19B1DDf90C26d5a51ab2B6b6",
    [manifest.FLOW_NFT_DESCRIPTOR]: "0xbd17DFd74078dB49f12101Ca929b5153E924e9C7",
  }),
  getDeployment("flow", ChainId.MODE_TESTNET, {
    [manifest.SABLIER_FLOW]: "0x1063D400953441F1C6d8EF6406e1E6aa5684B82d",
    [manifest.FLOW_NFT_DESCRIPTOR]: "0xe1eDdA64eea2173a015A3738171C3a1C263324C7",
  }),
  getDeployment("flow", ChainId.MORPH_HOLESKY, {
    [manifest.SABLIER_FLOW]: "0x9efc8663cab0e2d97ad17c9fbfc8392445517e94",
    [manifest.FLOW_NFT_DESCRIPTOR]: "0x3d664b2da905ddd0db931982fd9a759ea950d6e1",
  }),
  getDeployment("flow", ChainId.OP_SEPOLIA, {
    [manifest.SABLIER_FLOW]: "0x77873085a88189c8B82B3a01BcbC294108D02805",
    [manifest.FLOW_NFT_DESCRIPTOR]: "0x4739327acfb56E90177d44Cb0845e759276BCA88",
  }),
  getDeployment("flow", ChainId.SUPERSEED_SEPOLIA, {
    [manifest.SABLIER_FLOW]: "0x905756b52efeaf75f6b1bb1bb0fc35eea15ae260",
    [manifest.FLOW_NFT_DESCRIPTOR]: "0xc43fb9fe4477d8e8bf68b9fd3a0163a4cffcbb31",
  }),
  getDeployment("flow", ChainId.TAIKO_HEKLA, {
    [manifest.SABLIER_FLOW]: "0xb528AF43fFEe6d4B702CF6235d2380e1828eD852",
    [manifest.FLOW_NFT_DESCRIPTOR]: "0xB197D4142b9DBf34979588cf8BF1222Ea3907916",
  }),
];

export default sortDeployments(testnets);
