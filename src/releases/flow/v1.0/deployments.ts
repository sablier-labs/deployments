import { ChainId } from "@src/chains/ids";
import type { Sablier } from "@src/types";
import { resolveDeployment } from "../../helpers";
import aliases from "./aliases";
import { names } from "./manifest";

function get(chainId: number, contractMap: Sablier.ContractMap): Sablier.Deployment {
  return resolveDeployment(chainId, contractMap, aliases);
}

/**
 * @description Mainnet deployments for Flow v1.0
 */
export const mainnets: Sablier.Deployment[] = [
  get(ChainId.ABSTRACT, {
    [names.SABLIER_FLOW]: "0x001F1408515Ccd5C1A19A682455ed4eFa39DadD6",
    [names.FLOW_NFT_DESCRIPTOR]: "0x20C9A3E27322Fc2b21Ced430D1B2e12d90804db6",
  }),
  get(ChainId.ARBITRUM_ONE, {
    [names.SABLIER_FLOW]: "0x18a12a7035aa56240bcd236bc019aa245dcc015a",
    [names.FLOW_NFT_DESCRIPTOR]: "0x900ebdb9ecfb19f9463d68d1fd6e5fa7ab9c6897",
  }),
  get(ChainId.AVALANCHE, {
    [names.SABLIER_FLOW]: "0x8c172e42c06302e3cfe555dc4d6b71a756ee186b",
    [names.FLOW_NFT_DESCRIPTOR]: "0x82ea83ab59b106c125168492cd468c322bd0d195",
  }),
  get(ChainId.BASE, {
    [names.SABLIER_FLOW]: "0x1a9adc0e2114c8407cc31669baafeee031d15dd2",
    [names.FLOW_NFT_DESCRIPTOR]: "0x8e64f389a4697e004647162ec6ea0a7779d5d899",
  }),
  get(ChainId.BERACHAIN, {
    [names.SABLIER_FLOW]: "0xA031544946ED769377128fBD961c9d621c4b4179",
    [names.FLOW_NFT_DESCRIPTOR]: "0x581250eE4311F7Dc1afCF965cF8024004B423e9E",
  }),
  get(ChainId.BLAST, {
    [names.SABLIER_FLOW]: "0xfdac2799644141856e20e021ac06f231cafc731f",
    [names.FLOW_NFT_DESCRIPTOR]: "0xb40624ce2af67227529f713bac46e2b7064b7b92",
  }),
  get(ChainId.BSC, {
    [names.SABLIER_FLOW]: "0xfce01f79247cf450062545e7155d7bd568551d0e",
    [names.FLOW_NFT_DESCRIPTOR]: "0xbc6fdd3f59900b9fcd445f8df159e2e794f098ec",
  }),
  get(ChainId.CHILIZ, {
    [names.SABLIER_FLOW]: "0x9EfC8663cAB0e2d97ad17C9fbfc8392445517E94",
    [names.FLOW_NFT_DESCRIPTOR]: "0x3D664B2Da905DDD0Db931982FD9a759ea950D6e1",
  }),
  get(ChainId.CORE_DAO, {
    [names.SABLIER_FLOW]: "0x447c6ea25540611541ff98fc677ca865f4e92450",
    [names.FLOW_NFT_DESCRIPTOR]: "0xbfaa055ecfe503e1323dc9fc26b7d3aa3bf54364",
  }),
  get(ChainId.ETHEREUM, {
    [names.SABLIER_FLOW]: "0x2d9221a63e12aa796619cb381ec4a71b201281f5",
    [names.FLOW_NFT_DESCRIPTOR]: "0xb69b27073fa0366cddf432f5976c34c9baf7eae6",
  }),
  get(ChainId.GNOSIS, {
    [names.SABLIER_FLOW]: "0x5515f774a4db42820802333ba575f68a6e85bd13",
    [names.FLOW_NFT_DESCRIPTOR]: "0xc07c1128c19c2bf303b68ae061eff5293927630e",
  }),
  get(ChainId.IOTEX, {
    [names.SABLIER_FLOW]: "0x1DdC1c21CD39c2Fa16366E6036c95342A31831Ba",
    [names.FLOW_NFT_DESCRIPTOR]: "0x83Dd52FCA44E069020b58155b761A590F12B59d3",
  }),
  get(ChainId.LIGHTLINK, {
    [names.SABLIER_FLOW]: "0x46fa0164c5af9382d330e5a245a2ca8a18398950",
    [names.FLOW_NFT_DESCRIPTOR]: "0xa2a48b83b6c96e1536336df9ead024d557a97a23",
  }),
  get(ChainId.LINEA, {
    [names.SABLIER_FLOW]: "0x949bFa08f1632432A2656a9dB17CA34d54Da8296",
    [names.FLOW_NFT_DESCRIPTOR]: "0xF430f0d2f798c42fDFAc35b5e32BD4f63Bf51130",
  }),
  get(ChainId.MODE, {
    [names.SABLIER_FLOW]: "0x75970dde488431fc4961494569def3269f20d6b3",
    [names.FLOW_NFT_DESCRIPTOR]: "0x46fa0164c5af9382d330e5a245a2ca8a18398950",
  }),
  get(ChainId.MORPH, {
    [names.SABLIER_FLOW]: "0xfe6972d0ae797fae343e5a58d0c7d8513937f092",
    [names.FLOW_NFT_DESCRIPTOR]: "0xab281bbc2bc34a1f202ddff17ffd1c00edf73f3a",
  }),
  get(ChainId.OP_MAINNET, {
    [names.SABLIER_FLOW]: "0x906356e4e6410ea0a97dbc5b071cf394ab0dcd69",
    [names.FLOW_NFT_DESCRIPTOR]: "0xe674fb603d6f72b88bf297c1ba69f57b588a8f6d",
  }),
  get(ChainId.POLYGON, {
    [names.SABLIER_FLOW]: "0xcf2d812d5aad4e6fec3b05850ff056b21159d496",
    [names.FLOW_NFT_DESCRIPTOR]: "0x011277c87158e52cfbd8a1dd4a29118d602dda3a",
  }),
  get(ChainId.SCROLL, {
    [names.SABLIER_FLOW]: "0x66826f53bffeaab71adc7fe1a77e86f8268848d8",
    [names.FLOW_NFT_DESCRIPTOR]: "0x57fd892b3dc20eadb83cd8fb0240a87960046daa",
  }),
  get(ChainId.SUPERSEED, {
    [names.SABLIER_FLOW]: "0x4f5f9b3fb57bba43aaf90e3f71d8f8f384e88e20",
    [names.FLOW_NFT_DESCRIPTOR]: "0xac2c36347869d8d779f7872c6202de3efd6ef2bb",
  }),
  get(ChainId.TAIKO, {
    [names.SABLIER_FLOW]: "0x3d303e4c61285f87da9f61aaadc8c89b7d55dfa2",
    [names.FLOW_NFT_DESCRIPTOR]: "0xe790b6178612eeba6faeec16a2e1354c872f8bde",
  }),
  get(ChainId.TANGLE, {
    [names.SABLIER_FLOW]: "0xCff4a803b0Bf55dD1BE38Fb96088478F3D2eeCF2",
    [names.FLOW_NFT_DESCRIPTOR]: "0x2De92156000269fa2fde7544F10f01E8cBC80fFa",
  }),
  get(ChainId.ZK_SYNC_ERA, {
    [names.SABLIER_FLOW]: "0x015899a075B7C181e357Cd0ed000683DBB4F1FcE",
    [names.FLOW_NFT_DESCRIPTOR]: "0x01C40608f2822816cF25a0a911c1df330487ba62",
  }),
];

