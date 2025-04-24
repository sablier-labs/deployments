import { ChainId } from "@src/chains/ids";
import { getDeploymentLockupV1, sortDeployments } from "@src/helpers";
import type { Sablier } from "@src/types";
import manifest from "./manifest";

/**
 * @description Mainnet deployments for Lockup v1.2.0
 */
const mainnets: Sablier.DeploymentLockupV1[] = [
  getDeploymentLockupV1(ChainId.ETHEREUM, {
    core: {
      [manifest.core.SABLIER_V2_LOCKUP_DYNAMIC]: "0x9DeaBf7815b42Bf4E9a03EEc35a486fF74ee7459",
      [manifest.core.SABLIER_V2_LOCKUP_LINEAR]: "0x3962f6585946823440d274aD7C719B02b49DE51E",
      [manifest.core.SABLIER_V2_LOCKUP_TRANCHED]: "0xf86B359035208e4529686A1825F2D5BeE38c28A8",
      [manifest.core.SABLIER_V2_NFT_DESCRIPTOR]: "0xAE32Ca14d85311A506Bb852D49bbfB315466bA26",
    },
    periphery: {
      [manifest.periphery.SABLIER_V2_BATCH_LOCKUP]: "0xB5Ec9706C3Be9d22326D208f491E5DEef7C8d9f0",
      [manifest.periphery.SABLIER_V2_MERKLE_LOCKUP_FACTORY]: "0xF35aB407CF28012Ba57CAF5ee2f6d6E4420253bc",
    },
  }),
  getDeploymentLockupV1(ChainId.ABSTRACT, {
    core: {
      [manifest.core.SABLIER_V2_LOCKUP_DYNAMIC]: "0xc69c06c030E825EDE13F1486078Aa9a2E2AAffaf",
      [manifest.core.SABLIER_V2_LOCKUP_LINEAR]: "0x7282d83E49363f373102d195F66649eBD6C57B9B",
      [manifest.core.SABLIER_V2_LOCKUP_TRANCHED]: "0x28fCAE6bda2546C93183EeC8638691B2EB184003",
      [manifest.core.SABLIER_V2_NFT_DESCRIPTOR]: "0xAc2E42b520364940c90Ce164412Ca9BA212d014B",
    },
    periphery: {
      [manifest.periphery.SABLIER_V2_BATCH_LOCKUP]: "0x2F1eB117A87217E8bE9AA96795F69c9e380686Db",
      [manifest.periphery.SABLIER_V2_MERKLE_LOCKUP_FACTORY]: "0xe2C0C3e0ff10Df4485a2dcbbdd1D002a40446164",
    },
  }),
  getDeploymentLockupV1(ChainId.ARBITRUM_ONE, {
    core: {
      [manifest.core.SABLIER_V2_LOCKUP_DYNAMIC]: "0x53F5eEB133B99C6e59108F35bCC7a116da50c5ce",
      [manifest.core.SABLIER_V2_LOCKUP_LINEAR]: "0x05a323a4C936fed6D02134c5f0877215CD186b51",
      [manifest.core.SABLIER_V2_LOCKUP_TRANCHED]: "0x0dA2c7Aa93E7CD43e6b8D043Aab5b85CfDDf3818",
      [manifest.core.SABLIER_V2_NFT_DESCRIPTOR]: "0xacA12cdC4DcD7063c82E69A358549ba082463608",
    },
    periphery: {
      [manifest.periphery.SABLIER_V2_BATCH_LOCKUP]: "0x785Edf1e617824A78EFE76295E040B1AE06002bf",
      [manifest.periphery.SABLIER_V2_MERKLE_LOCKUP_FACTORY]: "0xc9A5a0Bc2D8E217BDbdFE7486E9E72c5c3308F01",
    },
  }),
  getDeploymentLockupV1(ChainId.AVALANCHE, {
    core: {
      [manifest.core.SABLIER_V2_LOCKUP_DYNAMIC]: "0xE3826241E5EeBB3F5fEde33F9f677047674D3FBF",
      [manifest.core.SABLIER_V2_LOCKUP_LINEAR]: "0xc0bF14AfB95CA4C049BDc19E06a3531D8065F6Fd",
      [manifest.core.SABLIER_V2_LOCKUP_TRANCHED]: "0xfA536049652BFb5f57ba8DCFbec1B2b2Dd9803D3",
      [manifest.core.SABLIER_V2_NFT_DESCRIPTOR]: "0xcF24fb2a09227d955F8e9A12f36A26cf1ac079c6",
    },
    periphery: {
      [manifest.periphery.SABLIER_V2_BATCH_LOCKUP]: "0xaBCdF4dcDBa57a04889784A670b862540758f9E7",
      [manifest.periphery.SABLIER_V2_MERKLE_LOCKUP_FACTORY]: "0x0430ed39EA2789AcdF27b89268117EBABc8176D1",
    },
  }),
  getDeploymentLockupV1(ChainId.BASE, {
    core: {
      [manifest.core.SABLIER_V2_LOCKUP_DYNAMIC]: "0xF9E9eD67DD2Fab3b3ca024A2d66Fcf0764d36742",
      [manifest.core.SABLIER_V2_LOCKUP_LINEAR]: "0x4CB16D4153123A74Bc724d161050959754f378D8",
      [manifest.core.SABLIER_V2_LOCKUP_TRANCHED]: "0xf4937657Ed8B3f3cB379Eed47b8818eE947BEb1e",
      [manifest.core.SABLIER_V2_NFT_DESCRIPTOR]: "0x0fF9d05E6331A43A906fE1440E0C9D0742F475A3",
    },
    periphery: {
      [manifest.periphery.SABLIER_V2_BATCH_LOCKUP]: "0xc1c548F980669615772dadcBfEBC29937c29481A",
      [manifest.periphery.SABLIER_V2_MERKLE_LOCKUP_FACTORY]: "0x58A51E5382318EeA6065BB7721eecdF4331c0B90",
    },
  }),
  getDeploymentLockupV1(ChainId.BLAST, {
    core: {
      [manifest.core.SABLIER_V2_LOCKUP_DYNAMIC]: "0xA705DE617673e2Fe63a4Ea0E58c26897601D32A5",
      [manifest.core.SABLIER_V2_LOCKUP_LINEAR]: "0x9b1468d29b4A5869f00c92517c57f8656E928B93",
      [manifest.core.SABLIER_V2_LOCKUP_TRANCHED]: "0x91FB72e5297e2728c10FDe73BdE74A4888A68570",
      [manifest.core.SABLIER_V2_NFT_DESCRIPTOR]: "0x5f111b49f8f8bdb4A6001701E0D330fF52D6B370",
    },
    periphery: {
      [manifest.periphery.SABLIER_V2_BATCH_LOCKUP]: "0xdc988d7AD6F186ea4a236f3E61A45a7851edF84E",
      [manifest.periphery.SABLIER_V2_MERKLE_LOCKUP_FACTORY]: "0x3aBCDDa756d069Cf3c7a17410602343966EAFf27",
    },
  }),
  getDeploymentLockupV1(ChainId.BSC, {
    core: {
      [manifest.core.SABLIER_V2_LOCKUP_DYNAMIC]: "0xeB6d84c585bf8AEA34F05a096D6fAA3b8477D146",
      [manifest.core.SABLIER_V2_LOCKUP_LINEAR]: "0x88ad3B5c62A46Df953A5d428d33D70408F53C408",
      [manifest.core.SABLIER_V2_LOCKUP_TRANCHED]: "0xAb5f007b33EDDA56962A0fC428B15D544EA46591",
      [manifest.core.SABLIER_V2_NFT_DESCRIPTOR]: "0x27641f29b012d0d523EB5943011148c42c98e7F1",
    },
    periphery: {
      [manifest.periphery.SABLIER_V2_BATCH_LOCKUP]: "0x70998557980CB6E8E63c46810081262B6c343051",
      [manifest.periphery.SABLIER_V2_MERKLE_LOCKUP_FACTORY]: "0x96Aa12809CAC29Bba4944fEca1dFDC8e1704e6c1",
    },
  }),
  getDeploymentLockupV1(ChainId.CHILIZ, {
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
  getDeploymentLockupV1(ChainId.CORE_DAO, {
    core: {
      [manifest.core.SABLIER_V2_LOCKUP_DYNAMIC]: "0xf0a7F2cCE911c298B5CB8106Db19EF1D00230710",
      [manifest.core.SABLIER_V2_LOCKUP_LINEAR]: "0x98Fe0d8b2c2c05d9C6a9e635f59474Aaa0000120",
      [manifest.core.SABLIER_V2_LOCKUP_TRANCHED]: "0x9C99EF88399bC1c1188399B39E7Cc667D78210ea",
      [manifest.core.SABLIER_V2_NFT_DESCRIPTOR]: "0x64C734B2F1704822D8E69CAF230aE8d2eC18AA3e",
    },
    periphery: {
      [manifest.periphery.SABLIER_V2_BATCH_LOCKUP]: "0xdE21BBFf718723E9069d8528d6Bb26c2971D58a7",
      [manifest.periphery.SABLIER_V2_MERKLE_LOCKUP_FACTORY]: "0x074CC814a8114126c505F5eecFC82A400B39cA03",
    },
  }),
  getDeploymentLockupV1(ChainId.GNOSIS, {
    core: {
      [manifest.core.SABLIER_V2_LOCKUP_DYNAMIC]: "0x555eb55cbc477Aebbe5652D25d0fEA04052d3971",
      [manifest.core.SABLIER_V2_LOCKUP_LINEAR]: "0xf1cAeB104AB29271463259335357D57772C90758",
      [manifest.core.SABLIER_V2_LOCKUP_TRANCHED]: "0x59A4B7255A5D01247837600e7828A6F77f664b34",
      [manifest.core.SABLIER_V2_NFT_DESCRIPTOR]: "0xA0B5C851E3E9fED83f387f4D8847DA398Da4A8E2",
    },
    periphery: {
      [manifest.periphery.SABLIER_V2_BATCH_LOCKUP]: "0x0F324E5CB01ac98b2883c8ac4231aCA7EfD3e750",
      [manifest.periphery.SABLIER_V2_MERKLE_LOCKUP_FACTORY]: "0x5f12318fc6cCa518A950e2Ee16063a6317C2a9Ef",
    },
  }),
  getDeploymentLockupV1(ChainId.IOTEX, {
    core: {
      [manifest.core.SABLIER_V2_LOCKUP_DYNAMIC]: "0x6FcAB41e3b62d05aB4fC729586CB06Af2a2662D0",
      [manifest.core.SABLIER_V2_LOCKUP_LINEAR]: "0x84f092cf4d7d36c2d4987f672df81a39200a7146",
      [manifest.core.SABLIER_V2_LOCKUP_TRANCHED]: "0x179536f3289fb50076968b339C7EF0Dc0B38E3AF",
      [manifest.core.SABLIER_V2_NFT_DESCRIPTOR]: "0x28eAB88ee8a951F78e1028557D0C3fD97af61A33",
    },
    periphery: {
      [manifest.periphery.SABLIER_V2_BATCH_LOCKUP]: "0x711900e5f55d427cd88e5E3FCAe54Ccf02De71F4",
      [manifest.periphery.SABLIER_V2_MERKLE_LOCKUP_FACTORY]: "0xf978034bb3CAB5fe88d23DB5Cb38D510485DaB90",
    },
  }),
  getDeploymentLockupV1(ChainId.LIGHTLINK, {
    core: {
      [manifest.core.SABLIER_V2_LOCKUP_DYNAMIC]: "0xAa05E418Fb7851C211351C65435F1b17cbFa88Bf",
      [manifest.core.SABLIER_V2_LOCKUP_LINEAR]: "0x6329591464FA6721c8E1c1271e4c6C41531Aea6b",
      [manifest.core.SABLIER_V2_LOCKUP_TRANCHED]: "0x83403c6426E6D044bF3B84EC1C007Db211AaA140",
      [manifest.core.SABLIER_V2_NFT_DESCRIPTOR]: "0x5881ef3c0D3eB21b1b40E13b4a69c50754bc77C7",
    },
    periphery: {
      [manifest.periphery.SABLIER_V2_BATCH_LOCKUP]: "0x5C847244649BD74aB41f09C893aF792AD87D32aA",
      [manifest.periphery.SABLIER_V2_MERKLE_LOCKUP_FACTORY]: "0x278AC15622846806BD46FBDbdB8dB8d09614173A",
    },
  }),
];

const sortedMainnets = sortDeployments(mainnets) as Sablier.DeploymentLockupV1[];

export default sortedMainnets;
