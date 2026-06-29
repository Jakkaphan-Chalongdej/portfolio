import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// The site is served from https://<user>.github.io/portfolio/
// so the base path must match the repository name.
export default defineConfig({
  base: "/portfolio/",
  plugins: [react()],
});
