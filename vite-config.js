import { defineConfig } from "vite";

export default defineConfig({
  root: 'src/', // Your source files (optional)
  publicDir: '../static/', // Public assets (optional)
  base: "/3D-Airplane-Viewer/", // GitHub Pages base path
  build: {
    outDir: "../dist", // Ensure the output is in "dist/"
  }
});
