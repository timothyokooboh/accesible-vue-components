import { fileURLToPath, URL } from "node:url";

import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import VueDevTools from "vite-plugin-vue-devtools";
import { resolve } from "node:path";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue(), VueDevTools()],
  resolve: {
    alias: {
      "@": fileURLToPath(new URL("./src", import.meta.url)),
    },
  },
  build: {
    outDir: "./dist",
    lib: {
      entry: resolve(__dirname, "src/index.ts"),
      name: "ui-library",
      // We are building for CJS and ESM, use a function to rename automatically files.
      // Example: my-component-library.esm.js
      fileName: (format) => `${"ui-library"}.${format}.js`,
    },
    rollupOptions: {
      external: ["vue", "tailwindcss"],
      output: {
        globals: {
          vue: "Vue",
        },
      },
    },
  },
});
