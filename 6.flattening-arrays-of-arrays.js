const arrOfArrs = [ [1, 2, 3], [4, 5, 6], [7, 8, 9] ]

const flat = arrOfArrs.reduce((accumulator, amount) => {
  return accumulator.concat(amount);
}, [])

console.log(flat) // returns [ 1, 2, 3, 4, 5, 6, 7, 8, 9 ]



const data = [
  {a: 'happy', b: 'robin', c: ['blue','green']}, 
  {a: 'tired', b: 'panther', c: ['green','black','orange','blue']}, 
  {a: 'sad', b: 'goldfish', c: ['green','red']}
]
// array of colors
const colors = data.reduce((accumulator, amount) => {
  amount.c.forEach( color => {
      accumulator.push(color);
  })
  return accumulator;
}, [])

console.log(colors) // returns [ 'blue', 'green', 'green', 'black', 'orange', 'blue', 'green', 'red' ]

// array of unique colors
const uniqueColors = data.reduce((accumulator, amount) => {
  amount.c.forEach( color => {
    if (accumulator.indexOf(color) === -1){
     accumulator.push(color);
    }
  });
  return accumulator;
}, [])

console.log(uniqueColors) // returns [ 'blue', 'green', 'black', 'orange', 'red' ]