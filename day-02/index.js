// Q1. Number Precision 

// 0.1 + 0.2 !== 0.3 because of floating point precision issue in javascript . 
// decimals like 0.1 and 0.2 can not be represented exactly in binary floating point . 
// which leads to small rounding errors . 

console.log(0.1 + 0.2);  // 0.30000000000000004

function areFloatsEqual(a, b, epsilon = 1e-10){
    return Math.abs(a - b) < epsilon;
}

console.log(areFloatsEqual(0.1 + 0.2, 0.3)); 

// Q2. Number Parsing 
function parseNumber(input) {
    if (typeof input !== "string") return NaN;

    let trimmed = input.trim();

    if (trimmed === "") return NaN;

    // Handle hex
    if (/^0x[0-9a-fA-F]+$/.test(trimmed)) {
        return Number(trimmed);
    }

    let num = Number(trimmed);

    return isNaN(num) ? NaN : num;
}

// Comparison:
// Number("123abc") = NaN
// parseInt("123abc") = 123
// parseFloat("123.45abc") = 123.45

console.log(parseNumber(" 123 "));   // 123
console.log(parseNumber("0xFF"));    // 255
console.log(parseNumber("abc"));     // NaN
console.log(parseNumber(""));        // NaN

// Q3. Math Object Methods 

function generateUniqueNum(){
    let set = new Set();
    while(set.size < 10){
        let num = Math.floor(Math.random() * 100) + 1;
        set.add(num);
    }
    return Array.from(set).sort((a, b) => a - b);
}
console.log(generateUniqueNum());

// Q4. String Immutability 

let str = "JavaScript";
str[0] = "j";
console.log(str); // "JavaScript"


// Strings are immutable in JS. You cannot change characters directly.

function replaceAt(str, index, char) {
    if (index < 0 || index >= str.length) return str;
    return str.substring(0, index) + char + str.substring(index + 1);
}
console.log(replaceAt("JavaScript", 0, "j")); // javaScript


// Q5. String Methods Challenge 

function extractDomain(email) {
    if (typeof email !== "string") return "Invalid Email";
    let trimmed = email.trim();
    let parts = trimmed.split("@");
    if (parts.length !== 2) return "Invalid Email";
    let domain = parts[1];
    if (!domain) return "Invalid Email";
    return domain;
}

console.log(extractDomain(" john.doe@example.com ")); // example.com
console.log(extractDomain("abc@@gmail.com")); // Invalid Email


// Q6. Template Literals & Tagged Templates 

function highlight(strings, ...values) {
    let result = "";
    for (let i = 0; i < strings.length; i++) {
        result += strings[i];
        if (i < values.length) {
            result += `[[${values[i]}]]`;
        }
    }
    return result;
}

const name = "Alice";
const age = 25;

console.log(highlight`Name: ${name}, Age: ${age}`);


// Q7. Array Creation & Access Patterns 

// 1. Array Literal notation
let matrix1 = [
    [1, 0, 0],
    [0, 1, 0],
    [0, 0, 1]
];

// 2. Array.from()
let matrix2 = Array.from({ length: 3 }, (_, i) =>
    Array.from({ length: 3 }, (_, j) => (i === j ? 1 : 0))
);

// 3. new Array() with a loop
let matrix3 = new Array(3);

for (let i = 0; i < 3; i++) {
    matrix3[i] = new Array(3);
    for (let j = 0; j < 3; j++) {
        matrix3[i][j] = i === j ? 1 : 0;
    }
}

// Access row 2, col 3 (1-based => [1][2])
console.log(matrix1[1][2]); // 0 
console.log(matrix2[1][2]); // 0
console.log(matrix3[1][2]); // 0

// Q8. Array Mutability 

const arr = [1, 2, 3];
arr.push(4); // it will work , as we are mutating the array , not reassigning it . 

// arr = [5,6,7]; // error 

// Explanation:
// const prevents reassignment, NOT mutation. 

function freezeArray(arr) {
    return Object.freeze(arr);
}
let frozen = freezeArray([1, 2, 3]);

// frozen.push(4); // it will give error in strict mode
console.log(frozen);


// Q9. Array Methods — splice vs slice 
let arr9 = [10, 20, 30, 40, 50];
let sliced = arr9.slice(1, 3);
let spliced = arr9.splice(1, 3);

// slice - they are non mutating . it does not chaange the riginal array , it returns new array.
// splice - it changes  original array . used to add , remove or replace elements.

console.log(arr9);   // [10, 50]
console.log(sliced); // [20, 30]
console.log(spliced); // [20, 30, 40]

// Q10. Multi-dimensional Array Operations 

function flattenAndSum(matrix) {
    let sum = 0;
    for (let i = 0; i < matrix.length; i++) {
        for (let j = 0; j < matrix[i].length; j++) {
            sum += matrix[i][j];
        }
    }
    return sum;
}
console.log(flattenAndSum([[1,2],[3,4],[5,6]])); // 21

// Q11. String Array Conversion 
function reverseWords(sentence) {
    return sentence
        .split(" ")
        .reverse()
        .join(" ");
}
console.log(reverseWords("The quick brown fox"));

// Q12. Interview Puzzle — Array-like Objects 
function test() {
    console.log(Array.isArray(arguments)); // false
    console.log(arguments.length); // 3
    console.log(arguments[0]); // 1

    // arguments.forEach(...) not allowed 

    const argsArray = Array.from(arguments);

    console.log(Array.isArray(argsArray)); // true
}

test(1, 2, 3);

// Explanation:
// "arguments" is array-like: it has index , has length
// Convert using: Array.from(arguments)


