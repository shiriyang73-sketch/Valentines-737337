import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: '/Valentines-737337/'
  // Delete any line like root: 'src' or root: './src' if you see it
})
