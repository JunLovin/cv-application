import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: [
      {
        find: '@components',
        replacement: path.resolve(path.join(__dirname, 'src/components')),
      },
      {
        find: '@styles',
        replacement: path.resolve(path.join(__dirname, 'src/styles'))
      },
      {
        find: '@public',
        replacement: path.resolve(path.join(__dirname, 'public'))
      }
    ],
  },
})

console.log(__dirname)