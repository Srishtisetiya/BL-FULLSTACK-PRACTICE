// Q5. const with Objects & Arrays
const person = { name: "Alice" };
const numbers = [1, 2, 3];

person.name = "Bob"; // valid

// person = { name: "Charlie" }; // invalid bcz const varibales can not be reassigned.

numbers.push(4); // valid


// numbers = [5, 6, 7]; // invalid as const can not be reassigned . 

Object.freeze(person); // vaid 
// freeze make objects immutable 


person.name = "Dave"; // will not change because of freeze , now it is immutable . 

console.log(person);