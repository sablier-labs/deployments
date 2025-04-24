import { ChainId } from "../../../chains/ids";
import contractNames from "../../../contract-names";
import { getChainDeployment } from "../../../helpers";
import type { Sablier } from "../../../types";

/**
 * @description Mainnet deployments for Airdrops v1.3.0
 */
const mainnets: Record<number, Sablier.Deployment> = {
  ...getChainDeployment("airdrops", ChainId.ETHEREUM, [
    {
      address: "0x71DD3Ca88E7564416E5C2E350090C12Bf8F6144a",
      name: contractNames.airdrops.SABLIER_MERKLE_FACTORY,
    },
  ]),
  ...getChainDeployment("airdrops", ChainId.ABSTRACT, [
    {
      address: "0x0C72b957347B51285854f015e4D20641655B939A",
      name: contractNames.airdrops.SABLIER_MERKLE_FACTORY,
    },
  ]),
  ...getChainDeployment("airdrops", ChainId.ARBITRUM_ONE, [
    {
      address: "0x7efd170e3e32Dc1b4c17eb4cFFf92c81FF43a6cb",
      name: contractNames.airdrops.SABLIER_MERKLE_FACTORY,
    },
  ]),
  ...getChainDeployment("airdrops", ChainId.AVALANCHE, [
    {
      address: "0x6bCD2260825CFed440Bb765f7A92f6CDBDc90f43",
      name: contractNames.airdrops.SABLIER_MERKLE_FACTORY,
    },
  ]),
  ...getChainDeployment("airdrops", ChainId.BASE, [
    {
      address: "0xD9e108f26fe104CE1058D48070438deDB3aD826A",
      name: contractNames.airdrops.SABLIER_MERKLE_FACTORY,
    },
  ]),
  ...getChainDeployment("airdrops", ChainId.BERACHAIN, [
    {
      address: "0x7868Af143cc5e6Cd03f9B4f5cdD2832695A85d6B",
      name: contractNames.airdrops.SABLIER_MERKLE_FACTORY,
    },
  ]),
  ...getChainDeployment("airdrops", ChainId.BLAST, [
    {
      address: "0xDd40b4F5B216F524a55E2e8F75637E8b453E4bd2",
      name: contractNames.airdrops.SABLIER_MERKLE_FACTORY,
    },
  ]),
  ...getChainDeployment("airdrops", ChainId.BSC, [
    {
      address: "0xf9f89d99fb702b06fba16a294b7614089defe068",
      name: contractNames.airdrops.SABLIER_MERKLE_FACTORY,
    },
  ]),
  ...getChainDeployment("airdrops", ChainId.CHILIZ, [
    {
      address: "0xf978034bb3CAB5fe88d23DB5Cb38D510485DaB90",
      name: contractNames.airdrops.SABLIER_MERKLE_FACTORY,
    },
  ]),
  ...getChainDeployment("airdrops", ChainId.FORM, [
    {
      address: "0xA9264Ef7cB1516cc27FCD5149A2909Ace885Ffb6",
      name: contractNames.airdrops.SABLIER_MERKLE_FACTORY,
    },
  ]),
  ...getChainDeployment("airdrops", ChainId.IOTEX, [
    {
      address: "0xf08548b1a6DB590FEC6f1B95e6B41d17791767C2",
      name: contractNames.airdrops.SABLIER_MERKLE_FACTORY,
    },
  ]),
  ...getChainDeployment("airdrops", ChainId.GNOSIS, [
    {
      address: "0x64ba580946985B4b87f4D9f7b6598C2156026775",
      name: contractNames.airdrops.SABLIER_MERKLE_FACTORY,
    },
  ]),
  ...getChainDeployment("airdrops", ChainId.LIGHTLINK, [
    {
      address: "0xC0107f368FBB50075d2190549055d9E6bf75c5c9",
      name: contractNames.airdrops.SABLIER_MERKLE_FACTORY,
    },
  ]),
  ...getChainDeployment("airdrops", ChainId.LINEA, [
    {
      address: "0xAa122611E0e3a0771127aA4cd4995A896BB2c20B",
      name: contractNames.airdrops.SABLIER_MERKLE_FACTORY,
    },
  ]),
  ...getChainDeployment("airdrops", ChainId.MODE, [
    {
      address: "0xc472391DB89e7BE07170f18c4fdb010242507F2C",
      name: contractNames.airdrops.SABLIER_MERKLE_FACTORY,
    },
  ]),
  ...getChainDeployment("airdrops", ChainId.MORPH, [
    {
      address: "0xBE64e8718D82C598EBCDA5149D10eB68b79632a4",
      name: contractNames.airdrops.SABLIER_MERKLE_FACTORY,
    },
  ]),
  ...getChainDeployment("airdrops", ChainId.OP_MAINNET, [
    {
      address: "0x2455bff7a71E6e441b2d0B1b1e480fe36EbF6D1E",
      name: contractNames.airdrops.SABLIER_MERKLE_FACTORY,
    },
  ]),
  ...getChainDeployment("airdrops", ChainId.POLYGON, [
    {
      address: "0xf0d61b42311C810dfdE191D58427d81E87c5d5F6",
      name: contractNames.airdrops.SABLIER_MERKLE_FACTORY,
    },
  ]),
  ...getChainDeployment("airdrops", ChainId.SCROLL, [
    {
      address: "0x6dF0bfFDb106b19d1e954853f4d14003E21B7854",
      name: contractNames.airdrops.SABLIER_MERKLE_FACTORY,
    },
  ]),
  ...getChainDeployment("airdrops", ChainId.SEI, [
    {
      address: "0x0171A06878F7ff81c9955DEB5641f64f520d45E5",
      name: contractNames.airdrops.SABLIER_MERKLE_FACTORY,
    },
  ]),
  ...getChainDeployment("airdrops", ChainId.SUPERSEED, [
    {
      address: "0x3df48bb93509D9a041C81F6670C37B1eEb3E154B",
      name: contractNames.airdrops.SABLIER_MERKLE_FACTORY,
    },
  ]),
  ...getChainDeployment("airdrops", ChainId.TAIKO, [
    {
      address: "0x39D4D8C60D3596B75bc09863605BBB4dcE8243F1",
      name: contractNames.airdrops.SABLIER_MERKLE_FACTORY,
    },
  ]),
  ...getChainDeployment("airdrops", ChainId.TANGLE, [
    {
      address: "0xd641a0E4509Cced67cC24E7BDcDe2a31b7F7cF77",
      name: contractNames.airdrops.SABLIER_MERKLE_FACTORY,
    },
  ]),
  ...getChainDeployment("airdrops", ChainId.ULTRA, [
    {
      address: "0x5e73bb96493C10919204045fCdb639D35ad859f8",
      name: contractNames.airdrops.SABLIER_MERKLE_FACTORY,
    },
  ]),
  ...getChainDeployment("airdrops", ChainId.UNICHAIN, [
    {
      address: "0xC6fC028E988D158C52Aa2e38CDd6f969AA14bdCd",
      name: contractNames.airdrops.SABLIER_MERKLE_FACTORY,
    },
  ]),
  ...getChainDeployment("airdrops", ChainId.XDC, [
    {
      address: "0xe41909f5623c3b78219D9a2Bb92bE95AEe5bbC30",
      name: contractNames.airdrops.SABLIER_MERKLE_FACTORY,
    },
  ]),
  ...getChainDeployment("airdrops", ChainId.ZK_SYNC_ERA, [
    {
      address: "0x8E7E78799F8cC87d4816112A758281dabc158452",
      name: contractNames.airdrops.SABLIER_MERKLE_FACTORY,
    },
  ]),
};

export default mainnets;
