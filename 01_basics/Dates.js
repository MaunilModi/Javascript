const myDate = new Date();

// console.log(myDate)
// console.log(myDate.toString())
// console.log(myDate.toDateString())

// const newDate = new Date(2025, 1, 28)
const newDate = new Date("01-01-1975")
// console.log(newDate.toDateString())

let myTimeStamp = Date.now()
console.log(myTimeStamp) // milisecend
console.log(newDate.getTime())

console.log(newDate.toLocaleString('default', {
    weekday: 'long'
}))