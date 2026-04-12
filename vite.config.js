import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  base: '/Website_building/',
  plugins: [
    react(),
    tailwindcss(),
  ],
})