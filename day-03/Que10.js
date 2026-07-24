// Q10. Custom Implementation of map 

const arr = [1, 2, 3];

Array.prototype.myMap = function(callback, thisArg) {
    const result = new Array(this.length);

    for (let i = 0; i < this.length; i++) {
        if (i in this) { 
            result[i] = callback.call(thisArg, this[i], i, this);
        }
    }

    return result;
};

const output = arr.myMap((num) => num * 2);
console.log(output);