import { defineConfig, loadEnv } from 'vite'
import vue from '@vitejs/plugin-vue'
import Components from 'unplugin-vue-components/vite' // 组件自动按需导入
import { AndDesignVueResolve, createStyleImportPlugin } from 'vite-plugin-style-import' // 实现message, notification，toast 等引入样式自动引入(1.4.1版本即可，太高会报错)
import ViteRestart from 'vite-plugin-restart' // 通过监听文件修改，自动重启 vite 服务
import { AntDesignVueResolver } from 'unplugin-vue-components/resolvers'
import AutoImport from 'unplugin-auto-import/vite' // 支持vue, vue-router, vue-i18n, @vueuse/head, @vueuse/core等自动引入
import { createSvgIconsPlugin } from 'vite-plugin-svg-icons' // 只需把下载好的 svg 文件丢到指定目录，然后就可以项目中愉快的使用了
import { createHtmlPlugin } from 'vite-plugin-html' // 一个针对 index.html，提供压缩和基于 ejs 模板功能的 vite 插件。 通过搭配 .env 文件，可以在开发或构建项目时，对 index.html 注入动态数据，例如替换网站标题。
import viteCompression from 'vite-plugin-compression' // 使用 gzip 或者 brotli 来压缩资源
import viteImagemin from 'vite-plugin-imagemin' // 打包压缩图片
import vuejsx from '@vitejs/plugin-vue-jsx' // 此插件支持在vue3中使用jsx/tsx语法
import vueSetupExtend from 'vite-plugin-vue-setup-extend' // setup语法糖name增强，使vue3语法糖支持name属性
import postcssPresetEnv from 'postcss-preset-env' // PostCSS 是一个用 JavaScript 工具和插件转换 CSS 代码的工具 添加webkit前缀
import { fileURLToPath, URL } from 'url'
import { resolve } from 'path'

// https://vitejs.dev/config/
export default ({ mode }) => defineConfig({
  plugins: [
    vue(),
    ViteRestart({ restart: ['my.config.[jt]s'] }),
    viteCompression(),
    vuejsx(),
    vueSetupExtend(),
    createStyleImportPlugin({
      resolves: [AndDesignVueResolve()],
      libs: [
        // 如果没有你需要的resolve，可以在lib内直接写，也可以给我们提供PR
        {
          libraryName: 'ant-design-vue',
          esModule: true,
          resolveStyle: (name) => {
            // 二级组件路径调整
            if (name.includes('-group')) return `ant-design-vue/es/${name.replace('-group', '')}/style/index`
            else return `ant-design-vue/es/${name}/style/index`
          }
        }
      ]
    }),
    AutoImport({
      imports: [
        'vue', 'vue-router', 'vuex', '@vueuse/head'
      ],
      resolvers: [AntDesignVueResolver()],
      // 可以选择auto-import.d.ts生成的位置，使用ts建议设置为'src/auto-import.d.ts'
      dts: 'src/auto-import.d.ts',
      eslintrc: { enabled: true }
    }),
    Components({
      dirs: ['src/components'], // 目标文件夹
      extensions: ['vue', 'tsx'], // 文件类型
      dts: 'src/components.d.ts', // 输出文件，里面都是一些import的组件键值对
      // ui库解析器，也可以自定义，需要安装相关UI库
      resolvers: [AntDesignVueResolver({ importStyle: false, resolveIcons: true })]
    }),
    createSvgIconsPlugin({
      // Specify the icon folder to be cached
      iconDirs: [resolve(process.cwd(), 'src/svg')],
      // Specify symbolId format
      symbolId: 'icon-[dir]-[name]'
    }),
    createHtmlPlugin({
      minify: true,
      /**
       * 在这里写entry后，你将不需要在`index.html`内添加 script 标签，原有标签需要删除
       * @default src/main.ts
       */
      entry: '/src/main.ts',
      /**
       * 需要注入 index.html ejs 模版的数据
       */
      inject: {
        data: {
          // 查找.env.test文件里面的VITE_PROJECT_TITLE，请以VITE_标识开头
          title: loadEnv(mode, process.cwd()).VITE_PROJECT_TITLE, 
          injectScript: '<script src="/inject.js"></script>'
        }
      }
    }),
    viteImagemin({
      gifsicle: { // gif图片压缩
        optimizationLevel: 3, // 选择1到3之间的优化级别
        interlaced: false // 隔行扫描gif进行渐进式渲染
        // colors: 2 // 将每个输出GIF中不同颜色的数量减少到num或更少。数字必须介于2和256之间。
      },
      optipng: { // png
        optimizationLevel: 7 // 选择0到7之间的优化级别
      },
      mozjpeg: { // jpeg
        quality: 20 // 压缩质量，范围从0(最差)到100(最佳)。
      },
      pngquant: { // png
        quality: [0.8, 0.9], // Min和max是介于0(最差)到1(最佳)之间的数字，类似于JPEG。达到或超过最高质量所需的最少量的颜色。如果转换导致质量低于最低质量，图像将不会被保存。
        speed: 4 // 压缩速度，1(强力)到11(最快)
      },
      svgo: { // svg压缩
        plugins: [
          { name: 'removeViewBox' },
          {
            name: 'removeEmptyAttrs',
            active: false
          }
        ]
      }
    })
  ],
  css: {
    // css预处理
    preprocessorOptions: { 
      // modifyVars: { 'primary-color': '#2186FB' },
      // javascriptEnabled: true,
      scss: { additionalData: '@import "@/style/variables.scss";' }
    },
    postcss: { plugins: [postcssPresetEnv()] }
  },
  resolve: { alias: { '@': fileURLToPath(new URL('./src', import.meta.url)) } },
  server: {
    port: 8081,
    open: 'http://localhost:8081'
  }
})
