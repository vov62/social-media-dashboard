import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'


// console.log('Environment variables:', import.meta);

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
})
