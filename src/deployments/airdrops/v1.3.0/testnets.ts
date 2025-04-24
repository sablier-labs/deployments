import { ChainId } from "../../../chains/ids";
import contractNames from "../../../contract-names";
import { getChainDeployment } from "../../../helpers";
import type { Sablier } from "../../../types";

/**
 * @description Testnet deployments for Airdrops v1.3.0
 */
const testnets: Record<number, Sablier.Deployment> = {
  ...getChainDeployment("airdrops", ChainId.ETHEREUM_SEPOLIA, [
    {
      address: "0xf642751d1271c88bBb8786067de808B32a016Fd4",
      name: contractNames.airdrops.SABLIER_MERKLE_FACTORY,
    },
  ]),
  ...getChainDeployment("airdrops", ChainId.ARBITRUM_SEPOLIA, [
    {
      address: "0x465E9218C1A8d36169e0c40C01b856A83CE44153",
      name: contractNames.airdrops.SABLIER_MERKLE_FACTORY,
    },
  ]),
  ...getChainDeployment("airdrops", ChainId.BASE_SEPOLIA, [
    {
      address: "0x6a3466398A66c7Ce801989B45C390cdC8717102D",
      name: contractNames.airdrops.SABLIER_MERKLE_FACTORY,
    },
  ]),
  ...getChainDeployment("airdrops", ChainId.BLAST_SEPOLIA, [
    {
      address: "0x471DD609f1595b0F13737c57D29399Ff84Dd4778",
      name: contractNames.airdrops.SABLIER_MERKLE_FACTORY,
    },
  ]),
  ...getChainDeployment("airdrops", ChainId.LINEA_SEPOLIA, [
    {
      address: "0x5ADE5DF4FB42e353223DFF677cbfec812c6C4Da7",
      name: contractNames.airdrops.SABLIER_MERKLE_FACTORY,
    },
  ]),
  ...getChainDeployment("airdrops", ChainId.MODE_TESTNET, [
    {
      address: "0x659836D788cce324Ad8c445584b9c44c6a8c74b7",
      name: contractNames.airdrops.SABLIER_MERKLE_FACTORY,
    },
  ]),
  ...getChainDeployment("airdrops", ChainId.MONAD_TESTNET, [
    {
      address: "0x99846E1379fEBC91FCeC641097f8191b51ef0d34",
      name: contractNames.airdrops.SABLIER_MERKLE_FACTORY,
    },
  ]),
  ...getChainDeployment("airdrops", ChainId.OP_SEPOLIA, [
    {
      address: "0x2934A7aDDC3000D1625eD1E8D21C070a89073702",
      name: contractNames.airdrops.SABLIER_MERKLE_FACTORY,
    },
  ]),
  ...getChainDeployment("airdrops", ChainId.SUPERSEED_SEPOLIA, [
    {
      address: "0xb5951501D416cb7326e5b9bEB6EF8840a8DF6910",
      name: contractNames.airdrops.SABLIER_MERKLE_FACTORY,
    },
  ]),
  ...getChainDeployment("airdrops", ChainId.TAIKO_HEKLA, [
    {
      address: "0xB5F4FB527568f88F8898Ce5F366f4d72e2C742BE",
      name: contractNames.airdrops.SABLIER_MERKLE_FACTORY,
    },
  ]),
};

export default testnets;
