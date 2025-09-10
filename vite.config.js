import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  build: {
    outDir: 'dist'
  },
  rollupOptions: {
    external: ['firebase'] // Add any external modules here
  },
  server: {
    // Optional: only needed for local dev fallback
    historyApiFallback: true
  }
})
