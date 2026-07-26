// Q2. Iterable vs Array-like 
// Explain the difference between “iterables” and “array-like” objects. 

const iterable = new Set([1, 2, 3]);
const arrayLike = { 0: "a", 1: "b", 2: "c", length: 3 };

 // Converts iterable to an array using Array.from

const arrFromIterable = Array.from(iterable);
console.log(arrFromIterable); // [1, 2, 3]

const arrFromArrayLike = Array.from(arrayLike);
console.log(arrFromArrayLike); // ["a", "b", "c"]

for (let val of iterable) {
    console.log(val);
}

// it will work becuase set is iterable .and iterable has symbol.iterator which can use for..of loop

// for (let val of arrayLike) {
//     console.log(val);
// }

// arrayLike is not iterable  , it looks like an array but it has index and length but it does not have symbol.iterator 
// so for... of loop does not work

