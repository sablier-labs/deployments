import config from "../config";
import { resolveEnvio } from "../helpers";

function get(chainId: number) {
  return resolveEnvio("lockup", chainId);
}

const envio = config.envio.supportedChains.map(get);

export default envio;
