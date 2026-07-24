// Q2. filter Deep Dive 


// using for loop
function filterFalsyFor(arr) {
    const result = [];

    for (let i = 0; i < arr.length; i++) {
        if (arr[i]) {
            result.push(arr[i]);
        }
    }

    return result;
}

// using reduce
function filterFalsyReduce(arr) {
    return arr.reduce((acc, curr) => {
        if (curr) acc.push(curr);
        return acc;
    }, []);
}

console.log(filterFalsyFor([0, 1, false, 2, "", 3, null]));
console.log(filterFalsyReduce([0, 1, false, 2, "", 3, null]));

// time complexity
// forEach - O(n);
// reduce - O(n);
// filter - O(n);
// All of them have same complexity as they will traverse only once .
