import chains from "../chains";
import { getDeployment } from "./shared";

const mainnets = [
  getDeployment(chains.ethereum.id, [
    {
      address: "0x2D9221a63E12AA796619cb381Ec4A71b201281f5",
      name: "SablierFlow",
    },
    {
      address: "0xB69b27073Fa0366CDdf432F5976c34C9BAf7eae6",
      name: "FlowNFTDescriptor",
    },
  ]),
  getDeployment(chains.polygon.id, [
    {
      address: "0xcF2D812D5aAd4e6FeC3b05850FF056B21159D496",
      name: "SablierFlow",
    },
    {
      address: "0x011277c87158E52cfbd8A1DD4A29118D602dDa3a",
      name: "FlowNFTDescriptor",
    },
  ]),
  getDeployment(chains.arbitrum.id, [
    {
      address: "0xE0DD129Aa25a08102Fea56d7e3339E77E1C22F5E",
      name: "SablierFlow",
    },
    {
      address: "0x5F3E138DcE3FA20b88Df3E515EE0C68ad96A9F5A",
      name: "FlowNFTDescriptor",
    },
  ]),
  getDeployment(chains.optimism.id, [
    {
      address: "0x5A40DFaF8C1527eE364Ae75fdaa2a0A44091e2b2",
      name: "SablierFlow",
    },
    {
      address: "0x65a3429F7FBB9E00f3a8E7310Ec52096ed17B3eD",
      name: "FlowNFTDescriptor",
    },
  ]),
  getDeployment(chains.base.id, [
    {
      address: "0x5A40DFaF8C1527eE364Ae75fdaa2a0A44091e2b2",
      name: "SablierFlow",
    },
    {
      address: "0x65a3429F7FBB9E00f3a8E7310Ec52096ed17B3eD",
      name: "FlowNFTDescriptor",
    },
  ]),
  getDeployment(chains.avalanche.id, [
    {
      address: "0x73f503fad13203C87889c3D5c567288571B0443F",
      name: "SablierFlow",
    },
    {
      address: "0xDb0C52f2daee57668B0be03F9D7f069E604E273C",
      name: "FlowNFTDescriptor",
    },
  ]),
  getDeployment(chains.bsc.id, [
    {
      address: "0x8BB9ACA34379dE1dE9F0dd7D922E4410C6cAFa23",
      name: "SablierFlow",
    },
    {
      address: "0xB8b92490A39b1c5c5D8C7A45EB50c83046f22A1F",
      name: "FlowNFTDescriptor",
    },
  ]),
  getDeployment(chains.gnosis.id, [
    {
      address: "0x9c671523Bd6DC5153f266baaA5cDDA7aF4C2C8Bf",
      name: "SablierFlow",
    },
    {
      address: "0xD69a314261A9F1454D8eE2a22A8d9d09B93DAa9e",
      name: "FlowNFTDescriptor",
    },
  ]),
  getDeployment(chains.linea.id, [
    {
      address: "0x6E56477CC69A87A7Bd8F1c6A82852e9392742745",
      name: "SablierFlow",
    },
    {
      address: "0x40bfa3efD4bc1683919cD9071c2FEEE089650597",
      name: "FlowNFTDescriptor",
    },
  ]),
  getDeployment(chains.scroll.id, [
    {
      address: "0x1962055aeD326120d5442fC85C0A335e0A3FB07B",
      name: "SablierFlow",
    },
    {
      address: "0x3AA566d3FF2E36Ebbf379d54b5bCC9E14AAD880C",
      name: "FlowNFTDescriptor",
    },
  ]),
  getDeployment(chains.blast.id, [
    {
      address: "0x5A40DFaF8C1527eE364Ae75fdaa2a0A44091e2b2",
      name: "SablierFlow",
    },
    {
      address: "0x65a3429F7FBB9E00f3a8E7310Ec52096ed17B3eD",
      name: "FlowNFTDescriptor",
    },
  ]),
  getDeployment(chains.mode.id, [
    {
      address: "0x5A40DFaF8C1527eE364Ae75fdaa2a0A44091e2b2",
      name: "SablierFlow",
    },
    {
      address: "0x65a3429F7FBB9E00f3a8E7310Ec52096ed17B3eD",
      name: "FlowNFTDescriptor",
    },
  ]),
  getDeployment(chains.morph.id, [
    {
      address: "0x5A40DFaF8C1527eE364Ae75fdaa2a0A44091e2b2",
      name: "SablierFlow",
    },
    {
      address: "0x65a3429F7FBB9E00f3a8E7310Ec52096ed17B3eD",
      name: "FlowNFTDescriptor",
    },
  ]),
  getDeployment(chains.chiliz.id, [
    {
      address: "0xfF25abc6F0595c67385D8D859D49288aB5A940b9",
      name: "SablierFlow",
    },
    {
      address: "0xFD42e683aa86a28F3e0E7d016F03e8Fd02BA0c32",
      name: "FlowNFTDescriptor",
    },
  ]),
  getDeployment(chains.coreDAO.id, [
    {
      address: "0x5A40DFaF8C1527eE364Ae75fdaa2a0A44091e2b2",
      name: "SablierFlow",
    },
    {
      address: "0x65a3429F7FBB9E00f3a8E7310Ec52096ed17B3eD",
      name: "FlowNFTDescriptor",
    },
  ]),
  getDeployment(chains.taiko.id, [
    {
      address: "0x5A40DFaF8C1527eE364Ae75fdaa2a0A44091e2b2",
      name: "SablierFlow",
    },
    {
      address: "0x65a3429F7FBB9E00f3a8E7310Ec52096ed17B3eD",
      name: "FlowNFTDescriptor",
    },
  ]),
  getDeployment(chains.berachain.id, [
    {
      address: "0x5A40DFaF8C1527eE364Ae75fdaa2a0A44091e2b2",
      name: "SablierFlow",
    },
    {
      address: "0x65a3429F7FBB9E00f3a8E7310Ec52096ed17B3eD",
      name: "FlowNFTDescriptor",
    },
  ]),
  getDeployment(chains.superseed.id, [
    {
      address: "0x5A40DFaF8C1527eE364Ae75fdaa2a0A44091e2b2",
      name: "SablierFlow",
    },
    {
      address: "0x65a3429F7FBB9E00f3a8E7310Ec52096ed17B3eD",
      name: "FlowNFTDescriptor",
    },
  ]),
];

