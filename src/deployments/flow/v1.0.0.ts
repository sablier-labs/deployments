import { ChainId } from "../../chains/ids";
import contractNames from "../../contract-names";
import { getDeployment } from "../../helpers";

/* -------------------------------------------------------------------------- */
/*                                  Mainnets                                  */
/* -------------------------------------------------------------------------- */

const mainnets = [
  getDeployment("flow", ChainId.ABSTRACT, [
    {
      address: "0x001F1408515Ccd5C1A19A682455ed4eFa39DadD6",
      name: contractNames.flow.SABLIER_FLOW,
    },
    {
      address: "0x20C9A3E27322Fc2b21Ced430D1B2e12d90804db6",
      name: contractNames.flow.FLOW_NFT_DESCRIPTOR,
    },
  ]),
  getDeployment("flow", ChainId.ARBITRUM_ONE, [
    {
      address: "0x18a12a7035aa56240bcd236bc019aa245dcc015a",
      name: contractNames.flow.SABLIER_FLOW,
    },
    {
      address: "0x900ebdb9ecfb19f9463d68d1fd6e5fa7ab9c6897",
      name: contractNames.flow.FLOW_NFT_DESCRIPTOR,
    },
  ]),
  getDeployment("flow", ChainId.AVALANCHE, [
    {
      address: "0x8c172e42c06302e3cfe555dc4d6b71a756ee186b",
      name: contractNames.flow.SABLIER_FLOW,
    },
    {
      address: "0x82ea83ab59b106c125168492cd468c322bd0d195",
      name: contractNames.flow.FLOW_NFT_DESCRIPTOR,
    },
  ]),
  getDeployment("flow", ChainId.BASE, [
    {
      address: "0x1a9adc0e2114c8407cc31669baafeee031d15dd2",
      name: contractNames.flow.SABLIER_FLOW,
    },
    {
      address: "0x8e64f389a4697e004647162ec6ea0a7779d5d899",
      name: contractNames.flow.FLOW_NFT_DESCRIPTOR,
    },
  ]),
  getDeployment("flow", ChainId.BERACHAIN, [
    {
      address: "0xA031544946ED769377128fBD961c9d621c4b4179",
      name: contractNames.flow.SABLIER_FLOW,
    },
    {
      address: "0x581250eE4311F7Dc1afCF965cF8024004B423e9E",
      name: contractNames.flow.FLOW_NFT_DESCRIPTOR,
    },
  ]),
  getDeployment("flow", ChainId.BLAST, [
    {
      address: "0xfdac2799644141856e20e021ac06f231cafc731f",
      name: contractNames.flow.SABLIER_FLOW,
    },
    {
      address: "0xb40624ce2af67227529f713bac46e2b7064b7b92",
      name: contractNames.flow.FLOW_NFT_DESCRIPTOR,
    },
  ]),
  getDeployment("flow", ChainId.BSC, [
    {
      address: "0xfce01f79247cf450062545e7155d7bd568551d0e",
      name: contractNames.flow.SABLIER_FLOW,
    },
    {
      address: "0xbc6fdd3f59900b9fcd445f8df159e2e794f098ec",
      name: contractNames.flow.FLOW_NFT_DESCRIPTOR,
    },
  ]),
  getDeployment("flow", ChainId.CHILIZ, [
    {
      address: "0x9EfC8663cAB0e2d97ad17C9fbfc8392445517E94",
      name: contractNames.flow.SABLIER_FLOW,
    },
    {
      address: "0x3D664B2Da905DDD0Db931982FD9a759ea950D6e1",
      name: contractNames.flow.FLOW_NFT_DESCRIPTOR,
    },
  ]),
  getDeployment("flow", ChainId.CORE_DAO, [
    {
      address: "0x447c6ea25540611541ff98fc677ca865f4e92450",
      name: contractNames.flow.SABLIER_FLOW,
    },
    {
      address: "0xbfaa055ecfe503e1323dc9fc26b7d3aa3bf54364",
      name: contractNames.flow.FLOW_NFT_DESCRIPTOR,
    },
  ]),
  getDeployment("flow", ChainId.ETHEREUM, [
    {
      address: "0x2d9221a63e12aa796619cb381ec4a71b201281f5",
      name: contractNames.flow.SABLIER_FLOW,
    },
    {
      address: "0xb69b27073fa0366cddf432f5976c34c9baf7eae6",
      name: contractNames.flow.FLOW_NFT_DESCRIPTOR,
    },
  ]),
  getDeployment("flow", ChainId.GNOSIS, [
    {
      address: "0x5515f774a4db42820802333ba575f68a6e85bd13",
      name: contractNames.flow.SABLIER_FLOW,
    },
    {
      address: "0xc07c1128c19c2bf303b68ae061eff5293927630e",
      name: contractNames.flow.FLOW_NFT_DESCRIPTOR,
    },
  ]),
  getDeployment("flow", ChainId.LIGHTLINK, [
    {
      address: "0x46fa0164c5af9382d330e5a245a2ca8a18398950",
      name: contractNames.flow.SABLIER_FLOW,
    },
    {
      address: "0xa2a48b83b6c96e1536336df9ead024d557a97a23",
      name: contractNames.flow.FLOW_NFT_DESCRIPTOR,
    },
  ]),
  getDeployment("flow", ChainId.LINEA, [
    {
      address: "0x949bFa08f1632432A2656a9dB17CA34d54Da8296",
      name: contractNames.flow.SABLIER_FLOW,
    },
    {
      address: "0xF430f0d2f798c42fDFAc35b5e32BD4f63Bf51130",
      name: contractNames.flow.FLOW_NFT_DESCRIPTOR,
    },
  ]),
  getDeployment("flow", ChainId.MODE, [
    {
      address: "0x75970dde488431fc4961494569def3269f20d6b3",
      name: contractNames.flow.SABLIER_FLOW,
    },
    {
      address: "0x46fa0164c5af9382d330e5a245a2ca8a18398950",
      name: contractNames.flow.FLOW_NFT_DESCRIPTOR,
    },
  ]),
  getDeployment("flow", ChainId.MORPH, [
    {
      address: "0xfe6972d0ae797fae343e5a58d0c7d8513937f092",
      name: contractNames.flow.SABLIER_FLOW,
    },
    {
      address: "0xab281bbc2bc34a1f202ddff17ffd1c00edf73f3a",
      name: contractNames.flow.FLOW_NFT_DESCRIPTOR,
    },
  ]),
  getDeployment("flow", ChainId.OP_MAINNET, [
    {
      address: "0x906356e4e6410ea0a97dbc5b071cf394ab0dcd69",
      name: contractNames.flow.SABLIER_FLOW,
    },
    {
      address: "0xe674fb603d6f72b88bf297c1ba69f57b588a8f6d",
      name: contractNames.flow.FLOW_NFT_DESCRIPTOR,
    },
  ]),
  getDeployment("flow", ChainId.POLYGON, [
    {
      address: "0xcf2d812d5aad4e6fec3b05850ff056b21159d496",
      name: contractNames.flow.SABLIER_FLOW,
    },
    {
      address: "0x011277c87158e52cfbd8a1dd4a29118d602dda3a",
      name: contractNames.flow.FLOW_NFT_DESCRIPTOR,
    },
  ]),
  getDeployment("flow", ChainId.SCROLL, [
    {
      address: "0x66826f53bffeaab71adc7fe1a77e86f8268848d8",
      name: contractNames.flow.SABLIER_FLOW,
    },
    {
      address: "0x57fd892b3dc20eadb83cd8fb0240a87960046daa",
      name: contractNames.flow.FLOW_NFT_DESCRIPTOR,
    },
  ]),
  getDeployment("flow", ChainId.SUPERSEED, [
    {
      address: "0x4f5f9b3fb57bba43aaf90e3f71d8f8f384e88e20",
      name: contractNames.flow.SABLIER_FLOW,
    },
    {
      address: "0xac2c36347869d8d779f7872c6202de3efd6ef2bb",
      name: contractNames.flow.FLOW_NFT_DESCRIPTOR,
    },
  ]),
  getDeployment("flow", ChainId.TAIKO, [
    {
      address: "0x3d303e4c61285f87da9f61aaadc8c89b7d55dfa2",
      name: contractNames.flow.SABLIER_FLOW,
    },
    {
      address: "0xe790b6178612eeba6faeec16a2e1354c872f8bde",
      name: contractNames.flow.FLOW_NFT_DESCRIPTOR,
    },
  ]),
  getDeployment("flow", ChainId.ZK_SYNC_ERA, [
    {
      address: "0x015899a075B7C181e357Cd0ed000683DBB4F1FcE",
      name: contractNames.flow.SABLIER_FLOW,
    },
    {
      address: "0x01C40608f2822816cF25a0a911c1df330487ba62",
      name: contractNames.flow.FLOW_NFT_DESCRIPTOR,
    },
  ]),
];

