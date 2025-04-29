import { ChainId } from "@src/chains/ids";
import type { Sablier } from "@src/types";
import { getDeployment } from "../../helpers";
import aliases from "./aliases";
import { names } from "./manifest";

function get(chainId: number, contractMap: Sablier.ContractMap): Sablier.Deployment {
  return getDeployment("airdrops", chainId, contractMap, aliases);
}

/**
 * @description Mainnet deployments for Airdrops v1.3.0
 */
export const mainnets: Sablier.Deployment[] = [
  get(ChainId.ABSTRACT, {
    [names.SABLIER_MERKLE_FACTORY]: "0x0C72b957347B51285854f015e4D20641655B939A",
  }),
  get(ChainId.ARBITRUM_ONE, {
    [names.SABLIER_MERKLE_FACTORY]: "0x7efd170e3e32Dc1b4c17eb4cFFf92c81FF43a6cb",
  }),
  get(ChainId.AVALANCHE, {
    [names.SABLIER_MERKLE_FACTORY]: "0x6bCD2260825CFed440Bb765f7A92f6CDBDc90f43",
  }),
  get(ChainId.BASE, {
    [names.SABLIER_MERKLE_FACTORY]: "0xD9e108f26fe104CE1058D48070438deDB3aD826A",
  }),
  get(ChainId.BERACHAIN, {
    [names.SABLIER_MERKLE_FACTORY]: "0x7868Af143cc5e6Cd03f9B4f5cdD2832695A85d6B",
  }),
  get(ChainId.BLAST, {
    [names.SABLIER_MERKLE_FACTORY]: "0xDd40b4F5B216F524a55E2e8F75637E8b453E4bd2",
  }),
  get(ChainId.BSC, {
    [names.SABLIER_MERKLE_FACTORY]: "0xf9f89d99fb702b06fba16a294b7614089defe068",
  }),
  get(ChainId.CHILIZ, {
    [names.SABLIER_MERKLE_FACTORY]: "0xf978034bb3CAB5fe88d23DB5Cb38D510485DaB90",
  }),
  get(ChainId.ETHEREUM, {
    [names.SABLIER_MERKLE_FACTORY]: "0x71DD3Ca88E7564416E5C2E350090C12Bf8F6144a",
  }),
  get(ChainId.FORM, {
    [names.SABLIER_MERKLE_FACTORY]: "0xA9264Ef7cB1516cc27FCD5149A2909Ace885Ffb6",
  }),
  get(ChainId.IOTEX, {
    [names.SABLIER_MERKLE_FACTORY]: "0xf08548b1a6DB590FEC6f1B95e6B41d17791767C2",
  }),
  get(ChainId.GNOSIS, {
    [names.SABLIER_MERKLE_FACTORY]: "0x64ba580946985B4b87f4D9f7b6598C2156026775",
  }),
  get(ChainId.LIGHTLINK, {
    [names.SABLIER_MERKLE_FACTORY]: "0xC0107f368FBB50075d2190549055d9E6bf75c5c9",
  }),
  get(ChainId.LINEA, {
    [names.SABLIER_MERKLE_FACTORY]: "0xAa122611E0e3a0771127aA4cd4995A896BB2c20B",
  }),
  get(ChainId.MODE, {
    [names.SABLIER_MERKLE_FACTORY]: "0xc472391DB89e7BE07170f18c4fdb010242507F2C",
  }),
  get(ChainId.MORPH, {
    [names.SABLIER_MERKLE_FACTORY]: "0xBE64e8718D82C598EBCDA5149D10eB68b79632a4",
  }),
  get(ChainId.OP_MAINNET, {
    [names.SABLIER_MERKLE_FACTORY]: "0x2455bff7a71E6e441b2d0B1b1e480fe36EbF6D1E",
  }),
  get(ChainId.POLYGON, {
    [names.SABLIER_MERKLE_FACTORY]: "0xf0d61b42311C810dfdE191D58427d81E87c5d5F6",
  }),
  get(ChainId.SCROLL, {
    [names.SABLIER_MERKLE_FACTORY]: "0x6dF0bfFDb106b19d1e954853f4d14003E21B7854",
  }),
  get(ChainId.SEI, {
    [names.SABLIER_MERKLE_FACTORY]: "0x0171A06878F7ff81c9955DEB5641f64f520d45E5",
  }),
  get(ChainId.SUPERSEED, {
    [names.SABLIER_MERKLE_FACTORY]: "0x3df48bb93509D9a041C81F6670C37B1eEb3E154B",
  }),
  get(ChainId.TAIKO, {
    [names.SABLIER_MERKLE_FACTORY]: "0x39D4D8C60D3596B75bc09863605BBB4dcE8243F1",
  }),
  get(ChainId.TANGLE, {
    [names.SABLIER_MERKLE_FACTORY]: "0xd641a0E4509Cced67cC24E7BDcDe2a31b7F7cF77",
  }),
  get(ChainId.ULTRA, {
    [names.SABLIER_MERKLE_FACTORY]: "0x5e73bb96493C10919204045fCdb639D35ad859f8",
  }),
  get(ChainId.UNICHAIN, {
    [names.SABLIER_MERKLE_FACTORY]: "0xC6fC028E988D158C52Aa2e38CDd6f969AA14bdCd",
  }),
  get(ChainId.XDC, {
    [names.SABLIER_MERKLE_FACTORY]: "0xe41909f5623c3b78219D9a2Bb92bE95AEe5bbC30",
  }),
  get(ChainId.ZK_SYNC_ERA, {
    [names.SABLIER_MERKLE_FACTORY]: "0x8E7E78799F8cC87d4816112A758281dabc158452",
  }),
];

