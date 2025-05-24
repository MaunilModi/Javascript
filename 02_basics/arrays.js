// const myArr = [0, 1, 2, 3, 4, 5]

// // const newArr = new Array(1, 2, 3, 4, 5)
// // console.log(newArr[0])

// console.log("A", myArr)

// const arr1 = myArr.slice(1, 3)
// console.log(arr1)
// console.log("B", myArr)

// const arr2 = myArr.splice(1, 3)
// console.log(arr2)
// console.log("C", myArr)

/////////////////////////////////////////////////////////////////////////////////

const marvel_heros = ["thor", "Ironman", "spiderman"]
const dc_heros = ["superman", "flash", "batman"]

// marvel_heros.push(dc_heros) // push whole array into marvel_heros as one element

const allHeros = marvel_heros.concat(dc_heros)
console.log(allHeros)

// Spread Operator
const all_new_heros = [...marvel_heros, ...dc_heros]
console.log(all_new_heros)

const another_arr = [1, 2, 3, 4, [1, 2], 4, [1, 2, [7, 8]]]
const real_another_arr = another_arr.flat(Infinity)

console.log(real_another_arr)

console.log(Array.isArray("Maunil"))
console.log(Array.from("Maunil"))
console.log(Array.from({name: "Maunil"})) // Interesting

const score1 = 100
const score2 = 200
const score3 = 300

console.log(Array.of(score1, score2, score3))