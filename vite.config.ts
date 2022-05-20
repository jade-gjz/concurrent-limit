import { defineConfig } from 'vite'
import { fileURLToPath } from 'url'
import react from '@vitejs/plugin-react'
import AutoImport from 'unplugin-auto-import/vite'
import { AntdResolve, createStyleImportPlugin } from '@jhqn/vite-plugin-style-import'
import Unocss from 'unocss/vite'

const resolve = (dir: string) => fileURLToPath(new URL(dir, import.meta.url))

// https://vitejs.dev/config/
export default defineConfig(() => ({
  server: {
    host: true,
  },
  plugins: [
    react(),
    AutoImport({
      imports: ['react', 'react-router-dom'],
      dts: resolve('src/typings/auto-imports.d.ts'),
    }),
    createStyleImportPlugin({
      resolves: [AntdResolve()],
    }),
    Unocss({
      mode: 'per-module',
    }),
  ],
  css: {
    postcss: {},
    preprocessorOptions: {
      less: {
        javascriptEnabled: true,
      },
    },
  },
  resolve: {
    alias: {
      '@': resolve('src'),
      '@i': resolve('src/assets/images'),
      '@c': resolve('src/components'),
      '@u': resolve('src/utils'),
    },
  },
  build: {
    manifest: true,
    assetsDir: 'js',
    rollupOptions: {
      output: {
        chunkFileNames: 'js/[name]-[hash].js',
        entryFileNames: 'js/[name]-[hash].js',
        assetFileNames: chunkInfo => {
          const { name } = chunkInfo
          if (name?.includes('.css')) {
            return 'css/[name]-[hash].[ext]'
          }
          return `assets/[name]-[hash].[ext]`
        },
      },
    },
  },
}))
