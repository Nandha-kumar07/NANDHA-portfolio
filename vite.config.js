import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { ghPages } from 'vite-plugin-gh-pages'

export default defineConfig({
<<<<<<< HEAD
  base: '/NANDHA-portfolio/',  // ✅ Add this line
  plugins: [react()],
  server: {
    hmr: {
      overlay: false
    }
  }
=======
  plugins: [react(), ghPages()],
  base: '/NANDHA-portfolio/'
,  // Replace with your GitHub repo name
>>>>>>> d32df6c29a4659c12dba1bb6164c196891871eec
})
