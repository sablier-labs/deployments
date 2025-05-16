import { Protocol } from "@src/enums";
import { releases } from "@src/releases";
import type { Sablier } from "@src/types";
import _ from "lodash";

const catalog: Sablier.ContractCatalog = {
  [Protocol.Airdrops]: {},
  [Protocol.Flow]: {},
  [Protocol.Legacy]: {},
  [Protocol.Lockup]: {},
};

for (const release of releases) {
  const { protocol, version, deployments } = release;

  for (const deployment of deployments) {
    const { chainId, contracts } = deployment;

    for (const contract of contracts) {
      const address = contract.address.toLowerCase(); // lowercase needed for deterministic lookup
      const entry = {
        alias: contract.alias,
        name: contract.name,
        protocol,
        version,
      };
      _.set(catalog, [protocol, chainId, address], entry);
    }
  }
}

export default catalog;
