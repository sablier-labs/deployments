import { ChainId } from "../../../chains/ids";
import { getDeployment, sortDeployments } from "../../../helpers";
import type { Sablier } from "../../../types";
import manifest from "./manifest";

/**
 * @description Testnet deployments for Airdrops v1.3.0
 */
const testnets: Sablier.Deployment[] = [
  getDeployment("airdrops", ChainId.ETHEREUM_SEPOLIA, {
    [manifest.SABLIER_MERKLE_FACTORY]: "0xf642751d1271c88bBb8786067de808B32a016Fd4",
  }),
  getDeployment("airdrops", ChainId.ARBITRUM_SEPOLIA, {
    [manifest.SABLIER_MERKLE_FACTORY]: "0x465E9218C1A8d36169e0c40C01b856A83CE44153",
  }),
  getDeployment("airdrops", ChainId.BASE_SEPOLIA, {
    [manifest.SABLIER_MERKLE_FACTORY]: "0x6a3466398A66c7Ce801989B45C390cdC8717102D",
  }),
  getDeployment("airdrops", ChainId.BLAST_SEPOLIA, {
    [manifest.SABLIER_MERKLE_FACTORY]: "0x471DD609f1595b0F13737c57D29399Ff84Dd4778",
  }),
  getDeployment("airdrops", ChainId.LINEA_SEPOLIA, {
    [manifest.SABLIER_MERKLE_FACTORY]: "0x5ADE5DF4FB42e353223DFF677cbfec812c6C4Da7",
  }),
  getDeployment("airdrops", ChainId.MODE_TESTNET, {
    [manifest.SABLIER_MERKLE_FACTORY]: "0x659836D788cce324Ad8c445584b9c44c6a8c74b7",
  }),
  getDeployment("airdrops", ChainId.MONAD_TESTNET, {
    [manifest.SABLIER_MERKLE_FACTORY]: "0x99846E1379fEBC91FCeC641097f8191b51ef0d34",
  }),
  getDeployment("airdrops", ChainId.OP_SEPOLIA, {
    [manifest.SABLIER_MERKLE_FACTORY]: "0x2934A7aDDC3000D1625eD1E8D21C070a89073702",
  }),
  getDeployment("airdrops", ChainId.SUPERSEED_SEPOLIA, {
    [manifest.SABLIER_MERKLE_FACTORY]: "0xb5951501D416cb7326e5b9bEB6EF8840a8DF6910",
  }),
  getDeployment("airdrops", ChainId.TAIKO_HEKLA, {
    [manifest.SABLIER_MERKLE_FACTORY]: "0xB5F4FB527568f88F8898Ce5F366f4d72e2C742BE",
  }),
];

export default sortDeployments(testnets);
