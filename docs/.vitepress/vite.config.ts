import { defineConfig } from 'vite'
import { resolve } from 'path'

export default defineConfig({
  resolve: {
    alias: {
      'vue3-echarts-charts': resolve(__dirname, '../../dist/index.js')
    }
  }
})
