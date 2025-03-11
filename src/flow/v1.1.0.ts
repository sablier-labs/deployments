import chains from "../chains";
import { getDeployment } from "./shared";

const mainnets = [
  getDeployment(chains.ethereum.id, [
    {
      address: "0x3DF2AAEdE81D2F6b261F79047517713B8E844E04",
      name: "SablierFlow",
    },
    {
      address: "0x24bE13897eE1F83367661B6bA616a72523fC55C9",
      name: "FlowNFTDescriptor",
    },
  ]),
  getDeployment(chains.arbitrum.id, [
    {
      address: "0x3DF2AAEdE81D2F6b261F79047517713B8E844E04",
      name: "SablierFlow",
    },
    {
      address: "0x24bE13897eE1F83367661B6bA616a72523fC55C9",
      name: "FlowNFTDescriptor",
    },
  ]),
  getDeployment(chains.avalanche.id, [
    {
      address: "0x3DF2AAEdE81D2F6b261F79047517713B8E844E04",
      name: "SablierFlow",
    },
    {
      address: "0x24bE13897eE1F83367661B6bA616a72523fC55C9",
      name: "FlowNFTDescriptor",
    },
  ]),
  getDeployment(chains.base.id, [
    {
      address: "0x3DF2AAEdE81D2F6b261F79047517713B8E844E04",
      name: "SablierFlow",
    },
    {
      address: "0x24bE13897eE1F83367661B6bA616a72523fC55C9",
      name: "FlowNFTDescriptor",
    },
  ]),
  getDeployment(chains.berachain.id, [
    {
      address: "0x3DF2AAEdE81D2F6b261F79047517713B8E844E04",
      name: "SablierFlow",
    },
    {
      address: "0x24bE13897eE1F83367661B6bA616a72523fC55C9",
      name: "FlowNFTDescriptor",
    },
  ]),
  getDeployment(chains.blast.id, [
    {
      address: "0x3DF2AAEdE81D2F6b261F79047517713B8E844E04",
      name: "SablierFlow",
    },
    {
      address: "0x24bE13897eE1F83367661B6bA616a72523fC55C9",
      name: "FlowNFTDescriptor",
    },
  ]),
  getDeployment(chains.bsc.id, [
    {
      address: "0x3DF2AAEdE81D2F6b261F79047517713B8E844E04",
      name: "SablierFlow",
    },
    {
      address: "0x24bE13897eE1F83367661B6bA616a72523fC55C9",
      name: "FlowNFTDescriptor",
    },
  ]),
  getDeployment(chains.chiliz.id, [
    {
      address: "0x3DF2AAEdE81D2F6b261F79047517713B8E844E04",
      name: "SablierFlow",
    },
    {
      address: "0x24bE13897eE1F83367661B6bA616a72523fC55C9",
      name: "FlowNFTDescriptor",
    },
  ]),
  getDeployment(chains.coreDAO.id, [
    {
      address: "0x3DF2AAEdE81D2F6b261F79047517713B8E844E04",
      name: "SablierFlow",
    },
    {
      address: "0x24bE13897eE1F83367661B6bA616a72523fC55C9",
      name: "FlowNFTDescriptor",
    },
  ]),
  getDeployment(chains.form.id, [
    {
      address: "0x3DF2AAEdE81D2F6b261F79047517713B8E844E04",
      name: "SablierFlow",
    },
    {
      address: "0x24bE13897eE1F83367661B6bA616a72523fC55C9",
      name: "FlowNFTDescriptor",
    },
  ]),
  getDeployment(chains.gnosis.id, [
    {
      address: "0x3DF2AAEdE81D2F6b261F79047517713B8E844E04",
      name: "SablierFlow",
    },
    {
      address: "0x24bE13897eE1F83367661B6bA616a72523fC55C9",
      name: "FlowNFTDescriptor",
    },
  ]),
  getDeployment(chains.lightlink.id, [
    {
      address: "0x3DF2AAEdE81D2F6b261F79047517713B8E844E04",
      name: "SablierFlow",
    },
    {
      address: "0x24bE13897eE1F83367661B6bA616a72523fC55C9",
      name: "FlowNFTDescriptor",
    },
  ]),
  getDeployment(chains.linea.id, [
    {
      address: "0x3DF2AAEdE81D2F6b261F79047517713B8E844E04",
      name: "SablierFlow",
    },
    {
      address: "0x24bE13897eE1F83367661B6bA616a72523fC55C9",
      name: "FlowNFTDescriptor",
    },
  ]),
  getDeployment(chains.mode.id, [
    {
      address: "0x3DF2AAEdE81D2F6b261F79047517713B8E844E04",
      name: "SablierFlow",
    },
    {
      address: "0x24bE13897eE1F83367661B6bA616a72523fC55C9",
      name: "FlowNFTDescriptor",
    },
  ]),
  getDeployment(chains.morph.id, [
    {
      address: "0x3DF2AAEdE81D2F6b261F79047517713B8E844E04",
      name: "SablierFlow",
    },
    {
      address: "0x24bE13897eE1F83367661B6bA616a72523fC55C9",
      name: "FlowNFTDescriptor",
    },
  ]),
  getDeployment(chains.optimism.id, [
    {
      address: "0x3DF2AAEdE81D2F6b261F79047517713B8E844E04",
      name: "SablierFlow",
    },
    {
      address: "0x24bE13897eE1F83367661B6bA616a72523fC55C9",
      name: "FlowNFTDescriptor",
    },
  ]),
  getDeployment(chains.polygon.id, [
    {
      address: "0x3DF2AAEdE81D2F6b261F79047517713B8E844E04",
      name: "SablierFlow",
    },
    {
      address: "0x24bE13897eE1F83367661B6bA616a72523fC55C9",
      name: "FlowNFTDescriptor",
    },
  ]),
  getDeployment(chains.scroll.id, [
    {
      address: "0x3DF2AAEdE81D2F6b261F79047517713B8E844E04",
      name: "SablierFlow",
    },
    {
      address: "0x24bE13897eE1F83367661B6bA616a72523fC55C9",
      name: "FlowNFTDescriptor",
    },
  ]),
  getDeployment(chains.sei.id, [
    {
      address: "0x3DF2AAEdE81D2F6b261F79047517713B8E844E04",
      name: "SablierFlow",
    },
    {
      address: "0x24bE13897eE1F83367661B6bA616a72523fC55C9",
      name: "FlowNFTDescriptor",
    },
  ]),
  getDeployment(chains.superseed.id, [
    {
      address: "0x3DF2AAEdE81D2F6b261F79047517713B8E844E04",
      name: "SablierFlow",
    },
    {
      address: "0x24bE13897eE1F83367661B6bA616a72523fC55C9",
      name: "FlowNFTDescriptor",
    },
  ]),
  getDeployment(chains.taiko.id, [
    {
      address: "0x3DF2AAEdE81D2F6b261F79047517713B8E844E04",
      name: "SablierFlow",
    },
    {
      address: "0x24bE13897eE1F83367661B6bA616a72523fC55C9",
      name: "FlowNFTDescriptor",
    },
  ]),
  getDeployment(chains.unichain.id, [
    {
      address: "0x3DF2AAEdE81D2F6b261F79047517713B8E844E04",
      name: "SablierFlow",
    },
    {
      address: "0x24bE13897eE1F83367661B6bA616a72523fC55C9",
      name: "FlowNFTDescriptor",
    },
  ]),
  getDeployment(chains.xdc.id, [
    {
      address: "0x3DF2AAEdE81D2F6b261F79047517713B8E844E04",
      name: "SablierFlow",
    },
    {
      address: "0x24bE13897eE1F83367661B6bA616a72523fC55C9",
      name: "FlowNFTDescriptor",
    },
  ]),
];

