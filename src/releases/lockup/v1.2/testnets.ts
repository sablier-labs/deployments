import { ChainId } from "@src/chains/ids";
import { getDeploymentLockupV1, sortDeployments } from "@src/helpers";
import type { Sablier } from "@src/types";
import manifest from "./manifest";
/**
 * @description Testnet deployments for Lockup v1.2
 */
const testnets: Sablier.DeploymentLockupV1[] = [
  getDeploymentLockupV1(ChainId.ETHEREUM_SEPOLIA, {
    core: {
      [manifest.core.SABLIER_V2_LOCKUP_DYNAMIC]: "0x73BB6dD3f5828d60F8b3dBc8798EB10fbA2c5636",
      [manifest.core.SABLIER_V2_LOCKUP_LINEAR]: "0x3E435560fd0a03ddF70694b35b673C25c65aBB6C",
      [manifest.core.SABLIER_V2_LOCKUP_TRANCHED]: "0x3a1beA13A8C24c0EA2b8fAE91E4b2762A59D7aF5",
      [manifest.core.SABLIER_V2_NFT_DESCRIPTOR]: "0x56F2f7f4d15d1A9FF9d3782b6F6bB8f6fd690D33",
    },
    periphery: {
      [manifest.periphery.SABLIER_V2_BATCH_LOCKUP]: "0x04A9c14b7a000640419aD5515Db4eF4172C00E31",
      [manifest.periphery.SABLIER_V2_MERKLE_LOCKUP_FACTORY]: "0x56E9180A8d2C35c99F2F8a1A5Ab8aBe79E876E8c",
    },
  }),
  getDeploymentLockupV1(ChainId.ARBITRUM_SEPOLIA, {
    core: {
      [manifest.core.SABLIER_V2_LOCKUP_DYNAMIC]: "0x8127E8081C22807c8a786Af1e1b174939577144A",
      [manifest.core.SABLIER_V2_LOCKUP_LINEAR]: "0x9D1C257d9bc09E6E6B8E7e7c2496C12000f55457",
      [manifest.core.SABLIER_V2_LOCKUP_TRANCHED]: "0xaff2efFCF38Ea4A92E0cC5D7c48456C53358fE1a",
      [manifest.core.SABLIER_V2_NFT_DESCRIPTOR]: "0x46AEd4FE32aE1306d8073FE54A4E844e10a3ca16",
    },
    periphery: {
      [manifest.periphery.SABLIER_V2_BATCH_LOCKUP]: "0xC1FD380b3B0fF989C259D0b45B97F9663B638aA4",
      [manifest.periphery.SABLIER_V2_MERKLE_LOCKUP_FACTORY]: "0xa11561F9e418f2C431B411E1CA22FD3F85D4c831",
    },
  }),
  getDeploymentLockupV1(ChainId.BASE_SEPOLIA, {
    core: {
      [manifest.core.SABLIER_V2_LOCKUP_DYNAMIC]: "0x6DCB73E5F7e8e70bE20b3B9CF50E3be4625A91C3",
      [manifest.core.SABLIER_V2_LOCKUP_LINEAR]: "0xFE7fc0Bbde84C239C0aB89111D617dC7cc58049f",
      [manifest.core.SABLIER_V2_LOCKUP_TRANCHED]: "0xb8c724df3eC8f2Bf8fA808dF2cB5dbab22f3E68c",
      [manifest.core.SABLIER_V2_NFT_DESCRIPTOR]: "0x474dFf3Cdd6489523947bf08D538F56d07Ca699e",
    },
    periphery: {
      [manifest.periphery.SABLIER_V2_BATCH_LOCKUP]: "0x23d0B7691F4Ca0E5477132a7C7F54fdCEd1814B9",
      [manifest.periphery.SABLIER_V2_MERKLE_LOCKUP_FACTORY]: "0x899a05feb160fe912f621733A1d0b39C1446B3eB",
    },
  }),
  getDeploymentLockupV1(ChainId.BLAST_SEPOLIA, {
    core: {
      [manifest.core.SABLIER_V2_LOCKUP_DYNAMIC]: "0x9dA09f4887FD3a78Ea237F74a456a82e4301F3D4",
      [manifest.core.SABLIER_V2_LOCKUP_LINEAR]: "0x07f1386803ab6e1D8b6AABD50A9772E45bEA08f1",
      [manifest.core.SABLIER_V2_LOCKUP_TRANCHED]: "0x7eB79ab3652713bBE989e7A0dCA61ba484CAED85",
      [manifest.core.SABLIER_V2_NFT_DESCRIPTOR]: "0x93c0c4a57573C7056D7d63B536e33E28FB3ec2EE",
    },
    periphery: {
      [manifest.periphery.SABLIER_V2_BATCH_LOCKUP]: "0xAC83E6aDA41a9251516601d8D5D0188466044Cc1",
      [manifest.periphery.SABLIER_V2_MERKLE_LOCKUP_FACTORY]: "0xb9fCF1f73DD941Dd1C589fCf8545E60133EE5eC2",
    },
  }),
  getDeploymentLockupV1(ChainId.LINEA_SEPOLIA, {
    core: {
      [manifest.core.SABLIER_V2_LOCKUP_DYNAMIC]: "0x95D29708be647BDD8dA0bdF82B84eB5f42d45918",
      [manifest.core.SABLIER_V2_LOCKUP_LINEAR]: "0x435F33C21B9Ea8BF207785616Bb28C46eDeD7366",
      [manifest.core.SABLIER_V2_LOCKUP_TRANCHED]: "0x5A52E9F4dFcdBcd68E50386D484378718167aB60",
      [manifest.core.SABLIER_V2_NFT_DESCRIPTOR]: "0x237f114a9cF62b87383684529d889DdfEd917f0c",
    },
    periphery: {
      [manifest.periphery.SABLIER_V2_BATCH_LOCKUP]: "0x8224eb5D7d76B2D7Df43b868D875E79B11500eA8",
      [manifest.periphery.SABLIER_V2_MERKLE_LOCKUP_FACTORY]: "0x83Dd52FCA44E069020b58155b761A590F12B59d3",
    },
  }),
  getDeploymentLockupV1(ChainId.MODE_TESTNET, {
    core: {
      [manifest.core.SABLIER_V2_LOCKUP_DYNAMIC]: "0x5cD39Ec69F0Ed62733d0DA3E083E451334bA1f70",
      [manifest.core.SABLIER_V2_LOCKUP_LINEAR]: "0x61861e4C72EE2F6967C852FE79Eac0E7a9C4f466",
      [manifest.core.SABLIER_V2_LOCKUP_TRANCHED]: "0xc51346d1FD003E536530584eb4c8974BB279712D",
      [manifest.core.SABLIER_V2_NFT_DESCRIPTOR]: "0xD3c856A7333c264475aD87F9E6f84Ef376AE250D",
    },
    periphery: {
      [manifest.periphery.SABLIER_V2_BATCH_LOCKUP]: "0xece83740834694A6E204825e5bcD8774F26a2665",
      [manifest.periphery.SABLIER_V2_MERKLE_LOCKUP_FACTORY]: "0x900de6cC1021afa13f41e1067bEE681BbD661C69",
    },
  }),
  getDeploymentLockupV1(ChainId.MORPH_HOLESKY, {
    core: {
      [manifest.core.SABLIER_V2_LOCKUP_DYNAMIC]: "0x36477f8FEf1fC3B0fe7F24b8F6d9561f0BeC30e7",
      [manifest.core.SABLIER_V2_LOCKUP_LINEAR]: "0x4b4126036726085636BC2A4788a448d5C26705E4",
      [manifest.core.SABLIER_V2_LOCKUP_TRANCHED]: "0x6AF155530D6360E789deD0CF88219f855CCb158F",
      [manifest.core.SABLIER_V2_NFT_DESCRIPTOR]: "0x33BE6a7810B464B913052EC0436A067de25C164c",
    },
    periphery: {
      [manifest.periphery.SABLIER_V2_BATCH_LOCKUP]: "0x728Ec8260Ea1115252D33c0D563d78CA18990dE4",
      [manifest.periphery.SABLIER_V2_MERKLE_LOCKUP_FACTORY]: "0x4B5F6B967dC61c2B39fa233092745B460eA1b433",
    },
  }),
  getDeploymentLockupV1(ChainId.OP_SEPOLIA, {
    core: {
      [manifest.core.SABLIER_V2_LOCKUP_DYNAMIC]: "0x89EC3830040dec63E9dF0C904d649fda4d49DF16",
      [manifest.core.SABLIER_V2_LOCKUP_LINEAR]: "0x0a881bbd71a21710D56Ff1931EC8189d94019D60",
      [manifest.core.SABLIER_V2_LOCKUP_TRANCHED]: "0xb971A93608413C54F407eE86C7c15b295E0004bB",
      [manifest.core.SABLIER_V2_NFT_DESCRIPTOR]: "0x48F8C05C721E27FA82aD6c8ddB1a88eF43864A9A",
    },
    periphery: {
      [manifest.periphery.SABLIER_V2_BATCH_LOCKUP]: "0xd9dD971D4800100aED0BfF3535aB116D4Be5c420",
      [manifest.periphery.SABLIER_V2_MERKLE_LOCKUP_FACTORY]: "0x6CBe6e298A9354306e6ee65f63FF85CFA7062a39",
    },
  }),
  getDeploymentLockupV1(ChainId.SUPERSEED_SEPOLIA, {
    core: {
      [manifest.core.SABLIER_V2_LOCKUP_DYNAMIC]: "0xCff4a803b0Bf55dD1BE38Fb96088478F3D2eeCF2",
      [manifest.core.SABLIER_V2_LOCKUP_LINEAR]: "0xDf578C2c70A86945999c65961417057363530a1c",
      [manifest.core.SABLIER_V2_LOCKUP_TRANCHED]: "0xcb099EfC90e88690e287259410B9AE63e1658CC6",
      [manifest.core.SABLIER_V2_NFT_DESCRIPTOR]: "0x2De92156000269fa2fde7544F10f01E8cBC80fFa",
    },
    periphery: {
      [manifest.periphery.SABLIER_V2_BATCH_LOCKUP]: "0x0eDA15D606733f6CDe9DB67263E546bfcDDe9264",
      [manifest.periphery.SABLIER_V2_MERKLE_LOCKUP_FACTORY]: "0x92FC05e49c27884d554D98a5C01Ff0894a9DC29a",
    },
  }),
  getDeploymentLockupV1(ChainId.TAIKO_HEKLA, {
    core: {
      [manifest.core.SABLIER_V2_LOCKUP_DYNAMIC]: "0x01565a1298d631302c114E13C431c9345ae5532e",
      [manifest.core.SABLIER_V2_LOCKUP_LINEAR]: "0x640376B26E5f57dCD385b394a24c91F4C60E4fAc",
      [manifest.core.SABLIER_V2_LOCKUP_TRANCHED]: "0xd040fa437021F771C307178F06183bffC36cb4A5",
      [manifest.core.SABLIER_V2_NFT_DESCRIPTOR]: "0x49Fd46F7d897778205c00D5c1D943fCDc26Ed9E8",
    },
    periphery: {
      [manifest.periphery.SABLIER_V2_BATCH_LOCKUP]: "0x6C6a4Ef6C0C1318C9FD60b5084B68E04FB5e9Db9",
      [manifest.periphery.SABLIER_V2_MERKLE_LOCKUP_FACTORY]: "0x4F0d64365EfA9D6D1B88FfC387Ce02e4A71d9f9f",
    },
  }),
  getDeploymentLockupV1(ChainId.ZK_SYNC_SEPOLIA, {
    core: {
      [manifest.core.SABLIER_V2_LOCKUP_DYNAMIC]: "0xc4311a5913953162111bF75530f7BB14ec24e014",
      [manifest.core.SABLIER_V2_LOCKUP_LINEAR]: "0x43864C567b89FA5fEE8010f92d4473Bf19169BBA",
      [manifest.core.SABLIER_V2_LOCKUP_TRANCHED]: "0xF6e869b73E20b812dcf0E850AA8822F74f67f670",
      [manifest.core.SABLIER_V2_NFT_DESCRIPTOR]: "0x477DDC91a7e13CBaC01c06737abF96d50ECa7961",
    },
    periphery: {
      [manifest.periphery.SABLIER_V2_BATCH_LOCKUP]: "0x1D68417ff71855Eb0237Ff03a8FfF02Ef67e4AFb",
      [manifest.periphery.SABLIER_V2_MERKLE_LOCKUP_FACTORY]: "0x2CEf8C06dDF7a1440Ad2561c53821e43adDbfA31",
    },
  }),
];

const sortedTestnets = sortDeployments(testnets) as Sablier.DeploymentLockupV1[];

export default sortedTestnets;
