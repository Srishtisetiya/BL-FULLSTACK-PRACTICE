// Q12. Interview Puzzle — Object Keys vs Map Keys 

const obj = {};
const map = new Map();

obj[5] = "number";
obj["5"] = "string";

map.set(5, "number");
map.set("5", "string");

console.log(obj[5]);      // "string"
console.log(obj["5"]);    // "string"

console.log(map.get(5));   // "number"
console.log(map.get("5")); // "string"

console.log(Object.keys(obj).length); 
console.log(map.size);                