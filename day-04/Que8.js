// Q8. WeakMap vs Map — Garbage Collection 

let weakmap = new WeakMap();
let obj = { data: "important" };

weakmap.set(obj, "value");

// Remove reference
obj = null;
// Object can be garbage collected
// WeakMap entry disappears automatically

// weak map must be objects because javascript garbage collector can track objects references, but it can't track premitives.
// they are not enumerable (no size, no keys(), no forEach ) becuase keys can disappear anytime 

let map = new Map();
let obj2 = {};

map.set(obj2, "value");
obj2 = null;

