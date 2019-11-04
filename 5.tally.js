const fruitBasket = ['banana', 'cherry', 'orange', 'apple', 'cherry', 'orange', 'apple', 'banana', 'cherry', 'orange', 'fig' ];

const count = fruitBasket.reduce( (tally, fruit) => {
  tally[fruit] = ( tally[fruit] || 0 ) + 1 
  return tally
} , {})

console.log(count) // returns { banana: 2, cherry: 3, orange: 3, apple: 2, fig: 1 }

// rewritten with the same logic:

const count2 = fruitBasket.reduce( (tally, fruit) => {
  if ( !tally[fruit] ) {
    tally[fruit] = 1;
  } else {
    tally[fruit] = tally[fruit] + 1;
  }
  return tally;
}, {});

console.log(count2) // returns { banana: 2, cherry: 3, orange: 3, apple: 2, fig: 1 }