import { ChainId } from "../../../chains/ids";
import { getDeployment, sortDeployments } from "../../../helpers";
import type { Sablier } from "../../../types";
import manifest from "./manifest";

/**
 * @description Mainnet deployments for Flow v1.0.0
 */
const mainnets: Sablier.Deployment[] = [
  getDeployment("flow", ChainId.ABSTRACT, {
    [manifest.SABLIER_FLOW]: "0x001F1408515Ccd5C1A19A682455ed4eFa39DadD6",
    [manifest.FLOW_NFT_DESCRIPTOR]: "0x20C9A3E27322Fc2b21Ced430D1B2e12d90804db6",
  }),
  getDeployment("flow", ChainId.ARBITRUM_ONE, {
    [manifest.SABLIER_FLOW]: "0x18a12a7035aa56240bcd236bc019aa245dcc015a",
    [manifest.FLOW_NFT_DESCRIPTOR]: "0x900ebdb9ecfb19f9463d68d1fd6e5fa7ab9c6897",
  }),
  getDeployment("flow", ChainId.AVALANCHE, {
    [manifest.SABLIER_FLOW]: "0x8c172e42c06302e3cfe555dc4d6b71a756ee186b",
    [manifest.FLOW_NFT_DESCRIPTOR]: "0x82ea83ab59b106c125168492cd468c322bd0d195",
  }),
  getDeployment("flow", ChainId.BASE, {
    [manifest.SABLIER_FLOW]: "0x1a9adc0e2114c8407cc31669baafeee031d15dd2",
    [manifest.FLOW_NFT_DESCRIPTOR]: "0x8e64f389a4697e004647162ec6ea0a7779d5d899",
  }),
  getDeployment("flow", ChainId.BERACHAIN, {
    [manifest.SABLIER_FLOW]: "0xA031544946ED769377128fBD961c9d621c4b4179",
    [manifest.FLOW_NFT_DESCRIPTOR]: "0x581250eE4311F7Dc1afCF965cF8024004B423e9E",
  }),
  getDeployment("flow", ChainId.BLAST, {
    [manifest.SABLIER_FLOW]: "0xfdac2799644141856e20e021ac06f231cafc731f",
    [manifest.FLOW_NFT_DESCRIPTOR]: "0xb40624ce2af67227529f713bac46e2b7064b7b92",
  }),
  getDeployment("flow", ChainId.BSC, {
    [manifest.SABLIER_FLOW]: "0xfce01f79247cf450062545e7155d7bd568551d0e",
    [manifest.FLOW_NFT_DESCRIPTOR]: "0xbc6fdd3f59900b9fcd445f8df159e2e794f098ec",
  }),
  getDeployment("flow", ChainId.CHILIZ, {
    [manifest.SABLIER_FLOW]: "0x9EfC8663cAB0e2d97ad17C9fbfc8392445517E94",
    [manifest.FLOW_NFT_DESCRIPTOR]: "0x3D664B2Da905DDD0Db931982FD9a759ea950D6e1",
  }),
  getDeployment("flow", ChainId.CORE_DAO, {
    [manifest.SABLIER_FLOW]: "0x447c6ea25540611541ff98fc677ca865f4e92450",
    [manifest.FLOW_NFT_DESCRIPTOR]: "0xbfaa055ecfe503e1323dc9fc26b7d3aa3bf54364",
  }),
  getDeployment("flow", ChainId.ETHEREUM, {
    [manifest.SABLIER_FLOW]: "0x2d9221a63e12aa796619cb381ec4a71b201281f5",
    [manifest.FLOW_NFT_DESCRIPTOR]: "0xb69b27073fa0366cddf432f5976c34c9baf7eae6",
  }),
  getDeployment("flow", ChainId.GNOSIS, {
    [manifest.SABLIER_FLOW]: "0x5515f774a4db42820802333ba575f68a6e85bd13",
    [manifest.FLOW_NFT_DESCRIPTOR]: "0xc07c1128c19c2bf303b68ae061eff5293927630e",
  }),
  getDeployment("flow", ChainId.LIGHTLINK, {
    [manifest.SABLIER_FLOW]: "0x46fa0164c5af9382d330e5a245a2ca8a18398950",
    [manifest.FLOW_NFT_DESCRIPTOR]: "0xa2a48b83b6c96e1536336df9ead024d557a97a23",
  }),
  getDeployment("flow", ChainId.LINEA, {
    [manifest.SABLIER_FLOW]: "0x949bFa08f1632432A2656a9dB17CA34d54Da8296",
    [manifest.FLOW_NFT_DESCRIPTOR]: "0xF430f0d2f798c42fDFAc35b5e32BD4f63Bf51130",
  }),
  getDeployment("flow", ChainId.MODE, {
    [manifest.SABLIER_FLOW]: "0x75970dde488431fc4961494569def3269f20d6b3",
    [manifest.FLOW_NFT_DESCRIPTOR]: "0x46fa0164c5af9382d330e5a245a2ca8a18398950",
  }),
  getDeployment("flow", ChainId.MORPH, {
    [manifest.SABLIER_FLOW]: "0xfe6972d0ae797fae343e5a58d0c7d8513937f092",
    [manifest.FLOW_NFT_DESCRIPTOR]: "0xab281bbc2bc34a1f202ddff17ffd1c00edf73f3a",
  }),
  getDeployment("flow", ChainId.OP_MAINNET, {
    [manifest.SABLIER_FLOW]: "0x906356e4e6410ea0a97dbc5b071cf394ab0dcd69",
    [manifest.FLOW_NFT_DESCRIPTOR]: "0xe674fb603d6f72b88bf297c1ba69f57b588a8f6d",
  }),
  getDeployment("flow", ChainId.POLYGON, {
    [manifest.SABLIER_FLOW]: "0xcf2d812d5aad4e6fec3b05850ff056b21159d496",
    [manifest.FLOW_NFT_DESCRIPTOR]: "0x011277c87158e52cfbd8a1dd4a29118d602dda3a",
  }),
  getDeployment("flow", ChainId.SCROLL, {
    [manifest.SABLIER_FLOW]: "0x66826f53bffeaab71adc7fe1a77e86f8268848d8",
    [manifest.FLOW_NFT_DESCRIPTOR]: "0x57fd892b3dc20eadb83cd8fb0240a87960046daa",
  }),
  getDeployment("flow", ChainId.SUPERSEED, {
    [manifest.SABLIER_FLOW]: "0x4f5f9b3fb57bba43aaf90e3f71d8f8f384e88e20",
    [manifest.FLOW_NFT_DESCRIPTOR]: "0xac2c36347869d8d779f7872c6202de3efd6ef2bb",
  }),
  getDeployment("flow", ChainId.TAIKO, {
    [manifest.SABLIER_FLOW]: "0x3d303e4c61285f87da9f61aaadc8c89b7d55dfa2",
    [manifest.FLOW_NFT_DESCRIPTOR]: "0xe790b6178612eeba6faeec16a2e1354c872f8bde",
  }),
  getDeployment("flow", ChainId.ZK_SYNC_ERA, {
    [manifest.SABLIER_FLOW]: "0x015899a075B7C181e357Cd0ed000683DBB4F1FcE",
    [manifest.FLOW_NFT_DESCRIPTOR]: "0x01C40608f2822816cF25a0a911c1df330487ba62",
  }),
];

export default sortDeployments(mainnets);
