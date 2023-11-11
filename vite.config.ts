/// <reference types="vitest" />
import { fileURLToPath } from 'node:url'
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { configDefaults } from 'vitest/config'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: {
      '@': '/src'
    }
  },
  // We'll configure Vitest here (instead of vitest.config.ts file)
  test: {
    coverage: {
      provider: 'v8'
    },
    // Here we extend the default Vitest's default options
    exclude: [...configDefaults.exclude, 'e2e/*'],
    globals: true,
    // Generate an HTML report file instead of console output
    // reporters: ['html'],
    environment: 'jsdom',
    root: fileURLToPath(new URL('./', import.meta.url))
  }
})
