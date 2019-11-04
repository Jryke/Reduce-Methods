const dollars = [12.95, 43.16, 48.32]

const doubled = dollars.reduce((accumulator, amount) => {
  accumulator.push(amount * 2);
  return accumulator;
}, [])

console.log(doubled) // returns [ 25.9, 86.32, 96.64 ]