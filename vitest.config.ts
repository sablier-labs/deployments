import tsconfigPaths from "vite-tsconfig-paths";
import { defineConfig } from "vitest/config";

const TEST_JSON_RPC = Boolean(process.env.TEST_JSON_RPC);

export default defineConfig({
  plugins: [tsconfigPaths()],
  test: {
    environment: "node",
    globalSetup: "./tests/setup/global.ts",
    globals: true,
    include: TEST_JSON_RPC ? ["tests/chains.test.ts"] : ["tests/**/*.test.ts"],
    testTimeout: 10000, // 10 seconds
  },
});
