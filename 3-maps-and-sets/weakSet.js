'use strict';

/*

WeakSet

.add
.has
.delete

*/

let a = { a: 1 };
let b = { b: 2 };
let c = { c: 3 };
const weakSet = new WeakSet([a, b]);
console.log(weakSet);
// a = null;
setTimeout(() => {
  console.log(weakSet);
  // Удаление сильной ссылки
  weakSet.delete(a);
}, 10000);
weakSet.add(c);

console.log(weakSet.has(a));
console.log(weakSet.has(b));

console.log(weakSet.has(a));
console.log(weakSet.has(b));

console.log(weakSet);
