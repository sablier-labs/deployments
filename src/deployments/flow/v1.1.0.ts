import { ChainId } from "../../chains/ids";
import contractNames from "../../contract-names";
import { getDeployment } from "../../helpers";
/* -------------------------------------------------------------------------- */
/*                                  Mainnets                                  */
/* -------------------------------------------------------------------------- */

const mainnets = [
  getDeployment("flow", ChainId.ABSTRACT, [
    {
      address: "0x555B0766f494c641bb522086da4E728AC08c1420",
      name: contractNames.flow.SABLIER_FLOW,
    },
    {
      address: "0x6CefdBc5Ba80937235F012c83d6aA83F1200d6cC",
      name: contractNames.flow.FLOW_NFT_DESCRIPTOR,
    },
  ]),
  getDeployment("flow", ChainId.ARBITRUM_ONE, [
    {
      address: "0x87CF87ec5de33DeB4a88787065373563Ba85Ee72",
      name: contractNames.flow.SABLIER_FLOW,
    },
    {
      address: "0x5F23eF12A7e861CB92c24B4314Af2A5F363CDD4F",
      name: contractNames.flow.FLOW_NFT_DESCRIPTOR,
    },
  ]),
  getDeployment("flow", ChainId.AVALANCHE, [
    {
      address: "0xac7CB985d4022A5Ebd4a385374ac3d3B487b3C63",
      name: contractNames.flow.SABLIER_FLOW,
    },
    {
      address: "0xb09b714B0feC83675E09fc997B7D532cF6620326",
      name: contractNames.flow.FLOW_NFT_DESCRIPTOR,
    },
  ]),
  getDeployment("flow", ChainId.BASE, [
    {
      address: "0x6FE93c7f6cd1DC394e71591E3c42715Be7180A6A",
      name: contractNames.flow.SABLIER_FLOW,
    },
    {
      address: "0x5b5e742305Be3A484EacCB124C83456463c24E6a",
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
      address: "0x16b50eb5eAeF0366f1A4da594e2A8c8943A297e0",
      name: contractNames.flow.SABLIER_FLOW,
    },
    {
      address: "0x92f1dB592C771D9Ec7708abFEe79771AbC1b4fAd",
      name: contractNames.flow.FLOW_NFT_DESCRIPTOR,
    },
  ]),
  getDeployment("flow", ChainId.BSC, [
    {
      address: "0x4C4610aF3f3861EC99b6F6F8066C03E4C3a0E023",
      name: contractNames.flow.SABLIER_FLOW,
    },
    {
      address: "0xAE557c04B46d47Ecac24edA63F22cabB4571Da61",
      name: contractNames.flow.FLOW_NFT_DESCRIPTOR,
    },
  ]),
  getDeployment("flow", ChainId.CHILIZ, [
    {
      address: "0x28eAB88ee8a951F78e1028557D0C3fD97af61A33",
      name: contractNames.flow.SABLIER_FLOW,
    },
    {
      address: "0xC7fd18CA19938d559dC45aDE362a850015CF0bd8",
      name: contractNames.flow.FLOW_NFT_DESCRIPTOR,
    },
  ]),
  getDeployment("flow", ChainId.CORE_DAO, [
    {
      address: "0xa0aE7F1bE0DB024Beda05c80722413EDDe7231Bd",
      name: contractNames.flow.SABLIER_FLOW,
    },
    {
      address: "0x7293F2D4A4e676EF67C085E92277AdF560AECb88",
      name: contractNames.flow.FLOW_NFT_DESCRIPTOR,
    },
  ]),
  getDeployment("flow", ChainId.ETHEREUM, [
    {
      address: "0x3DF2AAEdE81D2F6b261F79047517713B8E844E04",
      name: contractNames.flow.SABLIER_FLOW,
    },
    {
      address: "0x24bE13897eE1F83367661B6bA616a72523fC55C9",
      name: contractNames.flow.FLOW_NFT_DESCRIPTOR,
    },
  ]),
  getDeployment("flow", ChainId.FORM, [
    {
      address: "0x5dd399bb320412dF92Df5c10484d3F8d481FE231",
      name: contractNames.flow.SABLIER_FLOW,
    },
    {
      address: "0x88E64227D4DcF8De1141bb0807A9DC04a5Be9251",
      name: contractNames.flow.FLOW_NFT_DESCRIPTOR,
    },
  ]),
  getDeployment("flow", ChainId.GNOSIS, [
    {
      address: "0x34Bc0C2BF1F2DA51c65cd821bA4133aFCacdb8f5",
      name: contractNames.flow.SABLIER_FLOW,
    },
    {
      address: "0x5A47FC8732d399a2f3845c4FC91aB91bb97da31F",
      name: contractNames.flow.FLOW_NFT_DESCRIPTOR,
    },
  ]),
  getDeployment("flow", ChainId.LIGHTLINK, [
    {
      address: "0x89d964E0b508234bCfDc7a32aE0aA0356f422B70",
      name: contractNames.flow.SABLIER_FLOW,
    },
    {
      address: "0xc58E948Cb0a010105467C92856bcd4842B759fb1",
      name: contractNames.flow.FLOW_NFT_DESCRIPTOR,
    },
  ]),
  getDeployment("flow", ChainId.LINEA, [
    {
      address: "0xEFc6e4C7DC5faA0CfBFEbB5e04eA7Cd47f64012f",
      name: contractNames.flow.SABLIER_FLOW,
    },
    {
      address: "0x294D7fceBa43C4507771707CeBBB7b6d81d0BFdE",
      name: contractNames.flow.FLOW_NFT_DESCRIPTOR,
    },
  ]),
  getDeployment("flow", ChainId.MODE, [
    {
      address: "0xc968E8eEFe19BD6De8868df40D9740Be127a172a",
      name: contractNames.flow.SABLIER_FLOW,
    },
    {
      address: "0xD9E2822a33606741BeDbA31614E68A745e430102",
      name: contractNames.flow.FLOW_NFT_DESCRIPTOR,
    },
  ]),
  getDeployment("flow", ChainId.MORPH, [
    {
      address: "0xf31c8E7D9a0Bd310a9d5Fb317ba67BB1f0101c6D",
      name: contractNames.flow.SABLIER_FLOW,
    },
    {
      address: "0x1dd4dcE2BB742908b4062E583d9c035973413A3F",
      name: contractNames.flow.FLOW_NFT_DESCRIPTOR,
    },
  ]),
  getDeployment("flow", ChainId.OP_MAINNET, [
    {
      address: "0xC5612feA2D370127ac67048115bd6b1dF7b7F7C0",
      name: contractNames.flow.SABLIER_FLOW,
    },
    {
      address: "0x7AD245b74bBC1B71Da1713D53238931F791b90A3",
      name: contractNames.flow.FLOW_NFT_DESCRIPTOR,
    },
  ]),
  getDeployment("flow", ChainId.POLYGON, [
    {
      address: "0x3e5c4130Ea7cfbD364FA5f170289d697865cA94b",
      name: contractNames.flow.SABLIER_FLOW,
    },
    {
      address: "0x87B836a9e26673feB3E409A0da2EAf99C79f26C3",
      name: contractNames.flow.FLOW_NFT_DESCRIPTOR,
    },
  ]),
  getDeployment("flow", ChainId.SCROLL, [
    {
      address: "0xC4F104cE12cb12484Ff67cF0C4Bd0561F0014ec2",
      name: contractNames.flow.SABLIER_FLOW,
    },
    {
      address: "0x797Fe78c41d9cbE81BBEA2f420101be5e47d2aFf",
      name: contractNames.flow.FLOW_NFT_DESCRIPTOR,
    },
  ]),
  getDeployment("flow", ChainId.SEI, [
    {
      address: "0xdEF70082ebda4944A55311624900E42A720b4Ec9",
      name: contractNames.flow.SABLIER_FLOW,
    },
    {
      address: "0xF3D18b06c87735a58DAb3baC45af058b3772fD54",
      name: contractNames.flow.FLOW_NFT_DESCRIPTOR,
    },
  ]),
  getDeployment("flow", ChainId.SUPERSEED, [
    {
      address: "0x40E75bb2F2aA3507D3a332872829c71be19eF623",
      name: contractNames.flow.SABLIER_FLOW,
    },
    {
      address: "0xd932fDA016eE9d9F70f745544b4F56715b1E723b",
      name: contractNames.flow.FLOW_NFT_DESCRIPTOR,
    },
  ]),
  getDeployment("flow", ChainId.TAIKO, [
    {
      address: "0x9d4bc7f013cCddAE1658dc28F981C2D424d7F0Dd",
      name: contractNames.flow.SABLIER_FLOW,
    },
    {
      address: "0x80Bde7C505eFE9960b673567CB25Cd8af85552BE",
      name: contractNames.flow.FLOW_NFT_DESCRIPTOR,
    },
  ]),
  getDeployment("flow", ChainId.UNICHAIN, [
    {
      address: "0x9797B40340be0bFc9EC0dBb8712627Bcdd17E771",
      name: contractNames.flow.SABLIER_FLOW,
    },
    {
      address: "0x89824A7e48dcf6B7AE9DeE6E566f62A5aDF037F2",
      name: contractNames.flow.FLOW_NFT_DESCRIPTOR,
    },
  ]),
  getDeployment("flow", ChainId.XDC, [
    {
      address: "0xD6482334242862951dA3E730F818c3f6E3f45A30",
      name: contractNames.flow.SABLIER_FLOW,
    },
    {
      address: "0x9D3F0122b260D2218ecf681c416495882003deDd",
      name: contractNames.flow.FLOW_NFT_DESCRIPTOR,
    },
  ]),
  getDeployment("flow", ChainId.ZK_SYNC_ERA, [
    {
      address: "0xE3747379bF7282e0ab5389A63eA053a5256042df",
      name: contractNames.flow.SABLIER_FLOW,
    },
    {
      address: "0x423C1b454250992Ede8516D36DE456F609714B53",
      name: contractNames.flow.FLOW_NFT_DESCRIPTOR,
    },
  ]),
];

