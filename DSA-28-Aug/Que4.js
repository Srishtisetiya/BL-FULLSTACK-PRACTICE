// part a - doubt

// part b - prototype

const animal = {
    eats: true,
    walk() {
        console.log(`${this.name} is walking`);
    }
};
const rabbit = Object.create(animal);
rabbit.name = "Roger";

console.log(rabbit.eats); // true
rabbit.walk(); //Roger is walking . 
console.log(rabbit.hasOwnProperty("eats")); // false
console.log(Object.getPrototypeOf(rabbit) === animal); // true

Array.prototype.last = function () {
    return this[this.length - 1];
};
console.log([1, 2, 3].last());

const dict = Object.create(null);
dict.toString = "not a function anymore";
console.log(dict.toString); // not a function anymore
// console.log(dict.hasOwnProperty);

// discussion 
// 1. A prototype chain is the sequence of objects that JavaScript follows
// to find a property or method when it is not found directly on an object.
// For rabbit - rabbit → animal → Object.prototype → null

// 2. An own property is a property that belongs directly to an object, 
// while an inherited property is a property obtained from the object's prototype chain.

// rabbit.name    own property
// rabbit.eats    inherited property
// rabbit.eats works because JavaScript searches the prototype chain , but
// rabbit.hasOwnProperty("eats") because eats does not directly belong to rabbit; it belongs to animal.

// 3. Monkey-patching is the practice of modifying or adding properties and methods to built-in 
// JavaScript prototypes.It is risky in production because it changes global behavior, 
// can interfere with for...in loops, cause name collisions with third-party libraries,
//  and may conflict with future JavaScript standard methods.

// 4. Object.create(null) creates an object with no prototype, making it useful for creating a pure 
// dictionary or key-value map without inherited properties.