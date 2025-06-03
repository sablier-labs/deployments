import { logAndThrow } from "@scripts/logger";
import type { Sablier } from "@src/types";

export function throwNotFoundErr(release: Sablier.Release, chainName: string, contractName: string): never {
  const msg = `Found broadcasts for ${chainName}, but contract ${contractName} is missing`;
  logAndThrow({ msg, release });
}
