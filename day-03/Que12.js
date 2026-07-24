// Q12. Interview Puzzle — Method Chaining with Side Effects 

const arr = [1, 2, 3];

const result = arr
.map(x => { console.log('map:', x); return x * 2; })
.filter(x => { console.log('filter:', x); return x > 2; })
.reduce((acc, x) => { console.log('reduce:', x); return acc + x; }, 0);

console.log(result);

// map runs first in the entire array.
//res : [2,4,6]

// filter runs 
// res : [4, 6]

// reduce runs 
// result : 10 

// Methods are chained but executed sequentially per stage , not er element 
// full map -> full filter -> full reduce