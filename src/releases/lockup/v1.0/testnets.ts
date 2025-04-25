import { ChainId } from "@src/chains/ids";
import { getDeploymentLockupV1, sortDeployments } from "@src/helpers";
import type { Sablier } from "@src/types";
import manifest from "./manifest";

/**
 * @description Testnet deployments for Lockup v1.0
 */
const testnets: Sablier.DeploymentLockupV1[] = [
  getDeploymentLockupV1(ChainId.ARBITRUM_SEPOLIA, {
    core: {
      [manifest.core.SABLIER_V2_COMPTROLLER]: "0xA6A0cfA3442053fbB516D55205A749Ef2D33aed9",
      [manifest.core.SABLIER_V2_LOCKUP_DYNAMIC]: "0x7938c18a59FaD2bA11426AcfBe8d74F0F598a4D2",
      [manifest.core.SABLIER_V2_LOCKUP_LINEAR]: "0xa3e36b51B7A456812c92253780f4B15bad56e34c",
      [manifest.core.SABLIER_V2_NFT_DESCRIPTOR]: "0xEe93BFf599C17C6fF8e31F2De6c3e40bd5e51312",
    },
    periphery: {
      [manifest.periphery.SABLIER_V2_ARCHIVE]: "0x2C8fA48361C7D48Dc21b27a3D549402Cf8AE16B0",
      [manifest.periphery.SABLIER_V2_PROXY_PLUGIN]: "0x7D310803c3824636bAff74e4f80e81ece167c440",
      [manifest.periphery.SABLIER_V2_PROXY_TARGET]: "0x396A3a169918A4C0B339ECf86C583f46D696254E",
    },
  }),
  getDeploymentLockupV1(ChainId.ETHEREUM_SEPOLIA, {
    core: {
      [manifest.core.SABLIER_V2_COMPTROLLER]: "0x2006d43E65e66C5FF20254836E63947FA8bAaD68",
      [manifest.core.SABLIER_V2_LOCKUP_DYNAMIC]: "0x421e1E7a53FF360f70A2D02037Ee394FA474e035",
      [manifest.core.SABLIER_V2_LOCKUP_LINEAR]: "0xd4300c5bc0b9e27c73ebabdc747ba990b1b570db",
      [manifest.core.SABLIER_V2_NFT_DESCRIPTOR]: "0x3cb51943EbcEA05B23C35c50491B3d296FF675db",
    },
    periphery: {
      [manifest.periphery.SABLIER_V2_ARCHIVE]: "0x83495d8DF6221f566232e1353a6e7231A86C61fF",
      [manifest.periphery.SABLIER_V2_PROXY_PLUGIN]: "0xa333c8233CfD04740E64AB4fd5447995E357561B",
      [manifest.periphery.SABLIER_V2_PROXY_TARGET]: "0x5091900B7cF803a7407FCE6333A6bAE4aA779Fd4",
      [manifest.periphery.SABLIER_V2_PROXY_TARGET_APPROVE]: "0x105E7728C5706Ad41d194EbDc7873B047352F3d2",
    },
  }),
  getDeploymentLockupV1(ChainId.OP_SEPOLIA, {
    core: {
      [manifest.core.SABLIER_V2_COMPTROLLER]: "0x1EECb6e6EaE6a1eD1CCB4323F3a146A7C5443A10",
      [manifest.core.SABLIER_V2_LOCKUP_DYNAMIC]: "0x6f68516c21E248cdDfaf4898e66b2b0Adee0e0d6",
      [manifest.core.SABLIER_V2_LOCKUP_LINEAR]: "0xB923aBdCA17Aed90EB5EC5E407bd37164f632bFD",
      [manifest.core.SABLIER_V2_NFT_DESCRIPTOR]: "0xe0138C596939CC0D2382046795bC163ad5755e0E",
    },
    periphery: {
      [manifest.periphery.SABLIER_V2_ARCHIVE]: "0x9A09eC6f991386718854aDDCEe68647776Befd5b",
      [manifest.periphery.SABLIER_V2_PROXY_PLUGIN]: "0x77C8516B1F327890C956bb38F93Ac2d6B24795Ea",
      [manifest.periphery.SABLIER_V2_PROXY_TARGET]: "0x194ed7D6005C8ba4084A948406545DF299ad37cD",
      [manifest.periphery.SABLIER_V2_PROXY_TARGET_APPROVE]: "0x8a6974c162fdc7Cb67996F7dB8bAAFb9a99566e0",
    },
  }),
  getDeploymentLockupV1(ChainId.BASE_SEPOLIA, {
    core: {
      [manifest.core.SABLIER_V2_COMPTROLLER]: "0x7Faaedd40B1385C118cA7432952D9DC6b5CbC49e",
      [manifest.core.SABLIER_V2_LOCKUP_DYNAMIC]: "0x645B00960Dc352e699F89a81Fc845C0C645231cf",
      [manifest.core.SABLIER_V2_LOCKUP_LINEAR]: "0x6b9a46C8377f21517E65fa3899b3A9Fab19D17f5",
      [manifest.core.SABLIER_V2_NFT_DESCRIPTOR]: "0xEFc2896c29F70bc23e82892Df827d4e2259028Fd",
    },
    periphery: {
      [manifest.periphery.SABLIER_V2_ARCHIVE]: "0x1C5Ac71dd48c7ff291743e5E6e3689ba92F73cC6",
      [manifest.periphery.SABLIER_V2_PROXY_PLUGIN]: "0x50E8B9dC7F28e5cA9253759455C1077e497c4232",
      [manifest.periphery.SABLIER_V2_PROXY_TARGET]: "0x0648C80b969501c7778b6ff3ba47aBb78fEeDF39",
      [manifest.periphery.SABLIER_V2_PROXY_TARGET_APPROVE]: "0xf19576Ab425753816eCbF98aca8132A0f693aEc5",
    },
  }),
];

const sortedTestnets = sortDeployments(testnets) as Sablier.DeploymentLockupV1[];

export default sortedTestnets;
