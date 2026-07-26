// Q4. Map vs Object 

 // 1.   Key Type
// Object - Object has only string / symbol type key . Numbers are automatically converted into string . 
// Map - Map can be of any type (object , number , function)

// 2.  insertion Order

// Object - Object does not gurantee insertion oreder .
// Map - Map always maintain insertion order . 

// 3. Size
// Object - Object does not have size property . It needs Object.keys(obj).length
// map - map has in-built size property.

// 4. Iteration
// Object is not  directly iterable. It needs Object.keys(), Object.values(),Object.entries().
  
// Map  - It is directly iterable using for...of.

// 5 . Performance
// Object → it is optimized for static structure.
// map - it is better for frequent insertion and deletion . 

// using Object
function countWordFrequencyObject(text) {
    const freq = {};
    const words = text.toLowerCase().split(" ");

    for (let word of words) {
        freq[word] = (freq[word] || 0) + 1;
    }

    return freq;
}

// Using map
function countWordFrequencyMap(text) {
    const freq = new Map();
    const words = text.toLowerCase().split(" ");

    for (let word of words) {
        freq.set(word, (freq.get(word) || 0) + 1);
    }

    return freq;
}

console.log(countWordFrequencyObject("hello world"));
console.log(countWordFrequencyMap("hello world"));


