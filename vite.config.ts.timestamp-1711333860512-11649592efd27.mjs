// vite.config.ts
import * as path from "path";
import { defineConfig } from "file:///Users/hyuns/Documents/GitHub/unibook-renderer/node_modules/.pnpm/vite@5.2.3_@types+node@20.11.30/node_modules/vite/dist/node/index.js";
import dts from "file:///Users/hyuns/Documents/GitHub/unibook-renderer/node_modules/.pnpm/vite-plugin-dts@3.7.3_@types+node@20.11.30_typescript@5.4.3_vite@5.2.3/node_modules/vite-plugin-dts/dist/index.mjs";
var __vite_injected_original_dirname = "/Users/hyuns/Documents/GitHub/unibook-renderer";
var vite_config_default = defineConfig({
  build: {
    lib: {
      entry: path.resolve(__vite_injected_original_dirname, "src/libs/index.ts"),
      name: "index",
      fileName: "index"
    },
    rollupOptions: {
      external: ["react"],
      output: {
        globals: {
          react: "React"
        }
      }
    },
    commonjsOptions: {
      esmExternals: ["react"]
    }
  },
  resolve: {
    alias: {
      "@": path.resolve(__vite_injected_original_dirname, "./src/libs")
    }
  },
  plugins: [dts()]
});
export {
  vite_config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsidml0ZS5jb25maWcudHMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCIvVXNlcnMvaHl1bnMvRG9jdW1lbnRzL0dpdEh1Yi91bmlib29rLXJlbmRlcmVyXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ZpbGVuYW1lID0gXCIvVXNlcnMvaHl1bnMvRG9jdW1lbnRzL0dpdEh1Yi91bmlib29rLXJlbmRlcmVyL3ZpdGUuY29uZmlnLnRzXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ltcG9ydF9tZXRhX3VybCA9IFwiZmlsZTovLy9Vc2Vycy9oeXVucy9Eb2N1bWVudHMvR2l0SHViL3VuaWJvb2stcmVuZGVyZXIvdml0ZS5jb25maWcudHNcIjtpbXBvcnQgKiBhcyBwYXRoIGZyb20gXCJwYXRoXCI7XG5cbmltcG9ydCB7IGRlZmluZUNvbmZpZyB9IGZyb20gXCJ2aXRlXCI7XG5pbXBvcnQgZHRzIGZyb20gXCJ2aXRlLXBsdWdpbi1kdHNcIjtcblxuZXhwb3J0IGRlZmF1bHQgZGVmaW5lQ29uZmlnKHtcbiAgYnVpbGQ6IHtcbiAgICBsaWI6IHtcbiAgICAgIGVudHJ5OiBwYXRoLnJlc29sdmUoX19kaXJuYW1lLCBcInNyYy9saWJzL2luZGV4LnRzXCIpLFxuICAgICAgbmFtZTogXCJpbmRleFwiLFxuICAgICAgZmlsZU5hbWU6IFwiaW5kZXhcIixcbiAgICB9LFxuICAgIHJvbGx1cE9wdGlvbnM6IHtcbiAgICAgIGV4dGVybmFsOiBbXCJyZWFjdFwiXSxcbiAgICAgIG91dHB1dDoge1xuICAgICAgICBnbG9iYWxzOiB7XG4gICAgICAgICAgcmVhY3Q6IFwiUmVhY3RcIixcbiAgICAgICAgfSxcbiAgICAgIH0sXG4gICAgfSxcbiAgICBjb21tb25qc09wdGlvbnM6IHtcbiAgICAgIGVzbUV4dGVybmFsczogW1wicmVhY3RcIl0sXG4gICAgfSxcbiAgfSxcbiAgcmVzb2x2ZToge1xuICAgIGFsaWFzOiB7XG4gICAgICBcIkBcIjogcGF0aC5yZXNvbHZlKF9fZGlybmFtZSwgXCIuL3NyYy9saWJzXCIpLFxuICAgIH0sXG4gIH0sXG4gIHBsdWdpbnM6IFtkdHMoKV0sXG59KTtcbiJdLAogICJtYXBwaW5ncyI6ICI7QUFBNFQsWUFBWSxVQUFVO0FBRWxWLFNBQVMsb0JBQW9CO0FBQzdCLE9BQU8sU0FBUztBQUhoQixJQUFNLG1DQUFtQztBQUt6QyxJQUFPLHNCQUFRLGFBQWE7QUFBQSxFQUMxQixPQUFPO0FBQUEsSUFDTCxLQUFLO0FBQUEsTUFDSCxPQUFZLGFBQVEsa0NBQVcsbUJBQW1CO0FBQUEsTUFDbEQsTUFBTTtBQUFBLE1BQ04sVUFBVTtBQUFBLElBQ1o7QUFBQSxJQUNBLGVBQWU7QUFBQSxNQUNiLFVBQVUsQ0FBQyxPQUFPO0FBQUEsTUFDbEIsUUFBUTtBQUFBLFFBQ04sU0FBUztBQUFBLFVBQ1AsT0FBTztBQUFBLFFBQ1Q7QUFBQSxNQUNGO0FBQUEsSUFDRjtBQUFBLElBQ0EsaUJBQWlCO0FBQUEsTUFDZixjQUFjLENBQUMsT0FBTztBQUFBLElBQ3hCO0FBQUEsRUFDRjtBQUFBLEVBQ0EsU0FBUztBQUFBLElBQ1AsT0FBTztBQUFBLE1BQ0wsS0FBVSxhQUFRLGtDQUFXLFlBQVk7QUFBQSxJQUMzQztBQUFBLEVBQ0Y7QUFBQSxFQUNBLFNBQVMsQ0FBQyxJQUFJLENBQUM7QUFDakIsQ0FBQzsiLAogICJuYW1lcyI6IFtdCn0K
