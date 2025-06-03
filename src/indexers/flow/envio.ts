import { Protocol } from "@src/enums";
import { config } from "../config";
import { resolveEnvio } from "../helpers";

function get(chainId: number) {
  return resolveEnvio(Protocol.Flow, chainId);
}

export const envio = config.envio.supportedChains.map(get);
