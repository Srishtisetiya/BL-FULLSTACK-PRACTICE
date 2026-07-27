// Q7. Rest Parameters vs arguments 
// rest operator - collect multiple arguments into a single array .  
function sum(...nums) {
  let total = 0;
  for (let num of nums) {
    total += num;
  }
  return total;
}

console.log(sum(1, 2, 3, 4)); // 10

// rest provides actual array , argument provide array like object . sp with rest we can directly use map() , reduce() . 
// but with arguments you need to convert Array.from(arguments)

// rest works with arrow functions but arguments does not work with arrow function
// rest has cleaner and more readable code .


