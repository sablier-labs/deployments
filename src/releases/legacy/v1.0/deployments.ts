import { ChainId } from "@src/chains/ids";
import { Protocol } from "@src/enums";
import { resolveDeployment } from "@src/releases/resolvers";
import type { Sablier } from "@src/types";
import manifest from "./manifest";

const aliasMap = {};
const contractMap: Sablier.ContractMap = {
  [manifest.PAYROLL]: "0xbd6a40Bb904aEa5a49c59050B5395f7484A4203d",
  [manifest.SABLIER]: "0xA4fc358455Febe425536fd1878bE67FfDBDEC59a",
};

/**
 * @description Mainnet deployments for Legacy v1.0
 */
export const mainnets: Sablier.Deployment[] = [
  resolveDeployment(Protocol.Legacy, "v1.0", ChainId.ETHEREUM, aliasMap, contractMap),
];
