// part a
// Q4 Part A - Deep Copy Linked List with Random Pointers

class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
        this.random = null;
    }
}

function copyRandomList(head) {
    if (head === null) {
        return null;
    }
    const map = new Map();
    let current = head;
    while (current !== null) {
        map.set(current, new Node(current.value));
        current = current.next;
    }
    current = head;
    while (current !== null) {
        const copy = map.get(current);
        copy.next = map.get(current.next) || null;
        copy.random = map.get(current.random) || null;
        current = current.next;
    }
    return map.get(head);
}

const node1 = new Node(1);
const node2 = new Node(2);
const node3 = new Node(3);

node1.next = node2;
node2.next = node3;

// Random pointers
node1.random = node3;
node2.random = node1;
node3.random = node2;

const copy = copyRandomList(node1);
let current = copy;
while (current !== null) {
    console.log(
        "Value:", current.value,
        "Random:", current.random ? current.random.value : null
    );

    current = current.next;
}


// part b 
const original = {
    name: "Alice",
    address: {
        city: "Delhi"
    }
};

// 1. Reference copy
const refCopy = original;
refCopy.name = "Bob";
console.log(original.name); // Bob
// because it does not create new obj and both point to the same object . 
// 2. Shallow copy
const shallow = { ...original };
shallow.address.city = "Mumbai";
console.log(original.address.city); // Mumbai
// shallow copy copies the first level , but nested objects are still shared. 
// 3. Deep copy
const deep = structuredClone(original);
deep.address.city = "Chennai";
console.log(original.address.city); // Mumbai
// Because structuredClone() creates a completely independent nested structure.

// Discussion 1:
// A shallow copy creates a new outer object, but nested objects are still shared 
// between the original and the copy. Therefore, shallow.address and
// original.address point to the same object. So changing
// shallow.address.city also changes original.address.city.
// In a deep copy, nested objects are also copied, so they have separate
// references and changes do not affect the original.


// Discussion 2:
// Two ways to deep clone an object besides structuredClone() are:
//
// 1. JSON.parse(JSON.stringify(obj))
//    Limitation: It does not properly preserve functions, undefined, Date,
//    Map, Set, etc., and it cannot handle circular references.
//
// 2. Lodash _.cloneDeep(obj)
//    Limitation: It requires the Lodash library as an external dependency
//    and its cloning behavior may differ for some special/custom objects.

// Discussion 3:
// When original.address = null and nothing else is using the old address
// object, it becomes unreachable and can be removed by the garbage collector.
// It may not be removed immediately.
//
// V8 mainly uses mark-and-sweep. It checks which objects are still reachable
// and removes the ones that are not.
//
// Circular references are not a problem because even if two objects point to
// each other, they can still be removed if nothing else points to them.
// Reference counting could have a problem here because both objects would
// still have a reference count greater than 0.