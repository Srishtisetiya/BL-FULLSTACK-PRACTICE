// Q2. Array Destructuring with Skipping & Rest 

const rgb = [255, 128, 64, 32, 16];
// 1. Extract red, skip green, extract blue
const [red , blue] = rgb;
// 2. Remaining values
const [r , g, b , ...alphaChannels] = rgb;
// 3. // 3. Swap red & blue
let a = red;
let c = blue;
[a,c] = [c,a];
console.log(red , blue , alphaChannels , a, c);