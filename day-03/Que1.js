// Q1. forEach vs map 

// forEach - executes a function for each element , does not return a new array . 
// map - transform element and returns a new array .

const arr = [1,2,3,4,5];
const doubled  = [];
arr.forEach(num => {
    doubled.push(num*2);
});
console.log(doubled);  // [ 2, 4, 6, 8, 10 ]

const double = arr.map(num => num*2);
console.log(double); // [ 2, 4, 6, 8, 10 ]

// map is preferred because it can transform data and return new array . 