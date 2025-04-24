import { ChainId } from "../../../chains/ids";
import contractNames from "../../../contract-names";
import { getChainDeployment } from "../../../helpers";
import type { Sablier } from "../../../types";

/**
 * @description Mainnet deployments for Lockup v2.0.0
 */
const mainnets: Record<number, Sablier.Deployment> = {
  ...getChainDeployment("lockup", ChainId.ETHEREUM, [
    {
      address: "0x3F6E8a8Cffe377c4649aCeB01e6F20c60fAA356c",
      name: contractNames.lockup.SABLIER_BATCH_LOCKUP,
    },
    {
      address: "0x7C01AA3783577E15fD7e272443D44B92d5b21056",
      name: contractNames.lockup.SABLIER_LOCKUP,
    },
    {
      address: "0xA9dC6878C979B5cc1d98a1803F0664ad725A1f56",
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
  ...getChainDeployment("lockup", ChainId.ABSTRACT, [
    {
      address: "0x3409308357BB704f79f70d748da502F363Dc2f1D",
      name: contractNames.lockup.SABLIER_BATCH_LOCKUP,
    },
    {
      address: "0x14Eb4AB47B2ec2a71763eaBa202a252E176FAE88",
      name: contractNames.lockup.SABLIER_LOCKUP,
    },
    {
      address: "0x63Ff2E370788C163D5a1909B5FCb299DB327AEF9",
      name: contractNames.lockup.LOCKUP_NFT_DESCRIPTOR,
    },
    {
      address: "0x07c194dFE7DCe9Ae7Ffe4bF32683cf1F8CDD4aEa",
      name: contractNames.lockup.HELPERS,
    },
    {
      address: "0xbB2e2884AE40003BB55fd3A85A9f8f7f72Aa441F",
      name: contractNames.lockup.VESTING_MATH,
    },
  ]),
  ...getChainDeployment("lockup", ChainId.ARBITRUM_ONE, [
    {
      address: "0xB11Ead48F572155C5f8dB6201701e91A936896f7",
      name: contractNames.lockup.SABLIER_BATCH_LOCKUP,
    },
    {
      address: "0x467D5Bf8Cfa1a5f99328fBdCb9C751c78934b725",
      name: contractNames.lockup.SABLIER_LOCKUP,
    },
    {
      address: "0xd5c6a0Dd2E1822865c308850b8b3E2CcE762D061",
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
  ...getChainDeployment("lockup", ChainId.AVALANCHE, [
    {
      address: "0xABDE228d84D86D78029C31A37Ae2435C8f923c8b",
      name: contractNames.lockup.SABLIER_BATCH_LOCKUP,
    },
    {
      address: "0x3C81BBBe72EF8eF3fb1D19B0bd6310Ad0dd27E82",
      name: contractNames.lockup.SABLIER_LOCKUP,
    },
    {
      address: "0x906A4BD5dD0EF13654eA29bFD6185d0d64A4b674",
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
  ...getChainDeployment("lockup", ChainId.BASE, [
    {
      address: "0xC26CdAFd6ec3c91AD9aEeB237Ee1f37205ED26a4",
      name: contractNames.lockup.SABLIER_BATCH_LOCKUP,
    },
    {
      address: "0xb5D78DD3276325f5FAF3106Cc4Acc56E28e0Fe3B",
      name: contractNames.lockup.SABLIER_LOCKUP,
    },
    {
      address: "0x87e437030b7439150605a641483de98672E26317",
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
  ...getChainDeployment("lockup", ChainId.BERACHAIN, [
    {
      address: "0x75838C66Dfa2296bB9758f75fC7ad219718C8a88",
      name: contractNames.lockup.SABLIER_BATCH_LOCKUP,
    },
    {
      address: "0xC19A2542156b5d7960e0eF46E9787E7d336cF428",
      name: contractNames.lockup.SABLIER_LOCKUP,
    },
    {
      address: "0x3bbE0a21792564604B0fDc00019532Adeffa70eb",
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
  ...getChainDeployment("lockup", ChainId.BLAST, [
    {
      address: "0x193c2af965FEAca8D893c974712e5b6BD3cBc5ec",
      name: contractNames.lockup.SABLIER_BATCH_LOCKUP,
    },
    {
      address: "0xDbB6e9653d7e41766712Db22eB08ED3F21009fdd",
      name: contractNames.lockup.SABLIER_LOCKUP,
    },
    {
      address: "0x959c412d5919b1Ec5D07bee3443ea68c91d57dd7",
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
  ...getChainDeployment("lockup", ChainId.BSC, [
    {
      address: "0xcf990fA3267F0945bBf7cf40A0c03F9dFE6a1804",
      name: contractNames.lockup.SABLIER_BATCH_LOCKUP,
    },
    {
      address: "0x6E0baD2c077d699841F1929b45bfb93FAfBEd395",
      name: contractNames.lockup.SABLIER_LOCKUP,
    },
    {
      address: "0x56831a5a932793E02251126831174Ab8Bf2f7695",
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
  ...getChainDeployment("lockup", ChainId.CHILIZ, [
    {
      address: "0x179536f3289fb50076968b339C7EF0Dc0B38E3AF",
      name: contractNames.lockup.SABLIER_BATCH_LOCKUP,
    },
    {
      address: "0x711900e5f55d427cd88e5E3FCAe54Ccf02De71F4",
      name: contractNames.lockup.SABLIER_LOCKUP,
    },
    {
      address: "0x8A96f827082FB349B6e268baa0a7A5584c4Ccda6",
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
  ...getChainDeployment("lockup", ChainId.CORE_DAO, [
    {
      address: "0x96dadeeab25413de04a1b8e40c4de41bd9d7fd29",
      name: contractNames.lockup.SABLIER_BATCH_LOCKUP,
    },
    {
      address: "0x4fff53bfe86a0bd59a81c89d8ba84c67cf947764",
      name: contractNames.lockup.SABLIER_LOCKUP,
    },
    {
      address: "0xac0cf0f2a96ed7ec3cfa4d0be621c67adc9dd903",
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
  ...getChainDeployment("lockup", ChainId.FORM, [
    {
      address: "0x74759072f464F6600E7563DcC2828A2dE8111840",
      name: contractNames.lockup.SABLIER_BATCH_LOCKUP,
    },
    {
      address: "0xa2dD5E785AA0225D681416884D395c7E22D92850",
      name: contractNames.lockup.SABLIER_LOCKUP,
    },
    {
      address: "0x6Ef33eeCE9D3B04B1A954C0c94F09808C81512c8",
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

export default mainnets;
