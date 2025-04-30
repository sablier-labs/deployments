import config from "../config";
import { getEnvio } from "../helpers";

function get(chainId: number) {
  return getEnvio("airdrops", chainId);
}

const envio = config.envio.supportedChains.map(get);

export default envio;