const testnets = [
  getDeployment(chains.ethereumSepolia.id, [
    {
      address: "0x13Ef62C3284A30d9D2ff35e95999851bbFb7C7D0",
      name: "SablierFlow",
    },
    {
      address: "0xFfb94b2005Af24fDB182D66E96ac5AAff294D905",
      name: "FlowNFTDescriptor",
    },
  ]),
  getDeployment(chains.arbitrumSepolia.id, [
    {
      address: "0x5A40DFaF8C1527eE364Ae75fdaa2a0A44091e2b2",
      name: "SablierFlow",
    },
    {
      address: "0x65a3429F7FBB9E00f3a8E7310Ec52096ed17B3eD",
      name: "FlowNFTDescriptor",
    },
  ]),
  getDeployment(chains.optimismSepolia.id, [
    {
      address: "0x5A40DFaF8C1527eE364Ae75fdaa2a0A44091e2b2",
      name: "SablierFlow",
    },
    {
      address: "0x65a3429F7FBB9E00f3a8E7310Ec52096ed17B3eD",
      name: "FlowNFTDescriptor",
    },
  ]),
  getDeployment(chains.baseSepolia.id, [
    {
      address: "0x5A40DFaF8C1527eE364Ae75fdaa2a0A44091e2b2",
      name: "SablierFlow",
    },
    {
      address: "0x65a3429F7FBB9E00f3a8E7310Ec52096ed17B3eD",
      name: "FlowNFTDescriptor",
    },
  ]),
];

const deployments = [...mainnets, ...testnets];

export default deployments;
