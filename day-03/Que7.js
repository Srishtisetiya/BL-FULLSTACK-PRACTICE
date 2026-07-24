// Q7. Arrow Functions — Syntax & Behavior 

const greet = (name) => "Hello, " + name;
const multiply = (a, b) => a * b;

function Person() {
    this.age = 0;

    setInterval(() => {
        this.age++;
        console.log(this.age);
    }, 1000);
}

// regular function has its own this context , 
// which is determined at runtime based on how the function is called .

// Arrow function does not have its own this - it inherits this form its lexical scope . 