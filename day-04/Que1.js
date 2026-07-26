// Q1. Symbol.iterator & Custom Iterable 
// Create a custom iterable object range that generates numbers from start to end (inclusive). It should
// work with for...of loops.

function range(start, end) {
    return {
        start,
        end,
        [Symbol.iterator]() {
            let current = this.start;
            let last = this.end;
            return {
                next() {
                    if (current <= last) {
                        return { value: current++, done: false };
                    }
                    return { done: true };
                }
            };
        }
    };
}

for (let num of range(1, 5)) {
    console.log(num); // 1, 2, 3, 4, 5
}

// Using Generator Function

function* rangeGenerator(start, end) {
    for (let i = start; i <= end; i++) {
        yield i; // pauses and returns value
    }
}

for (let num of rangeGenerator(1, 5)) {
    console.log(num);
}
