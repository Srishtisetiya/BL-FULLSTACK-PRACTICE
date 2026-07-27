// Q4. var vs let vs const — Scope & Hoisting 

// snippet 1
console.log(a);
var a = 10; // undefined as var is hoisted with undefined..
// snippet 2
// console.log(b);
// let b = 20; // ReferenceError: Cannot access 'b' before initialization

// snippet 3
for (var i = 0; i < 3; i++) {
  setTimeout(() => console.log(i), 500);
} 
// var is function scoped , one shared i

// snippet 4
for (let j = 0; j < 3; j++) {
  setTimeout(() => console.log(j), 100);
}
// let is block scoped , so new j every iteration.
