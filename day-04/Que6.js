// Q6. Set Operations 

const A = new Set([1, 2]);
const B = new Set([2, 3]);

function union(setA, setB) {
    return new Set([...setA, ...setB]);
}

function intersection(setA, setB) {
    return new Set([...setA].filter(x => setB.has(x)));
}

function difference(setA, setB) {
    return new Set([...setA].filter(x => !setB.has(x)));
}

function symmetricDifference(setA, setB) {
    return new Set([
        ...[...setA].filter(x => !setB.has(x)),
        ...[...setB].filter(x => !setA.has(x))
    ]);
}

console.log(union(A, B)); // {1,2,3}
console.log(intersection(A, B)); // {2}
console.log(difference(A, B)); // {1}
console.log(symmetricDifference(A, B)); // {1,3}