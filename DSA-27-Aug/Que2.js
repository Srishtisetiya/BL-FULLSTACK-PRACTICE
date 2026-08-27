// LRU Cache
// Design a Least Recently Used (LRU) Cache with get(key) and put(key, value),
// both in O(1) time. Use a Map (which preserves insertion order in JS) combined with
// delete+re-insert, or a hash map + doubly linked list.

class LRUCache {
    constructor(capacity) {
        this.capacity = capacity;
        this.cache = new Map();
    }
    get(key) {
        if (!this.cache.has(key)) {
            return -1;
        }

        const value = this.cache.get(key);
        this.cache.delete(key);
        this.cache.set(key, value);

        return value;
    }
    put(key, value) {
        if (this.cache.has(key)) {
            this.cache.delete(key);
        }
        this.cache.set(key, value);
        if (this.cache.size > this.capacity) {
            const leastRecentlyUsed = this.cache.keys().next().value;

            this.cache.delete(leastRecentlyUsed);
        }
    }
}
const cache = new LRUCache(2);

cache.put(1, 1);
cache.put(2, 2);
console.log(cache.get(1)); // 1
cache.put(3, 3);
console.log(cache.get(2)); // -1


// JavaScript's Map preserves insertion order and provides average O(1) lookup, 
// insertion, and deletion. Therefore, by deleting and reinserting accessed keys,
//  I can maintain LRU order without implementing a doubly linked list.