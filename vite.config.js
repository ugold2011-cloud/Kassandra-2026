import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { VitePWA } from "vite-plugin-pwa";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), VitePWA({
    registerType: "prompt",
    release: "KASSANDRA-2026-RC1",
    manifest: {
      name: "Kassandra-2026",
      short_name: "Kassandra",
      start_url: "/Kassandra-2026/",
      scope: "/Kassandra-2026/",
      display: "standalone",
      description: "Kassandra 2026 travel app",
      theme_color: "#6D3A8A",
      background_color: "#FFFFFF",
      icons: [
        {
          src: "pwa-192x192.png",
          sizes: "192x192",
          type: "image/png"
        },
        {
          src: "pwa-512x512.png",
          sizes: "512x512",
          type: "image/png"
        },
        {
          src: "pwa-maskable-512x512.png",
          sizes: "512x512",
          type: "image/png",
          purpose: "maskable"
        }
      ]
    },
    workbox: {
      maximumFileSizeToCacheInBytes: 4 * 1024 * 1024,
      globPatterns: [
        "**/*.{js,css,html,ico,png,svg,jpg,jpeg,webp,avif}"
      ]
    },
  })],
  base: "/Kassandra-2026/",
});