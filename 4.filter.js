const dollars = [12.95, 43.16, 48.32]

const filterAbove30 = dollars.reduce((accumulator, amount) => {
  if (amount > 30) {
    accumulator.push(amount);
  }
  return accumulator
}, [])

console.log(filterAbove30) // returns [ 43.16, 48.32 ]

const filterAndDoubleAbove30 = dollars.reduce((accumulator, amount) => {
  if (amount > 30) {
    accumulator.push(amount * 2)
  }
  return accumulator
}, [])

console.log(filterAndDoubleAbove30) // returns [ 86.32, 96.64 ]