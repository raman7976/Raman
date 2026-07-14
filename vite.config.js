import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// Dev runs at '/', production build uses '/portfolio/' for GitHub Pages
// (repo name). To deploy on Vercel/Netlify instead, set base to '/'.
export default defineConfig(({ command }) => ({
  plugins: [react()],
  base: command === 'build' ? '/portfolio/' : '/',
  server: {
    // honor a PORT assigned by the environment (falls back to Vite's default)
    port: process.env.PORT ? Number(process.env.PORT) : 5173,
    host: true,
  },
}))
