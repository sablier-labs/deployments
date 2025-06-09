import { mainnets, testnets } from "@src/chains";
import _ from "lodash";

if (require.main === module) {
  console.log("🌐 Mainnets:");
  console.log(
    _.values(mainnets)
      .map((c) => `• ${c.slug}`)
      .join("\n"),
  );

  console.log("\n🧪 Testnets:");
  console.log(
    _.values(testnets)
      .map((c) => `• ${c.slug}`)
      .join("\n"),
  );
}
