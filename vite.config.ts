import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import Sitemap from "vite-plugin-sitemap";
import { visualizer } from "rollup-plugin-visualizer";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const shouldAnalyze = process.env.ANALYZE === "true";

export default defineConfig({
  plugins: [
    react(),
    Sitemap({
      hostname: "https://kbvisualz.com",
      dynamicRoutes: ["/portfolio", "/about", "/pricing"],
      exclude: ["/404.html"],
      readable: true,
      changefreq: {
        "*": "monthly",
        "/": "weekly",
        "/portfolio": "weekly"
      },
      priority: {
        "*": 0.7,
        "/": 1,
        "/portfolio": 0.9,
        "/pricing": 0.85,
        "/about": 0.75
      },
      robots: [
        {
          userAgent: "*",
          allow: "/"
        }
      ]
    })
  ],
  base: "/",
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "client", "src"),
      "@shared": path.resolve(__dirname, "shared"),
      "@assets": path.resolve(__dirname, "attached_assets"),
    },
  },
  root: path.resolve(__dirname, "client"),
  build: {
    outDir: path.resolve(__dirname, "dist"),
    emptyOutDir: true,
    rollupOptions: {
      plugins: shouldAnalyze
        ? [
            visualizer({
              filename: path.resolve(__dirname, "dist", "bundle-stats.html"),
              gzipSize: true,
              brotliSize: true,
              template: "treemap"
            })
          ]
        : []
    }
  },
});
