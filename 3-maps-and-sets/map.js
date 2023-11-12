'use strict';

/*
Map

new Map()
.set
.get
.has
.delete
.forEach
.clear
.size

*/

const weatherMap = new Map();
console.log(weatherMap);

weatherMap.set('London', '10');
weatherMap.set('Moscow', '7');
weatherMap.set([1, 2, 3], 'array').set({ a: 1 }, { b: 1 });
console.log(weatherMap);
console.log(weatherMap.get('London'));

/*

Быстрое создание Map

array -> map
Object.entries -> map

*/

// const map = new Map([
//   [1, 2, 3],
//   [4, 5, 6],
// ]);

const map = new Map([
  ['London', 3],
  ['Moscow', 8],
]);

console.log(map);

const objWeather = {
  london: 10,
  moscow: 7,
  paris: 11,
};

console.log(new Map(Object.entries(objWeather)));

/*

Итерация по Map

*/

const objWeather2 = {
  london: 10,
  moscow: 7,
  paris: 11,
};

const weatherIterable = new Map(Object.entries(objWeather2));

for (const [key, value] of weatherIterable) {
  console.log(key, value);
}

weatherIterable.forEach((v, k) => console.log(k, v));

weatherIterable.keys();
weatherIterable.values;

const map2 = new Map([
  ['London', 10],
  ['Moscow', 13],
  ['Paris', 11],
]);

// console.log(new Map([map.forEach((v, k) => [k, v])]))

const resultMap = new Map();

for (const [k, v] of map2) {
  resultMap.set(v, k);
}

console.log(resultMap);

console.log(new Map([...map2].map((el) => el.reverse())));
