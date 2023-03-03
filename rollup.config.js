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

module.exports = {
  // 入口文件
  input: './src/main.js',
  // 输入文件
  output: {
    format: 'umd',
    name: 'umdUtils',
    file: 'dist/bundle.umd.js'
  },
  plugins: [
    commonjs(),
    resolve(),
    babel({ babelHelpers: 'bundled' }),
    terser()
  ]
}

