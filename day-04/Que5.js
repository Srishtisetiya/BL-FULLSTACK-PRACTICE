// Q5. Set for Deduplication 

function uniqueElementsSet(arr) {
    return [...new Set(arr)];
}

// 2. Using filter + indexOf
function uniqueElementsFilter(arr) {
    return arr.filter((item, index) => arr.indexOf(item) === index);
}

// Example
console.log(uniqueElementsSet([1, 2, 2, 3, 1])); // [1,2,3]
console.log(uniqueElementsFilter([1, 2, 2, 3, 1]));

// time complexity
// set - O(n). and filter + indexOf - O(n^2);
// set is much faster for larger arrays.
