// Q12. Interview Puzzle — Closure + var + setTimeout 

function outer() {
  var x = 10;

  function inner() {
    console.log(x);
  }

  x = 20;
  return inner;
}

var fn = outer();
fn();
// closure store reference , not value 
// x is updated before function call . 

for (var i = 0; i < 3; i++) {
  (function (i) {
    setTimeout(function () {
      console.log(i);
    }, i * 1000);
  })(i);
}

// IIFE creates new scope per iteration . each i is preseved seperately. 