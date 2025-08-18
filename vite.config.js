import { defineConfig } from "vite";
import react from "@vitejs/plugin-react"; // if using React
import { VitePWA } from "vite-plugin-pwa";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  plugins: [
    tailwindcss(),

    react(),
    VitePWA({
      registerType: "autoUpdate",
      manifest: {
        name: "My PWA App",
        short_name: "PWAApp",
        description: "A sample Progressive Web App with Vite",
        theme_color: "#ffffff",
        icons: [
          {
            src: "/icons/192.png",
            sizes: "192x192",
            type: "image/png",
          },
          {
            src: "/icons/512.png",
            sizes: "512x512",
            type: "image/png",
          },
          {
            src: "/icons/512.png",
            sizes: "512x512",
            type: "image/png",
            purpose: "any maskable",
          },
        ],
      },
    }),
  ],
});
