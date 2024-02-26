import dotenv from 'dotenv'
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

dotenv.config()

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  define: {
    'process.env': process.env
  },
  base: "/firebase-react/",
  server : {
    port : 8080,
    strictPort : true,
    host : true,
    origin : "http://0.0.0.0:8080"
  }
})
