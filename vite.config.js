import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { configDotenv } from "dotenv";
import tailwind from "@tailwindcss/vite-plugin"; // Correct package name

// Load environment variables
configDotenv();

export default defineConfig({
  plugins: [react(), tailwind()],
  test: {
    globals: true,
    environment: "jsdom",
    setupFiles: "./src/test/setup.js",
  },
});
