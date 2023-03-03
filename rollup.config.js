// import commonjs from '@rollup/plugin-commonjs'

// export default {
//   // 入口文件
//   input: './src/main.js',
//   // 输入文件
//   output: {
//     format: 'umd',
//     name: 'umdUtils',
//     file: 'dist/bundle.umd.js'
//   },
//   plugins: [
//     commonjs()
//   ]
// }

const commonjs = require('@rollup/plugin-commonjs')
const resolve = require('@rollup/plugin-node-resolve')
const babel = require('@rollup/plugin-babel')
const terser = require('@rollup/plugin-terser')
const postcss = require('rollup-plugin-postcss')
const vue = require('rollup-plugin-vue')
const replace = require('rollup-plugin-replace')
const serve = require('rollup-plugin-serve')
const reload = require('rollup-plugin-livereload')

console.log(process.env.NODE_ENV)

const isPROD = process.env.NODE_ENV === 'production'
const plugins = [
  commonjs(),
  resolve(),
  replace({
    'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV)
  }),
  babel({ babelHelpers: 'bundled' }),
  postcss(),
  vue(),
]

if(isPROD) {
  plugins.push(terser())
} else {
  const devPlugins = [
    serve({
      open: true,
      post: 3000,
      contentBase: '.'
    }),
    reload(), // 监听文件自动重新打包
  ]
  plugins.push(...devPlugins)
}

module.exports = {
  // 入口文件
  input: './src/main.js',
  // 输入文件
  output: {
    format: 'umd',
    name: 'umdUtils',
    file: 'dist/bundle.umd.js'
  },
  plugins,
}

