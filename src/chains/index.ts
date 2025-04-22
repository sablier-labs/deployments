/**
 * Chains on which the Sablier Protocol is deployed.
 *
 * This file contains the EVM chains supported by Sablier, including both mainnets and testnets.
 * Each chain is defined with its explorer URL, chain ID, native token, and other properties.
 *
 * For further documentation, visit:
 * @see https://docs.sablier.com/concepts/chains
 * @see https://chainlist.org
 */

import mainnets from "./mainnets";
import testnets from "./testnets";

export default { ...mainnets, ...testnets };
