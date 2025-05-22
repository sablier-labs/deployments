import { Protocol } from "@src/enums";
import { resolveStandard } from "@src/releases/resolvers";
import type { Sablier } from "@src/types";
import aliases from "./aliases";
import { mainnets, testnets } from "./deployments";
import manifest from "./manifest";

export const deployments: Sablier.Deployment[] = [...mainnets, ...testnets];

export const release = resolveStandard({
  aliases,
  deployments,
  isLatest: true,
  manifest,
  protocol: Protocol.Lockup,
  version: "v2.0",
});
