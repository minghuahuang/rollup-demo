// ES Module
// export const formatDate = (time) => {
//   if(time) {
//     const date = new Date(time)
//     const numFun = (num) => num > 9 ? num : `0${num}`
//     const [
//       year, month, day, hour, minute, second
//     ] = [
//       date.getFullYear(),
//       numFun(date.getMonth() + 1),
//       numFun(date.getDate()),
//       numFun(date.getHours()),
//       numFun(date.getMinutes()),
//       numFun(date.getSeconds())
//     ]

//     return `${year}-${month}-${day} ${hour}:${minute}:${second}`
//   } else {
//     return ''
//   }
// }

// CommonJS
function formatDate(time) {
  if(time) {
    const date = new Date(time)
    const numFun = (num) => num > 9 ? num : `0${num}`
    const [
      year, month, day, hour, minute, second
    ] = [
      date.getFullYear(),
      numFun(date.getMonth() + 1),
      numFun(date.getDate()),
      numFun(date.getHours()),
      numFun(date.getMinutes()),
      numFun(date.getSeconds())
    ]

    return `${year}-${month}-${day} ${hour}:${minute}:${second}`
  } else {
    return ''
  }
}

module.exports = {
  formatDate
}

