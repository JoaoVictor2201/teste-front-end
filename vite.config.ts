import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      '/teste-front-end': {
        target: 'https://app.econverse.com.br',
        changeOrigin: true,
      },
    },
  },
})
