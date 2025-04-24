import { ChainId } from "../../../chains/ids";
import contractNames from "../../../contract-names";
import { getChainDeployment } from "../../../helpers";
import type { Sablier } from "../../../types";

/**
 * @description Mainnet deployments for Flow v1.0.0
 */
const mainnets: Record<number, Sablier.Deployment> = {
  ...getChainDeployment("flow", ChainId.ABSTRACT, [
    {
      address: "0x001F1408515Ccd5C1A19A682455ed4eFa39DadD6",
      name: contractNames.flow.SABLIER_FLOW,
    },
    {
      address: "0x20C9A3E27322Fc2b21Ced430D1B2e12d90804db6",
      name: contractNames.flow.FLOW_NFT_DESCRIPTOR,
    },
  ]),
  ...getChainDeployment("flow", ChainId.ARBITRUM_ONE, [
    {
      address: "0x18a12a7035aa56240bcd236bc019aa245dcc015a",
      name: contractNames.flow.SABLIER_FLOW,
    },
    {
      address: "0x900ebdb9ecfb19f9463d68d1fd6e5fa7ab9c6897",
      name: contractNames.flow.FLOW_NFT_DESCRIPTOR,
    },
  ]),
  ...getChainDeployment("flow", ChainId.AVALANCHE, [
    {
      address: "0x8c172e42c06302e3cfe555dc4d6b71a756ee186b",
      name: contractNames.flow.SABLIER_FLOW,
    },
    {
      address: "0x82ea83ab59b106c125168492cd468c322bd0d195",
      name: contractNames.flow.FLOW_NFT_DESCRIPTOR,
    },
  ]),
  ...getChainDeployment("flow", ChainId.BASE, [
    {
      address: "0x1a9adc0e2114c8407cc31669baafeee031d15dd2",
      name: contractNames.flow.SABLIER_FLOW,
    },
    {
      address: "0x8e64f389a4697e004647162ec6ea0a7779d5d899",
      name: contractNames.flow.FLOW_NFT_DESCRIPTOR,
    },
  ]),
  ...getChainDeployment("flow", ChainId.BERACHAIN, [
    {
      address: "0xA031544946ED769377128fBD961c9d621c4b4179",
      name: contractNames.flow.SABLIER_FLOW,
    },
    {
      address: "0x581250eE4311F7Dc1afCF965cF8024004B423e9E",
      name: contractNames.flow.FLOW_NFT_DESCRIPTOR,
    },
  ]),
  ...getChainDeployment("flow", ChainId.BLAST, [
    {
      address: "0xfdac2799644141856e20e021ac06f231cafc731f",
      name: contractNames.flow.SABLIER_FLOW,
    },
    {
      address: "0xb40624ce2af67227529f713bac46e2b7064b7b92",
      name: contractNames.flow.FLOW_NFT_DESCRIPTOR,
    },
  ]),
  ...getChainDeployment("flow", ChainId.BSC, [
    {
      address: "0xfce01f79247cf450062545e7155d7bd568551d0e",
      name: contractNames.flow.SABLIER_FLOW,
    },
    {
      address: "0xbc6fdd3f59900b9fcd445f8df159e2e794f098ec",
      name: contractNames.flow.FLOW_NFT_DESCRIPTOR,
    },
  ]),
  ...getChainDeployment("flow", ChainId.CHILIZ, [
    {
      address: "0x9EfC8663cAB0e2d97ad17C9fbfc8392445517E94",
      name: contractNames.flow.SABLIER_FLOW,
    },
    {
      address: "0x3D664B2Da905DDD0Db931982FD9a759ea950D6e1",
      name: contractNames.flow.FLOW_NFT_DESCRIPTOR,
    },
  ]),
  ...getChainDeployment("flow", ChainId.CORE_DAO, [
    {
      address: "0x447c6ea25540611541ff98fc677ca865f4e92450",
      name: contractNames.flow.SABLIER_FLOW,
    },
    {
      address: "0xbfaa055ecfe503e1323dc9fc26b7d3aa3bf54364",
      name: contractNames.flow.FLOW_NFT_DESCRIPTOR,
    },
  ]),
  ...getChainDeployment("flow", ChainId.ETHEREUM, [
    {
      address: "0x2d9221a63e12aa796619cb381ec4a71b201281f5",
      name: contractNames.flow.SABLIER_FLOW,
    },
    {
      address: "0xb69b27073fa0366cddf432f5976c34c9baf7eae6",
      name: contractNames.flow.FLOW_NFT_DESCRIPTOR,
    },
  ]),
  ...getChainDeployment("flow", ChainId.GNOSIS, [
    {
      address: "0x5515f774a4db42820802333ba575f68a6e85bd13",
      name: contractNames.flow.SABLIER_FLOW,
    },
    {
      address: "0xc07c1128c19c2bf303b68ae061eff5293927630e",
      name: contractNames.flow.FLOW_NFT_DESCRIPTOR,
    },
  ]),
  ...getChainDeployment("flow", ChainId.LIGHTLINK, [
    {
      address: "0x46fa0164c5af9382d330e5a245a2ca8a18398950",
      name: contractNames.flow.SABLIER_FLOW,
    },
    {
      address: "0xa2a48b83b6c96e1536336df9ead024d557a97a23",
      name: contractNames.flow.FLOW_NFT_DESCRIPTOR,
    },
  ]),
  ...getChainDeployment("flow", ChainId.LINEA, [
    {
      address: "0x949bFa08f1632432A2656a9dB17CA34d54Da8296",
      name: contractNames.flow.SABLIER_FLOW,
    },
    {
      address: "0xF430f0d2f798c42fDFAc35b5e32BD4f63Bf51130",
      name: contractNames.flow.FLOW_NFT_DESCRIPTOR,
    },
  ]),
  ...getChainDeployment("flow", ChainId.MODE, [
    {
      address: "0x75970dde488431fc4961494569def3269f20d6b3",
      name: contractNames.flow.SABLIER_FLOW,
    },
    {
      address: "0x46fa0164c5af9382d330e5a245a2ca8a18398950",
      name: contractNames.flow.FLOW_NFT_DESCRIPTOR,
    },
  ]),
  ...getChainDeployment("flow", ChainId.MORPH, [
    {
      address: "0xfe6972d0ae797fae343e5a58d0c7d8513937f092",
      name: contractNames.flow.SABLIER_FLOW,
    },
    {
      address: "0xab281bbc2bc34a1f202ddff17ffd1c00edf73f3a",
      name: contractNames.flow.FLOW_NFT_DESCRIPTOR,
    },
  ]),
  ...getChainDeployment("flow", ChainId.OP_MAINNET, [
    {
      address: "0x906356e4e6410ea0a97dbc5b071cf394ab0dcd69",
      name: contractNames.flow.SABLIER_FLOW,
    },
    {
      address: "0xe674fb603d6f72b88bf297c1ba69f57b588a8f6d",
      name: contractNames.flow.FLOW_NFT_DESCRIPTOR,
    },
  ]),
  ...getChainDeployment("flow", ChainId.POLYGON, [
    {
      address: "0xcf2d812d5aad4e6fec3b05850ff056b21159d496",
      name: contractNames.flow.SABLIER_FLOW,
    },
    {
      address: "0x011277c87158e52cfbd8a1dd4a29118d602dda3a",
      name: contractNames.flow.FLOW_NFT_DESCRIPTOR,
    },
  ]),
  ...getChainDeployment("flow", ChainId.SCROLL, [
    {
      address: "0x66826f53bffeaab71adc7fe1a77e86f8268848d8",
      name: contractNames.flow.SABLIER_FLOW,
    },
    {
      address: "0x57fd892b3dc20eadb83cd8fb0240a87960046daa",
      name: contractNames.flow.FLOW_NFT_DESCRIPTOR,
    },
  ]),
  ...getChainDeployment("flow", ChainId.SUPERSEED, [
    {
      address: "0x4f5f9b3fb57bba43aaf90e3f71d8f8f384e88e20",
      name: contractNames.flow.SABLIER_FLOW,
    },
    {
      address: "0xac2c36347869d8d779f7872c6202de3efd6ef2bb",
      name: contractNames.flow.FLOW_NFT_DESCRIPTOR,
    },
  ]),
  ...getChainDeployment("flow", ChainId.TAIKO, [
    {
      address: "0x3d303e4c61285f87da9f61aaadc8c89b7d55dfa2",
      name: contractNames.flow.SABLIER_FLOW,
    },
    {
      address: "0xe790b6178612eeba6faeec16a2e1354c872f8bde",
      name: contractNames.flow.FLOW_NFT_DESCRIPTOR,
    },
  ]),
  ...getChainDeployment("flow", ChainId.ZK_SYNC_ERA, [
    {
      address: "0x015899a075B7C181e357Cd0ed000683DBB4F1FcE",
      name: contractNames.flow.SABLIER_FLOW,
    },
    {
      address: "0x01C40608f2822816cF25a0a911c1df330487ba62",
      name: contractNames.flow.FLOW_NFT_DESCRIPTOR,
    },
  ]),
};

export default mainnets;
