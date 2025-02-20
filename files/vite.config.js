import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";

// https://vitejs.dev/config/
export default defineConfig({
    css: {
    preprocessorOptions: {
      scss: {
        api: "modern-compiler",
        silenceDeprecations: [
          "color-functions",
          "global-builtin",
          "import",
          "mixed-decls",
        ],
      },
    },
  },
  plugins: [react()],
  resolve: {
    alias: {
      src: "/src",
    },
  },
});
