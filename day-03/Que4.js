// Q4. reduce — Sum & Product 

const arr = [1,2,3,4];
function reduceOperation(arr, operation) {
    return arr.reduce((acc, curr) => {
        if (operation === "sum") return acc + curr;
        if (operation === "product") return acc * curr;
        if (operation === "max") return curr > acc ? curr : acc;
    });
}

console.log(reduceOperation(arr, "sum")); 
console.log(reduceOperation(arr, "product")); 
console.log(reduceOperation(arr, "max")); 