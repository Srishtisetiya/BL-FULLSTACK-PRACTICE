// Q2.) Strict Mode & Variable Declaration 
// "use strict";
// x = 10;
// console.log(x);

// It is giving an error (Reference Error : x is not defined ) 
// becuase in strict mode you can not use undeclared variables .
// to fix this error we need to declare the variable .

"use strict";
let x = 10;
console.log(x);

// Q3. Data Types & typeof 

function getType(value){
    if(value === null) return "null";
    if (Array.isArray(value)) return "array";
    if (Number.isNaN(value)) return "NaN";
    if (value === Infinity || value === -Infinity) return "Infinity";
    return typeof value;
}

console.log(getType(null));
console.log(getType([]));
console.log(getType({}));
console.log(getType(NaN));
console.log(getType(Infinity));
console.log(getType("hello"));
console.log(getType(42));
console.log(getType(undefined));

// Q4. Truthy & Falsy Values 

console.log(Boolean("")); // false  because it is empty string 
console.log(Boolean("0")); // true because it is not empty string
console.log(Boolean(0)); // false  because it is number 0
console.log(Boolean(" ")); // true because it is not empty string 
console.log(Boolean([])); // true   because it is an array

// Q5. Type Coercion Challenge 

console.log(1 + "2" + "2");
// 1 + "2" = "12" (number + string = string )
// "12" + "2" = "122" (string concatenation)

console.log(1 + +"2" + "2");
// 1 + +"2" = 3 (this is unary plus operator , which converts string to number)
// 3 + "2" = "32" (number + string = string )

console.log(1 + -"1" + "2");
// 1 + -"1" = 0 (this is unary minus operator , which converts string to number )
// 0 + "2" = "02" (number + string = string )

console.log(+"1" - "1" + "2");
// +"1" (unary plus operator , converts string to number) = 1
// 1 - "1" = 0 (number - string = number)
 // 0 + "2" = "02" 

console.log("A" - "B" + "2");
// "A" - "B" = NaN (string - string = NaN)
// Nan + "2" = "NaN2" (NaN + string = string )

console.log("A" - "B" + 2);
// "A" - "B" = NaN (string - string = NaN)
// NaN + 2 = NaN (NaN + number = NaN)


// Q6 . 

let str = "hello";
console.log(typeof str);
// it is giving string , so it is primitive , not an object 
console.log(str.toUpperCase());
console.log(str.length); 
 // this is not an object because javascript has temporary object wrapping (auto - boxing) 
 // so when we call str.toUpperCase() , internally js creates a temp object and then 
 // call the method and temp object is destroyed after that 

 let temp = new String(str); // create object
 temp.toUpperCase();  // call method 

 // Same for length.

//  str.test = 5;
//  console.log(str.test); // undefined

// INTERNAL WORKING 

// let temp = new string(str);
// temp.test = 5;  temp is destroyed immediately .

// when we access console.log(str.test) , javascript creates a new temp object 
// let temp = new String(str);  new object again 
// console.log(temp.test); undefined because temp is new object and test property is not defined in it


// Q7. String Primitive Methods 

function slugify(sentence){
    return sentence
    .trim()
    .toLowerCase()
    .replace(/[^a-z0-9\s]/g , "")
    .replace(/\s+/g , "-");
}
console.log(slugify(" Hello World!! "));

// Q8. Number Primitive Methods 

function formatCurrency(amount){
    return amount.toLocaleString("en-IN", {
        minimumFractionDigits: 2,
        maximumFractionDigits: 2
    });
}

console.log(formatCurrency(12345.6789));
console.log(formatCurrency(-9874.3452));