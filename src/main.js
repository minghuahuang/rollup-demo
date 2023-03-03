// ES Module 和 CommonJS
import { formatDate } from "./utils/format.js"
// import _ from 'lodash'

import './css/style.css'

const message = 'Hello rollup'

console.log(message)

const now = formatDate(new Date())

console.log(now)

// console.log(_.add(4, 6))

const sum = (x, y) => {
  return x + y
}

export {
  sum
}