/**
 * @description Testnet deployments for Flow v1.0
 */
export const testnets: Sablier.Deployment[] = [
  get(ChainId.ARBITRUM_SEPOLIA, {
    [names.SABLIER_FLOW]: "0x781b3b2527f2a0a1e6b429161f2717a8a28b9f46",
    [names.FLOW_NFT_DESCRIPTOR]: "0x9a08e6ae67c28002ee2c7cff9badecd33ae2151c",
  }),
  get(ChainId.BASE_SEPOLIA, {
    [names.SABLIER_FLOW]: "0xd5f78708d83ac2bc8734a8cdf2d112c1bb3b62a2",
    [names.FLOW_NFT_DESCRIPTOR]: "0x168ad0b246f604bc70bef87ecde585c3f1d49617",
  }),
  get(ChainId.BLAST_SEPOLIA, {
    [names.SABLIER_FLOW]: "0xa8c864c53e72301c2ab484d013627a5a7084174b",
    [names.FLOW_NFT_DESCRIPTOR]: "0x567a95aa72a23b924f79dfa437d28c38740e144c",
  }),
  get(ChainId.ETHEREUM_SEPOLIA, {
    [names.SABLIER_FLOW]: "0x5ae8c13f6ae094887322012425b34b0919097d8a",
    [names.FLOW_NFT_DESCRIPTOR]: "0xbc4da2fbdfe5c5eaa11bd0e282201e2abf40b1ee",
  }),
  get(ChainId.LINEA_SEPOLIA, {
    [names.SABLIER_FLOW]: "0xb0255ed1ee5c01dfe865c1b21bbf56a80f9ae739",
    [names.FLOW_NFT_DESCRIPTOR]: "0xcd8871a22640c57ba36984fb57e9c794f5df7f40",
  }),
  get(ChainId.MODE_TESTNET, {
    [names.SABLIER_FLOW]: "0xf5ac60870e1ccc4bfce23cfbb7a796a0d8dbaf47",
    [names.FLOW_NFT_DESCRIPTOR]: "0x1cae76b71913598d7664d16641ccb6037d8ed61a",
  }),
  get(ChainId.MORPH_HOLESKY, {
    [names.SABLIER_FLOW]: "0x9efc8663cab0e2d97ad17c9fbfc8392445517e94",
    [names.FLOW_NFT_DESCRIPTOR]: "0x3d664b2da905ddd0db931982fd9a759ea950d6e1",
  }),
  get(ChainId.OP_SEPOLIA, {
    [names.SABLIER_FLOW]: "0x417db0f2bd020fc4d6bccea6b2bb6be0c541862e",
    [names.FLOW_NFT_DESCRIPTOR]: "0x28401987a23ed9b8926b07f3b6855222a70c2128",
  }),
  get(ChainId.SUPERSEED_SEPOLIA, {
    [names.SABLIER_FLOW]: "0x905756b52efeaf75f6b1bb1bb0fc35eea15ae260",
    [names.FLOW_NFT_DESCRIPTOR]: "0xc43fb9fe4477d8e8bf68b9fd3a0163a4cffcbb31",
  }),
  get(ChainId.TAIKO_HEKLA, {
    [names.SABLIER_FLOW]: "0x29b7bafce0a04638dc91ca0b87a562cab8c3dbde",
    [names.FLOW_NFT_DESCRIPTOR]: "0xd45f45dd34045a368854f7987a84d9485b4b45e9",
  }),
  get(ChainId.ZK_SYNC_SEPOLIA, {
    [names.SABLIER_FLOW]: "0x8e70296F8972eBE94d885B1Caf94Da4836976140",
    [names.FLOW_NFT_DESCRIPTOR]: "0x900277DBB45a04eB79028b3A44c650Ac81Ca86c4",
  }),
];
