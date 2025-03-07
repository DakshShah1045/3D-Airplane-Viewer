import { defineConfig } from "vite";

export default defineConfig({
  base: "/3D-Airplane-Viewer/", // Change to your GitHub repo name
  publicDir: "../static", // Keep static assets working
  build: {
    outDir: "dist",
    rollupOptions: {
      external: [], // Ensures everything is bundled
    },
  },
  resolve: {
    alias: {
      three: "three"
    },
  },
  optimizeDeps: {
    include: ["three"], // Ensures Three.js is included in build
  },
});
