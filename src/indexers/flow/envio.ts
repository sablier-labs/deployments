import config from "../config";
import { resolveEnvio } from "../helpers";

function get(chainId: number) {
  return resolveEnvio("flow", chainId);
}

const envio = config.envio.supportedChains.map(get);

export default envio;
