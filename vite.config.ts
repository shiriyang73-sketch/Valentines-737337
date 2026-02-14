import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'  // This is needed for the alias below

export default defineConfig({
  plugins: [react()],
  base: '/Valentines-737337/',  // Keep this for GitHub Pages subpath

  resolve: {
    alias: {
      // Fix for @/ imports (shadcn/ui, components, etc.)
      '@': path.resolve(__dirname, './src'),

      // Extra fix for TanStack Query import issues in Vite/Rollup builds
      '@tanstack/react-query': path.resolve(__dirname, './node_modules/@tanstack/react-query')
    }
  }
})
