// 自定义 commonjs 模块
import { formatDate } from "./utils/format.js"

const now = formatDate(new Date())
console.log(now)

// 第三方 commonjs 库
// import _ from 'lodash'

// console.log(_.add(4, 6))


import './css/style.css'


import App from './vue/App.vue'
import { createApp } from 'vue'

const app = createApp(App)
app.mount('#app')

const message = 'Hello rollup'
console.log(message)

const sum = (x, y) => {
  return x + y
}

export {
  sum
}
