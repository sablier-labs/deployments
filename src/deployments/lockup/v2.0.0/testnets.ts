import { ChainId } from "../../../chains/ids";
import contractNames from "../../../contract-names";
import { getChainDeployment } from "../../../helpers";
import type { Sablier } from "../../../types";

/**
 * @description Testnet deployments for Lockup v2.0.0
 */
const testnets: Record<number, Sablier.Deployment> = {
  ...getChainDeployment("lockup", ChainId.ARBITRUM_SEPOLIA, [
    {
      address: "0xbf85cD17cA59b7A2b81d3D776cE1602a7C0aF9D9",
      name: contractNames.lockup.SABLIER_BATCH_LOCKUP,
    },
    {
      address: "0x83Dd52FCA44E069020b58155b761A590F12B59d3",
      name: contractNames.lockup.SABLIER_LOCKUP,
    },
    {
      address: "0x8224eb5D7d76B2D7Df43b868D875E79B11500eA8",
      name: contractNames.lockup.LOCKUP_NFT_DESCRIPTOR,
    },
    {
      address: "0xf8076E4Fb5cfE8be1C26E61222DC51828Db8C1dc",
      name: contractNames.lockup.HELPERS,
    },
    {
      address: "0x5522CA06Ce080800AB59BA4C091e63f6f54C5E6d",
      name: contractNames.lockup.VESTING_MATH,
    },
  ]),
  ...getChainDeployment("lockup", ChainId.BASE_SEPOLIA, [
    {
      address: "0xEdc716E9672f672456d22b02532395c1e62B8C16",
      name: contractNames.lockup.SABLIER_BATCH_LOCKUP,
    },
    {
      address: "0xa4777CA525d43a7aF55D45b11b430606d7416f8d",
      name: contractNames.lockup.SABLIER_LOCKUP,
    },
    {
      address: "0xCA2593027BA24856c292Fdcb5F987E0c25e755a4",
      name: contractNames.lockup.LOCKUP_NFT_DESCRIPTOR,
    },
    {
      address: "0xf8076E4Fb5cfE8be1C26E61222DC51828Db8C1dc",
      name: contractNames.lockup.HELPERS,
    },
    {
      address: "0x5522CA06Ce080800AB59BA4C091e63f6f54C5E6d",
      name: contractNames.lockup.VESTING_MATH,
    },
  ]),
  ...getChainDeployment("lockup", ChainId.BLAST_SEPOLIA, [
    {
      address: "0x30FC3D5b53e17edbC72d0a488f10C0eD3d7b0893",
      name: contractNames.lockup.SABLIER_BATCH_LOCKUP,
    },
    {
      address: "0x3fC9E80478c65759a8273CD9dFe2D7011b45164E",
      name: contractNames.lockup.SABLIER_LOCKUP,
    },
    {
      address: "0xF0182C7c0F155CdB49B575cFB5Fe7b3cE94D2234",
      name: contractNames.lockup.LOCKUP_NFT_DESCRIPTOR,
    },
    {
      address: "0xf8076E4Fb5cfE8be1C26E61222DC51828Db8C1dc",
      name: contractNames.lockup.HELPERS,
    },
    {
      address: "0x5522CA06Ce080800AB59BA4C091e63f6f54C5E6d",
      name: contractNames.lockup.VESTING_MATH,
    },
  ]),
  ...getChainDeployment("lockup", ChainId.ETHEREUM_SEPOLIA, [
    {
      address: "0xB655ecD83D27f7c683A9605783bd2866a4dCEB04",
      name: contractNames.lockup.SABLIER_BATCH_LOCKUP,
    },
    {
      address: "0xd116c275541cdBe7594A202bD6AE4DBca4578462",
      name: contractNames.lockup.SABLIER_LOCKUP,
    },
    {
      address: "0x08D3C81626d9Cb19760835e8730Ec0D3F1899976",
      name: contractNames.lockup.LOCKUP_NFT_DESCRIPTOR,
    },
    {
      address: "0xf8076E4Fb5cfE8be1C26E61222DC51828Db8C1dc",
      name: contractNames.lockup.HELPERS,
    },
    {
      address: "0x5522CA06Ce080800AB59BA4C091e63f6f54C5E6d",
      name: contractNames.lockup.VESTING_MATH,
    },
  ]),
  ...getChainDeployment("lockup", ChainId.LINEA_SEPOLIA, [
    {
      address: "0x9A987181BF05b7C154118A3216d522fa2407a8Be",
      name: contractNames.lockup.SABLIER_BATCH_LOCKUP,
    },
    {
      address: "0xbb4A14868A4BEc78b7354582b8C818ba520d7A4E",
      name: contractNames.lockup.SABLIER_LOCKUP,
    },
    {
      address: "0xCE94BE25320A51Ac868d0C133c251aE10682DabD",
      name: contractNames.lockup.LOCKUP_NFT_DESCRIPTOR,
    },
    {
      address: "0xf8076E4Fb5cfE8be1C26E61222DC51828Db8C1dc",
      name: contractNames.lockup.HELPERS,
    },
    {
      address: "0x5522CA06Ce080800AB59BA4C091e63f6f54C5E6d",
      name: contractNames.lockup.VESTING_MATH,
    },
  ]),
  ...getChainDeployment("lockup", ChainId.MODE_TESTNET, [
    {
      address: "0xaD2f0228369D71605cd19c33FfA2Dde85A2FE477",
      name: contractNames.lockup.SABLIER_BATCH_LOCKUP,
    },
    {
      address: "0xF56b79523FD0b4A6c9bf4e6F7a3Ea45dC0fB5bBC",
      name: contractNames.lockup.SABLIER_LOCKUP,
    },
    {
      address: "0xdd695e927b97460c8d454d8f6d8cd797dcf1fcfd",
      name: contractNames.lockup.LOCKUP_NFT_DESCRIPTOR,
    },
    {
      address: "0xf8076E4Fb5cfE8be1C26E61222DC51828Db8C1dc",
      name: contractNames.lockup.HELPERS,
    },
    {
      address: "0x5522CA06Ce080800AB59BA4C091e63f6f54C5E6d",
      name: contractNames.lockup.VESTING_MATH,
    },
  ]),
  ...getChainDeployment("lockup", ChainId.MORPH_HOLESKY, [
    {
      address: "0x9efc8663cab0e2d97ad17c9fbfc8392445517e94",
      name: contractNames.lockup.SABLIER_BATCH_LOCKUP,
    },
    {
      address: "0x9a08e6ae67c28002ee2c7cff9badecd33ae2151c",
      name: contractNames.lockup.SABLIER_LOCKUP,
    },
    {
      address: "0x9a08e6ae67c28002ee2c7cff9badecd33ae2151c",
      name: contractNames.lockup.LOCKUP_NFT_DESCRIPTOR,
    },
    {
      address: "0xf8076E4Fb5cfE8be1C26E61222DC51828Db8C1dc",
      name: contractNames.lockup.HELPERS,
    },
    {
      address: "0x5522CA06Ce080800AB59BA4C091e63f6f54C5E6d",
      name: contractNames.lockup.VESTING_MATH,
    },
  ]),
  ...getChainDeployment("lockup", ChainId.OP_SEPOLIA, [
    {
      address: "0xF7BA8a7dc96d1939b789b91865bdb05596EBB558",
      name: contractNames.lockup.SABLIER_BATCH_LOCKUP,
    },
    {
      address: "0x1f898895eAB949FfD34c29Cf859C035DC4525DF4",
      name: contractNames.lockup.SABLIER_LOCKUP,
    },
    {
      address: "0xDf6163ddD3Ebcb552Cc1379a9c65AFe68683534e",
      name: contractNames.lockup.LOCKUP_NFT_DESCRIPTOR,
    },
    {
      address: "0xf8076E4Fb5cfE8be1C26E61222DC51828Db8C1dc",
      name: contractNames.lockup.HELPERS,
    },
    {
      address: "0x5522CA06Ce080800AB59BA4C091e63f6f54C5E6d",
      name: contractNames.lockup.VESTING_MATH,
    },
  ]),
  ...getChainDeployment("lockup", ChainId.SUPERSEED_SEPOLIA, [
    {
      address: "0xB2C6C57ee10B88E8344f34ffeCe39B0C6573c23D",
      name: contractNames.lockup.SABLIER_BATCH_LOCKUP,
    },
    {
      address: "0x4E83EC1Ea3B885C1a3698dA7DC42F32575688ABE",
      name: contractNames.lockup.SABLIER_LOCKUP,
    },
    {
      address: "0xc5D8E4317CE4a2E323192A5d856C90372bDE1558",
      name: contractNames.lockup.LOCKUP_NFT_DESCRIPTOR,
    },
    {
      address: "0xf8076E4Fb5cfE8be1C26E61222DC51828Db8C1dc",
      name: contractNames.lockup.HELPERS,
    },
    {
      address: "0x5522CA06Ce080800AB59BA4C091e63f6f54C5E6d",
      name: contractNames.lockup.VESTING_MATH,
    },
  ]),
  ...getChainDeployment("lockup", ChainId.TAIKO_HEKLA, [
    {
      address: "0x5F62Be3b60c3Dc3D49e96Ee8390Fea2930A3E01b",
      name: contractNames.lockup.SABLIER_BATCH_LOCKUP,
    },
    {
      address: "0xa969f0CCc080dfd513Eb7175248df68364701fC2",
      name: contractNames.lockup.SABLIER_LOCKUP,
    },
    {
      address: "0x4a92Ca0a777fd781B3aA1d7925Ad54B64C85eedE",
      name: contractNames.lockup.LOCKUP_NFT_DESCRIPTOR,
    },
    {
      address: "0xf8076E4Fb5cfE8be1C26E61222DC51828Db8C1dc",
      name: contractNames.lockup.HELPERS,
    },
    {
      address: "0x5522CA06Ce080800AB59BA4C091e63f6f54C5E6d",
      name: contractNames.lockup.VESTING_MATH,
    },
  ]),
};

export default testnets;
