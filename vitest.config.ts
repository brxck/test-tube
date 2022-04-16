import { defineConfig } from "vitest/config";

export default defineConfig({
  test: {
    include: ["src/**/*.{js,mjs,cjs,ts,mts,cts,jsx,tsx}"],
  },
});
