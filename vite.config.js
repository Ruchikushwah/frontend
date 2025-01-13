import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  build: {
    // Adjust chunk size warning limit (optional)
    chunkSizeWarningLimit: 1000, // Increase the limit to 1000 KB

    rollupOptions: {
      output: {
        // Use manualChunks to control chunk splitting
        manualChunks(id) {
          if (id.includes("node_modules")) {
            if (id.includes("react")) {
              return "react-vendor"; // Separate React-related modules
            }
            return "vendor"; // Other dependencies
          }
        },
      },
    },
  },
});
