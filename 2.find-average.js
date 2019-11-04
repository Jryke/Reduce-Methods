const dollars = [12.95, 43.16, 48.32]

const average = dollars.reduce((accumulator, amount, index, array) => {
  accumulator += amount;
  if( index === array.length - 1 ) {
    return accumulator / array.length;
  } else { 
    return accumulator;
  }
})

console.log(average) // returns 34.81

const averageWithInitialValue = dollars.reduce((accumulator, amount, index, array) => {
  accumulator += amount
  if (index === array.length - 1) {
    return accumulator / array.length
  } else {
    return accumulator
  }
}, 0)

console.log(averageWithInitialValue) // returns 34.81