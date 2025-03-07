import { defineConfig } from "vite";
import path from "path";

export default defineConfig({
  base: "/3D-Airplane-Viewer/", // Change to your actual repo name
  publicDir: "../static",
  build: {
    outDir: "dist",
    rollupOptions: {
      external: [], // Ensure nothing is excluded
    },
  },
  resolve: {
    alias: {
      three: path.resolve("./node_modules/three"),
    },
  },
  optimizeDeps: {
    include: ["three"],
  },
});
