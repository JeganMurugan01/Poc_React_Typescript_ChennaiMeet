import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  define: {
    "process.env": { REACT_APP_BASE_URL: "https://6328-2405-201-e059-b805-4973-2c50-9187-4461.ngrok-free.app" },
  },
});
