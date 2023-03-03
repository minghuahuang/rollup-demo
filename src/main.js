// ES Module 和 CommonJS
import { formatDate } from "./utils/format.js"
// import _ from 'lodash'

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
