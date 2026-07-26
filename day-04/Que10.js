// Q10. Iterating Maps & Sets 

const myMap = new Map([['a', 1], ['b', 2], ['c', 3]]);
const mySet = new Set([10, 20, 30]);

// FOR MAP
// 1. for...of
for (let [key, value] of myMap) {
    console.log(key, value);
}

for (let key of myMap.keys()) console.log(key);  // Keys

for (let val of myMap.values()) console.log(val);  // Values

for (let entry of myMap.entries()) console.log(entry); // Entries

// 2. forEach
myMap.forEach((value, key) => {
    console.log(key, value);
});

// 3. Spread
[...myMap].map(([k, v]) => console.log(k, v));

// FOR SET

for (let val of mySet) console.log(val);  // for...of

mySet.forEach(val => console.log(val));  // forEach

[...mySet].map(val => console.log(val)); // Spread