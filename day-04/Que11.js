// Q11. Map as a Cache / Memoization 

function memoize(fn) {
    const cache = new Map();
    return function (...args) {
        const key = JSON.stringify(args); // convert args → string key

        if (cache.has(key)) {
            console.log("From cache");
            return cache.get(key);
        }

        console.log("Computing");
        const result = fn(...args);
        cache.set(key, result);
        return result;
    };
}


const slowAdd = (a, b) => a + b;
const fastAdd = memoize(slowAdd);

console.log(fastAdd(2, 3)); 
console.log(fastAdd(2, 3)); 

// weak map only support object keys , If obj disappears, weak map automatically removes its entry and here keys are string which is primitives 
// , so it is not suitable . 
// so weak map cannot replace Map for this memoization example. 
// weak map is useful only when objects are the keys.

