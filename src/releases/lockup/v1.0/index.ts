import { sortDeployments } from "@src/helpers";
import type { Sablier } from "@src/types";
import { mainnets, testnets } from "./deployments";

const sortedMainnets = sortDeployments(mainnets);
const sortedTestnets = sortDeployments(testnets);
export const deployments: Sablier.DeploymentLockupV1[] = [...sortedMainnets, ...sortedTestnets];

// Set aliases on contracts in deployments
// _.forEach(deployments, (deployment) => {
//   _.forEach([deployment.core, deployment.periphery], (contracts) => {
//     _.forEach(contracts, (contract) => {
//       if (_.has(aliases, contract.name)) {
//         contract.alias = aliases[contract.name];
//       }
//     });
//   });
// });

export { default as manifest } from "./manifest";
export { default as aliases } from "./aliases";
