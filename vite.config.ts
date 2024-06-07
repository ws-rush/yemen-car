import { lingui } from '@lingui/vite-plugin'
import react from '@vitejs/plugin-react'
import Icons from 'unplugin-icons/vite'
import { defineConfig } from 'vite'
import { imagetools } from 'vite-imagetools'
import { plugin, Mode } from 'vite-plugin-markdown'
import { pluginJsonServer } from 'vite-plugin-json-server'
// import { VitePWA } from 'vite-plugin-pwa'
import Inspect from 'vite-plugin-inspect'
import topLevelAwait from 'vite-plugin-top-level-await'
import remixRouter from 'unplugin-remix-router/vite'
import { qrcode } from 'vite-plugin-qrcode'
import Unimport from 'unimport/unplugin'

// https://vitejs.dev/config/
export default defineConfig(async () => {
  return {
    resolve: { alias: { '@': '/app' } },

    plugins: [
      react({
        babel: {
          plugins: ['macros'],
        },
      }),
      remixRouter(),
      lingui(),
      Icons({
        autoInstall: true,
        compiler: 'jsx',
        jsx: 'react',
        defaultStyle: 'vertical-align: middle;',
      }),
      Inspect(),
      topLevelAwait(),
      // add `declare module "@/content/*"` to vite-env.d.ts to use with typescript
      plugin({
        mode: [Mode.HTML, Mode.MARKDOWN, Mode.TOC, Mode.REACT],
      }),
      pluginJsonServer({
        profile: './db',
      }),
      // add `declare module "@/assets/*"` to vite-env.d.ts to use with typescript
      imagetools(),
      qrcode(),
      Unimport.vite({
        presets: ['react', 'react-router-dom', 'vitest'],
        dirs: [
          './app/components/**',
          './app/config/**',
          './app/middlewares/**',
          './app/stores/**',
          './app/queries/**',
        ],
        dts: true,
      }),
    ],
  }
})
