import { ChainId } from "@src/chains/ids";
import { resolveDeployment } from "@src/releases/resolvers";
import type { Sablier } from "@src/types";
import { names } from "./manifest";

const aliases = {};

/**
 * @description Mainnet deployments for Legacy v1.0
 */
export const mainnets: Sablier.Deployment[] = [
  resolveDeployment(
    ChainId.ETHEREUM,
    {
      [names.PAYROLL]: "0xbd6a40Bb904aEa5a49c59050B5395f7484A4203d",
      [names.SABLIER]: "0xA4fc358455Febe425536fd1878bE67FfDBDEC59a",
    },
    aliases,
  ),
];
