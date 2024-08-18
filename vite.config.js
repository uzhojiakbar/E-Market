import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import svgr from "vite-plugin-svgr";
import html from "vite-plugin-html";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    svgr(),
    react(),
    html({
      inject: {
        injectTo: "head",
        // CSP header-ni qo'shish uchun meta teg
        inject: `<meta http-equiv="Content-Security-Policy" content="script-src 'self' 'unsafe-inline'; style-src 'self' 'unsafe-inline';">`,
      },
    }),
  ],
});
