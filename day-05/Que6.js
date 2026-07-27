// Q6. Spread Operator — Shallow Copy

// spread operator is shallow because it copies premitives directly and copies refrences for objects and arrays . 

const original = {
  name: "Srishti",
  address: {
    city: "Hisar"
  }
};

// Shallow copy
const copy = { ...original };
// we are not creating a fully independent copy , we are creating a shallow copy . 
// Top level copied and nested array and object they are not copied , they are referenced copied . 

// Modify nested object
copy.address.city = "Delhi";
console.log(original.address.city); // "Delhi"

// deep clone 
function deepClone(obj) {
  return JSON.parse(JSON.stringify(obj));
}

const deepCopy = deepClone(original);
deepCopy.address.city = "Mumbai";

console.log(original.address.city); // Still "Delhi"
