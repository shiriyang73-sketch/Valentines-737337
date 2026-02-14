import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: '/Valentines-737337/',  // Must match repo name exactly, with trailing slash
})
