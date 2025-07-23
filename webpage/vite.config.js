// vite.config.js
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig(({ mode }) => ({
  base: '/',
  plugins: [react()],
  define: {
    global: 'window', // Polyfill để ánh xạ global thành window
  },
  server: {
    port: 3000,
    strictPort: true,
    open: true,
    proxy: {
      '/api': {
        target: 'https://hocho.azurewebsites.net/',
        changeOrigin: true,
        secure: false,
      },
      '/ws': {
        target: 'https://hocho.azurewebsites.net/',
        ws: true,
        changeOrigin: true,
        secure: false
      }
    },
  }
}));