/* -------------------------------------------------------------------------- */
/*                                  Testnets                                  */
/* -------------------------------------------------------------------------- */

const testnets = [
  getDeployment("flow", ChainId.ARBITRUM_SEPOLIA, [
    {
      address: "0xF9cbfFAe10010475A2800a5eFC11f4D4780cA48d",
      name: contractNames.flow.SABLIER_FLOW,
    },
    {
      address: "0x3E64A31C3974b6ae9f09a8fbc784519bF551e795",
      name: contractNames.flow.FLOW_NFT_DESCRIPTOR,
    },
  ]),
  getDeployment("flow", ChainId.BASE_SEPOLIA, [
    {
      address: "0xFB6B72a5988A7701a9090C56936269241693a9CC",
      name: contractNames.flow.SABLIER_FLOW,
    },
    {
      address: "0xcb5591F6d0e0fFC03037ef7b006D1361C6D33D25",
      name: contractNames.flow.FLOW_NFT_DESCRIPTOR,
    },
  ]),
  getDeployment("flow", ChainId.BLAST_SEPOLIA, [
    {
      address: "0x027b55FD4b26A78a0463304C63f35e97A35246FD",
      name: contractNames.flow.SABLIER_FLOW,
    },
    {
      address: "0x42Abaf2c1E36624FD0084998A9BeA4a753A93e45",
      name: contractNames.flow.FLOW_NFT_DESCRIPTOR,
    },
  ]),
  getDeployment("flow", ChainId.ETHEREUM_SEPOLIA, [
    {
      address: "0x93FE8f86e881a23e5A2FEB4B160514Fd332576A6",
      name: contractNames.flow.SABLIER_FLOW,
    },
    {
      address: "0xc9dBf2D207D178875b698e5f7493ce2d8BA88994",
      name: contractNames.flow.FLOW_NFT_DESCRIPTOR,
    },
  ]),
  getDeployment("flow", ChainId.LINEA_SEPOLIA, [
    {
      address: "0x3D0804610dE1b8DC19B1DDf90C26d5a51ab2B6b6",
      name: contractNames.flow.SABLIER_FLOW,
    },
    {
      address: "0xbd17DFd74078dB49f12101Ca929b5153E924e9C7",
      name: contractNames.flow.FLOW_NFT_DESCRIPTOR,
    },
  ]),
  getDeployment("flow", ChainId.MODE_TESTNET, [
    {
      address: "0x1063D400953441F1C6d8EF6406e1E6aa5684B82d",
      name: contractNames.flow.SABLIER_FLOW,
    },
    {
      address: "0xe1eDdA64eea2173a015A3738171C3a1C263324C7",
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
      address: "0x77873085a88189c8B82B3a01BcbC294108D02805",
      name: contractNames.flow.SABLIER_FLOW,
    },
    {
      address: "0x4739327acfb56E90177d44Cb0845e759276BCA88",
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
      address: "0xb528AF43fFEe6d4B702CF6235d2380e1828eD852",
      name: contractNames.flow.SABLIER_FLOW,
    },
    {
      address: "0xB197D4142b9DBf34979588cf8BF1222Ea3907916",
      name: contractNames.flow.FLOW_NFT_DESCRIPTOR,
    },
  ]),
];

const deployments = [...mainnets, ...testnets];

export default deployments;
