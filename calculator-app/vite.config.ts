import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'

export default defineConfig({
  plugins: [react()],
  base: './',
  build: {
    outDir: '../',
    emptyOutDir: false,
    rollupOptions: {
      input: {
        index: './index.html',
      },
      output: {
        entryFileNames: 'js/react-[name]-[hash].js',
        chunkFileNames: 'js/react-[name]-[hash].js',
        assetFileNames: 'assets/react-[name]-[hash].[ext]',
      },
    },
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
})
