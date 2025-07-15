import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { ghPages } from 'vite-plugin-gh-pages'

export default defineConfig({
  base: '/NANDHA-portfolio/',  // ✅ Add this line
  plugins: [react(), ghPages()],
  server: {
    hmr: {
      overlay: false
    }
  }
})
