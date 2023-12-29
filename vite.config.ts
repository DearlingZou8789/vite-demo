import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { resolve } from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: {
      '@': resolve(__dirname, 'src')
    }
  },
  base: './', //设置打包路径
  server: {
    port: 4000,
    open: true, //设置服务启动时是否自动打开浏览器
    cors: true, //允许跨域

    proxy: {
      '/api': {
        target: 'https://dev-onepark.andnext.cn:8740/api',
        changeOrigin: true,
        secure: true,
        rewrite: (path) => path.replace('/api/', '/')
      }
    }
  }
})
