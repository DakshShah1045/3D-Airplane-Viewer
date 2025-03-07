import { defineConfig } from "vite";

export default defineConfig({
  base: "/3D-Airplane-Viewer/", // Replace with your GitHub repository name
  publicDir: "../static", // Keep your static assets directory
  build: {
    outDir: "dist",
    rollupOptions: {
      external: [],
    },
  },
  optimizeDeps: {
    include: ["three"],
  },
});

