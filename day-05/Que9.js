// Q9. Closures in Loops — Classic Interview Question 
var funcs = [];

for (var i = 0; i < 3; i++) {
  funcs.push(function () {
    console.log(i);
  });
}

funcs[0]();
funcs[1]();
funcs[2]();

// closure in this loop capture same variable i (not its value )
// output 3 3 3 bcz var is function scoped , all functions share same i . we did not store actual values , we stored references ..

// fix Using let
var funcs = [];

for (let i = 0; i < 3; i++) {
  funcs.push(function () {
    console.log(i);
  });
}
funcs[0](); // 0
funcs[1](); // 1
funcs[2](); // 2
// Using IIFE (Immediately Invoked Function Expression)

var funcs = [];

for (var i = 0; i < 3; i++) {
  (function (i) {
    funcs.push(function () {
      console.log(i);
    });
  })(i);
}
funcs[0](); // 0
funcs[1](); // 1
funcs[2](); // 2
// it creates a new scope , passes current i as parameter 

