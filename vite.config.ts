import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import AutoImport from 'unplugin-auto-import/vite'
import { cpus } from 'os'
import vitePluginImage from './src/vite-plugins/vitePluginImage'
import viteCompression from 'vite-plugin-compression'
import { visualizer } from 'rollup-plugin-visualizer'
import removeMapFilesPlugin from './src/vite-plugins/removeMapFilesPlugin'
import path from 'path'
import postCssPxToRem from 'postcss-pxtorem'
import tailwind from 'tailwindcss'

const totalCPUs = cpus().length
const maxWorkers = Math.ceil(totalCPUs / 2)
export default defineConfig({
    base:'/',
  plugins: [
    vitePluginImage(),
    react(),
    removeMapFilesPlugin(),
    visualizer({
      emitFile: false,
      filename: 'stats.html', //分析图生成的文件名
      open: true //如果存在本地服务端口，将在打包后自动展示
    }),
    viteCompression({
      verbose: true, //是否在控制台输出压缩结果
      disable: false, //是否禁用,相当于开关在这里
      threshold: 10240, //体积大于 threshold 才会被压缩,单位 b，1b=8B, 1B=1024KB  那我们这里相当于 9kb多吧，就会压缩
      algorithm: 'gzip', //压缩算法,可选 [ 'gzip' , 'brotliCompress' ,'deflate' , 'deflateRaw']
      ext: '.gz', //文件后缀
      deleteOriginFile: false //是否删除原文件
    }),
    AutoImport({
      eslintrc: {
        enabled: true // <-- this
      },
      imports: ['react'],
      dts: './src/types/auto-imports.d.ts',
      include: [
        /\.[tj]sx?$/, // .ts, .tsx, .js, .jsx
        /\.vue$/,
        /\.vue\?vue/, // .vue
        /\.md$/ // .md
      ]
    })
  ],
  server: {
    host: true,
    proxy: {
      '/api': {
        // 测试
        target: 'http://47.108.209.149:8800',
        changeOrigin: true
        // rewrite: (path) => path.replace(/^\/api/, '')
      }
    }
  },

  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
      '@components': path.resolve(__dirname, 'src/components/'),
      '@utils': path.resolve(__dirname, 'src/utils/')
    },
    extensions: ['.tsx', '.ts', '.json', '.br', '.gz', '.js', '.jsx', '.mjs', '.mts']
  },
  css: {
    postcss: {
      plugins: [
        tailwind,
        postCssPxToRem({
          rootValue: 16, // pc端建议：192，移动端建议：70；设计稿宽度的1 / 10
          propList: ['*', '!border', '!backdrop-filter'], // 除 border 外所有px 转 rem
          selectorBlackList: ['.el-'] // 过滤掉.el-开头的class，不进行rem转换
        })
      ]
    }
  },
  build: {
    minify: 'terser',
    terserOptions: {
      compress: {
        // 删除console.log等调试语句
        drop_console: true,
        // 删除debugger语句
        drop_debugger: true,
        // 删除无用代码（如未使用的变量）
        dead_code: true,
        // 提升变量声明
        hoist_vars: true,
        // 消除内联函数和循环内的重复计算
        inline: 2,
        // 移除不必要的圆括号
        collapse_vars: true
      },
      output: {
        // 最大化压缩数字与字符串字面量
        ascii_only: false,
        // 移除所有的注释，包括版权信息
        comments: false, // 或者保留特定类型的注释：(function (comment) { return comment.type === "comment2"; })
        // 控制是否保留引号，true表示尽可能转换为单引号
        quote_style: 1
      },
      maxWorkers: maxWorkers
    },
    rollupOptions: {
      output: {
        entryFileNames: '[name].[hash].js',
        chunkFileNames: '[name].[hash].js',
        assetFileNames: 'assets/[name].[hash][extname]',
        manualChunks(id) {
          if (id.includes('node_modules')) {
            return id.toString().split('node_modules/')[1].split('/')[0].toString()
          }
        }
      }
    },

    sourcemap: true
  }
})