const testnets = [
  getDeployment(chains.arbitrumSepolia.id, [
    {
      address: "0x3DF2AAEdE81D2F6b261F79047517713B8E844E04",
      name: "SablierFlow",
    },
    {
      address: "0x24bE13897eE1F83367661B6bA616a72523fC55C9",
      name: "FlowNFTDescriptor",
    },
  ]),
  getDeployment(chains.baseSepolia.id, [
    {
      address: "0x3DF2AAEdE81D2F6b261F79047517713B8E844E04",
      name: "SablierFlow",
    },
    {
      address: "0x24bE13897eE1F83367661B6bA616a72523fC55C9",
      name: "FlowNFTDescriptor",
    },
  ]),
  getDeployment(chains.ethereumSepolia.id, [
    {
      address: "0x3DF2AAEdE81D2F6b261F79047517713B8E844E04",
      name: "SablierFlow",
    },
    {
      address: "0x24bE13897eE1F83367661B6bA616a72523fC55C9",
      name: "FlowNFTDescriptor",
    },
  ]),
  getDeployment(chains.optimismSepolia.id, [
    {
      address: "0x3DF2AAEdE81D2F6b261F79047517713B8E844E04",
      name: "SablierFlow",
    },
    {
      address: "0x24bE13897eE1F83367661B6bA616a72523fC55C9",
      name: "FlowNFTDescriptor",
    },
  ]),
];

const deployments = [...mainnets, ...testnets];

export default deployments;
