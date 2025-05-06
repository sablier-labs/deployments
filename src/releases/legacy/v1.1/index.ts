import { sortDeployments } from "@src/helpers";
import { resolveReleaseStandard } from "@src/releases/resolvers";
import type { Sablier } from "@src/types";
import { mainnets } from "./deployments";
import { manifest } from "./manifest";

const sortedMainnets = sortDeployments(mainnets);

export const deployments: Sablier.Deployment[] = [...sortedMainnets];

export const release = resolveReleaseStandard({
  deployments,
  isLatest: true,
  manifest,
  protocol: "legacy",
  version: "v1.1",
});
