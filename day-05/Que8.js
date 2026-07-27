// Q8. Closures — Private Counter 

// a closure is when function remembers the variable from its outer scope , even after that outer function has finished executing . 
function createCounter(initialValue = 0) {
  let value = initialValue; // private variable 

  return {
    increment() {
      value++;
    },
    decrement() {
      value--;
    },
    getValue() {
      return value;
    },
    reset() {
      value = initialValue;
    }
  };
}

const counter = createCounter(5);

counter.increment();
counter.increment();
console.log(counter.getValue()); // 7

counter.reset();
console.log(counter.getValue()); // 5

// createCounter() runs once , but it remembers the value ..
// even after createCounter() is done , value is not destroyed , it is preserved in memory . 
// only accessible via return functions . 