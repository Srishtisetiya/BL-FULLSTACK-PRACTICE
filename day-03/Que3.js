// Q3. map with Index 

const prices = [100, 200, 300, 400];

const discounted = prices.map((price, index) => {
    if (index % 2 === 0) {
        return price * 0.9; 
    } else {
        return price * 0.95; 
    }
});

console.log(discounted); // [90, 190, 270, 380]