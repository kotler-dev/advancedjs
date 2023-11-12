'use strict';



/*

WeakMap

.get
.set
.has
.delete

Могут иметь только объекты или массивы в виде ключа.

Хранит значение до того момент пока существует ссылка на объект.
Если ссылки больше нет, то ГК удаляет ссылку.

*/

const weak = new WeakMap();
// weak.set(1, 'test')
let a = { a: 1 };
let b = { b: 2 };
weak.set(a, 'testA');
weak.set(b, 'testB');
a = null;

console.log(weak);

// setTimeout(() => {
//     console.log(weak);
// }, 12000)

const cache = new WeakMap();

function getValue(obj) {
  if (!cache.has(obj)) {
    console.log('Set obj in cache...');
    cache.set(obj, 42);
  }
//   cache.delete(obj);
  return cache.get(obj);
}

const res1 = getValue(b);
console.log(res1);
const res2 = getValue(b);
console.log(res2);
