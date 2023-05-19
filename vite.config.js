import { fileURLToPath, URL } from "node:url";

import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
// import { VitePWA } from "vite-plugin-pwa";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    // VitePWA({
    //   base: "/",
    //   srcDir: "src",
    //   filename: "sw.ts",
    //   registerType: 'autoUpdate',
    //   includeAssets: ["/favicon.png"],
    //   strategies: "injectManifest",
    //   manifest: {
    //     name: "DateDish",
    //     short_name: "DateDish",
    //     theme_color: "#E0067A",
    //     start_url: "/",
    //     description: "DateDish app",
    //     display: "standalone",
    //     background_color: "#000",
    //     icons: [
    //       {
    //         src: "/pwa/pwa-192x192.png",
    //         sizes: "192x192",
    //         type: "image/png",
    //       },
    //       {
    //         src: "/pwa/pwa-512x512.png",
    //         sizes: "512x512",
    //         type: "image/png",
    //       },
    //       {
    //         src: "/pwa/pwa-512x512.png",
    //         sizes: "512x512",
    //         type: "image/png",
    //         purpose: "any maskable",
    //       },
    //     ],
    //   },
    // }),
  ],
  resolve: {
    alias: {
      "@": fileURLToPath(new URL("./src", import.meta.url)),
    },
  },
});
