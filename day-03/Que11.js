// Q11. reduceRight vs reduce 

// reduce - left to right 
// reduceRight - right to left

const arr = [[1,2],[3,4],[5,6]];

const left = arr.reduce((acc, curr) => acc.concat(curr), []);
const right = arr.reduceRight((acc, curr) => acc.concat(curr), []);

console.log(left);  // [1,2,3,4,5,6]
console.log(right); // [5,6,3,4,1,2]

// we can use reduceRight when we want to do reversing operations