'use strict';

/*
Set

new Set()

.size
.has
.add
.delete
.clear

*/

const flights = ['Россия', 'Тверь', 'Тверь'];
console.log(flights);

const setFlights = new Set(flights);
console.log(setFlights);

for (const flight of setFlights) {
  console.log(flight);
}

// spread operator
const spread = [...setFlights]
console.log(spread)

// set of Objects
const setObj = new Set([{a: 1}, {b: 2}, {b: 2}])
console.log(setObj)

// iterable objects
console.log(new Set('abcd'))