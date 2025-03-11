import chains from "./chains";

/**
 * Chains not supported by Envio. Monitor their docs for updates.
 * @see https://docs.envio.dev/docs/HyperSync/hypersync-supported-networks
 * @see https://github.com/enviodev/docs/issues/619
 */
export const envioUnsupported = {
  [chains.coreDAO.id]: true,
  [chains.form.id]: true,
  [chains.iotex.id]: true,
  [chains.lightlink.id]: true,
  [chains.sei.id]: true,
  [chains.superseed.id]: true,
  [chains.taiko.id]: true,
  [chains.tangle.id]: true,
  [chains.ultra.id]: true,
};
