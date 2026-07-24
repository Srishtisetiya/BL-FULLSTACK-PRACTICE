// Q9. find, some, every 

const products = [
  { name: "Laptop", price: 800, inStock: true },
  { name: "Phone", price: 500, inStock: false },
  { name: "Tablet", price: 300, inStock: true }
];

const expensive = products.find(p => p.price > 400);
const isOutOfStock = products.some(p => !p.inStock);
const allValidNames = products.every(p => p.name.length > 3);

console.log(expensive);
console.log(isOutOfStock);
console.log(allValidNames);