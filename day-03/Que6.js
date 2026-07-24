// Q6. Chaining Array Methods

const res = [1,2,3,4,5,6,7,8,9,10]
   .filter(num => num%2 !== 0)
   .map(num => num * num)
   .reduce((sum , num) => sum + num , 0);

console.log(res);   

