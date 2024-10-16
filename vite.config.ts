import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import federation from "@originjs/vite-plugin-federation";
import tailwindcss from "tailwindcss";

// https://vitejs.dev/config/
export default defineConfig({
  css: {
    postcss: {
      plugins: [tailwindcss()],
    }
  },
  build: {
    target: "esnext"
  },
  plugins: [react(), federation({
    name: 'remote-app',
    filename: 'remoteEntry.js',
    // Modules to expose
    exposes: {
      './App': './src/App.tsx',
      './Admin': './src/admin/Admin.tsx',
    },
    shared: ["react", "react-dom"]
  })],
})