const testnets = [
  getDeployment("flow", ChainId.ARBITRUM_SEPOLIA, [
    {
      address: "0x781b3b2527f2a0a1e6b429161f2717a8a28b9f46",
      name: contractNames.flow.SABLIER_FLOW,
    },
    {
      address: "0x9a08e6ae67c28002ee2c7cff9badecd33ae2151c",
      name: contractNames.flow.FLOW_NFT_DESCRIPTOR,
    },
  ]),
  getDeployment("flow", ChainId.BASE_SEPOLIA, [
    {
      address: "0xd5f78708d83ac2bc8734a8cdf2d112c1bb3b62a2",
      name: contractNames.flow.SABLIER_FLOW,
    },
    {
      address: "0x168ad0b246f604bc70bef87ecde585c3f1d49617",
      name: contractNames.flow.FLOW_NFT_DESCRIPTOR,
    },
  ]),
  getDeployment("flow", ChainId.BLAST_SEPOLIA, [
    {
      address: "0xa8c864c53e72301c2ab484d013627a5a7084174b",
      name: contractNames.flow.SABLIER_FLOW,
    },
    {
      address: "0x567a95aa72a23b924f79dfa437d28c38740e144c",
      name: contractNames.flow.FLOW_NFT_DESCRIPTOR,
    },
  ]),
  getDeployment("flow", ChainId.ETHEREUM_SEPOLIA, [
    {
      address: "0x5ae8c13f6ae094887322012425b34b0919097d8a",
      name: contractNames.flow.SABLIER_FLOW,
    },
    {
      address: "0xbc4da2fbdfe5c5eaa11bd0e282201e2abf40b1ee",
      name: contractNames.flow.FLOW_NFT_DESCRIPTOR,
    },
  ]),
  getDeployment("flow", ChainId.LINEA_SEPOLIA, [
    {
      address: "0xb0255ed1ee5c01dfe865c1b21bbf56a80f9ae739",
      name: contractNames.flow.SABLIER_FLOW,
    },
    {
      address: "0xcd8871a22640c57ba36984fb57e9c794f5df7f40",
      name: contractNames.flow.FLOW_NFT_DESCRIPTOR,
    },
  ]),
  getDeployment("flow", ChainId.MODE_TESTNET, [
    {
      address: "0xf5ac60870e1ccc4bfce23cfbb7a796a0d8dbaf47",
      name: contractNames.flow.SABLIER_FLOW,
    },
    {
      address: "0x1cae76b71913598d7664d16641ccb6037d8ed61a",
      name: contractNames.flow.FLOW_NFT_DESCRIPTOR,
    },
  ]),
  getDeployment("flow", ChainId.MORPH_HOLESKY, [
    {
      address: "0x9efc8663cab0e2d97ad17c9fbfc8392445517e94",
      name: contractNames.flow.SABLIER_FLOW,
    },
    {
      address: "0x3d664b2da905ddd0db931982fd9a759ea950d6e1",
      name: contractNames.flow.FLOW_NFT_DESCRIPTOR,
    },
  ]),
  getDeployment("flow", ChainId.OP_SEPOLIA, [
    {
      address: "0x417db0f2bd020fc4d6bccea6b2bb6be0c541862e",
      name: contractNames.flow.SABLIER_FLOW,
    },
    {
      address: "0x28401987a23ed9b8926b07f3b6855222a70c2128",
      name: contractNames.flow.FLOW_NFT_DESCRIPTOR,
    },
  ]),
  getDeployment("flow", ChainId.SUPERSEED_SEPOLIA, [
    {
      address: "0x905756b52efeaf75f6b1bb1bb0fc35eea15ae260",
      name: contractNames.flow.SABLIER_FLOW,
    },
    {
      address: "0xc43fb9fe4477d8e8bf68b9fd3a0163a4cffcbb31",
      name: contractNames.flow.FLOW_NFT_DESCRIPTOR,
    },
  ]),
  getDeployment("flow", ChainId.TAIKO_HEKLA, [
    {
      address: "0x29b7bafce0a04638dc91ca0b87a562cab8c3dbde",
      name: contractNames.flow.SABLIER_FLOW,
    },
    {
      address: "0xd45f45dd34045a368854f7987a84d9485b4b45e9",
      name: contractNames.flow.FLOW_NFT_DESCRIPTOR,
    },
  ]),
];

const deployments = [...mainnets, ...testnets];

export default deployments;
