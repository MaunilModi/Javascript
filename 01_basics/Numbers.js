const num = 100;
console.log(num);

const newNum = new Number(100);
console.log(newNum)

console.log(newNum.toString().length)
console.log(newNum.toFixed(2))

const otherNum = 1123.89
console.log(otherNum.toPrecision(3));

const hundreds = 1000000
console.log(hundreds.toLocaleString('en-IN'))

const min = 10;
const max = 20;

console.log(Math.floor(Math.random() * (max - min + 1)) + min)