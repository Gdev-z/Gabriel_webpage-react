import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// Recriação fiel do portfolio Gabriel Zanon
// O site original (Framer SSR) fica intocado na raiz do repositório.
export default defineConfig({
  plugins: [react()],
  base: './',
  server: {
    port: 5173,
    open: true,
  },
  build: {
    outDir: 'dist',
    assetsInlineLimit: 4096,
  },
})
