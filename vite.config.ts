import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'  // <-- add this line

export default defineConfig({
  plugins: [react()],
  base: '/Valentines-737337/',
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src')  // <-- this fixes @/
    }
  }
})
