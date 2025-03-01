// import path from "path"
// import react from "@vitejs/plugin-react"
// import { defineConfig } from "vite"
// import tailwindcss from '@tailwindcss/vite'
// export default defineConfig({
//   plugins: [react(), tailwindcss()],
//   resolve: {
//     alias: {
//       "@": path.resolve(path.dirname(new URL(import.meta.url).pathname), "./src"),
//     },
//   },
// })

import { fileURLToPath } from "url";
import path from "path";

import tailwindcss from "@tailwindcss/vite";
import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  resolve: {
    alias: {
      "@": path.resolve(path.dirname(fileURLToPath(import.meta.url)), "src"),
    },
  },
});
