// Part A: Design a RateLimiter class that allows at most N requests per rolling
// windows milliseconds per user, using a queue of timestamps per user (Map<userId,Queue<timestamp>>).

class RateLimiter {
    constructor(limit, windowMs) {
        this.limit = limit;
        this.windowMs = windowMs;
        this.requests = new Map();
    }
    allow(userId) {
        const now = Date.now();

        if (!this.requests.has(userId)) {
            this.requests.set(userId, []);
        }
        const queue = this.requests.get(userId);

        while (
            queue.length > 0 &&
            queue[0] <= now - this.windowMs
        ) {
            queue.shift();
        }
        if (queue.length >= this.limit) {
            return false;
        }

        queue.push(now);
        return true;
    }
}

const limiter = new RateLimiter(3, 1000);

console.log(limiter.allow("user1")); 
console.log(limiter.allow("user1")); 
console.log(limiter.allow("user1")); 
console.log(limiter.allow("user1")); 

// part b : Predict the output and explain each line.
const config = {};

Object.defineProperty(config, "apiKey", {
    value: "secret-123",
    writable: false,
    enumerable: false,
    configurable: false
});

config.apiKey = "hacked";
// writeable : false means the property cannot be changed.
console.log(config.apiKey); // secret-123
console.log(Object.keys(config)); // []
// enumerable: false means apiKey is hidden from Object.keys().
console.log(JSON.stringify(config)); // {}
// JSON.stringify() skips non-enumerable properties.

class Temperature {
#celsius = 0;
get fahrenheit() { return this.#celsius * 9 / 5 + 32; }
set fahrenheit(f) { this.#celsius = (f - 32) * 5 / 9; }
}
const t = new Temperature();
t.fahrenheit = 98.6;
console.log(t.fahrenheit);// 98.6

// discussion :
// There are two types of descriptors:

// Data property

// Uses:

// value → stores the actual value.
// writable → whether the value can be changed.
// enumerable → whether the property appears in things like Object.keys().
// configurable → whether the property can be deleted or its descriptor changed.

// Accessor property
// Instead of value and writable, it uses:
// get → function that runs when the property is read.
// set → function that runs when the property is assigned.

// Because enumerable: false doesn't make the property inaccessible—it just excludes 
// it from enumeration/normal JSON serialization.

// A getter provides controlled, read-only access to computed information. 
// It protects the internal state through encapsulation and allows the
// implementation to change without changing the public API, supporting the Open-Closed Principle.
