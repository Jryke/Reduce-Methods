const increment = (input) => input + 1

const decrement = (input) => input - 1

const double = (input) => input * 2

const halve = (input) => input / 2

let pipeline = [increment, double, decrement]

const result = pipeline.reduce((accumulator, func) => {
  return func(accumulator)
}, 1)

console.log(result) // returns 3
// explanation: initial value = 1, +1 = 2, *2 = 4, -1 = 3

let pipeline2 = [ increment, increment, increment, double, decrement, halve ]

const result2 = pipeline2.reduce((accumulator, func) => {
  return func(accumulator)
}, 1)

console.log(result2) // returns 3.5
// explanation: initial value = 1, +1 = 2, +1 = 3 +1 = 4, *2 = 8, -1 = 7, /2 = 3.5