/**
 * @description Testnet deployments for Airdrops v1.3.0
 */
export const testnets: Sablier.Deployment[] = [
  get(ChainId.ETHEREUM_SEPOLIA, {
    [names.SABLIER_MERKLE_FACTORY]: "0xf642751d1271c88bBb8786067de808B32a016Fd4",
  }),
  get(ChainId.ARBITRUM_SEPOLIA, {
    [names.SABLIER_MERKLE_FACTORY]: "0x465E9218C1A8d36169e0c40C01b856A83CE44153",
  }),
  get(ChainId.BASE_SEPOLIA, {
    [names.SABLIER_MERKLE_FACTORY]: "0x6a3466398A66c7Ce801989B45C390cdC8717102D",
  }),
  get(ChainId.BLAST_SEPOLIA, {
    [names.SABLIER_MERKLE_FACTORY]: "0x471DD609f1595b0F13737c57D29399Ff84Dd4778",
  }),
  get(ChainId.LINEA_SEPOLIA, {
    [names.SABLIER_MERKLE_FACTORY]: "0x5ADE5DF4FB42e353223DFF677cbfec812c6C4Da7",
  }),
  get(ChainId.MODE_TESTNET, {
    [names.SABLIER_MERKLE_FACTORY]: "0x659836D788cce324Ad8c445584b9c44c6a8c74b7",
  }),
  get(ChainId.MONAD_TESTNET, {
    [names.SABLIER_MERKLE_FACTORY]: "0x99846E1379fEBC91FCeC641097f8191b51ef0d34",
  }),
  get(ChainId.OP_SEPOLIA, {
    [names.SABLIER_MERKLE_FACTORY]: "0x2934A7aDDC3000D1625eD1E8D21C070a89073702",
  }),
  get(ChainId.SUPERSEED_SEPOLIA, {
    [names.SABLIER_MERKLE_FACTORY]: "0xb5951501D416cb7326e5b9bEB6EF8840a8DF6910",
  }),
  get(ChainId.TAIKO_HEKLA, {
    [names.SABLIER_MERKLE_FACTORY]: "0xB5F4FB527568f88F8898Ce5F366f4d72e2C742BE",
  }),
];
