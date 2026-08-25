// Q2 (Intermediate) – Detect & Remove a Cycle
// Input: 1 -> 2 -> 3 -> 4 -> 2 (cycle back to node 2)
// Output: node with value 2

class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

function detectCycle(head) {
    let slow = head;
    let fast = head;

    // Phase 1: Detect cycle
    while (fast !== null && fast.next !== null) {

        slow = slow.next;
        fast = fast.next.next;

        if (slow === fast) {
            break;
        }
    }

    // No cycle
    if (fast === null || fast.next === null) {
        return null;
    }

    // Phase 2: Find beginning of cycle
    slow = head;

    while (slow !== fast) {
        slow = slow.next;
        fast = fast.next;
    }

    return slow;
}


const node1 = new Node(1);
const node2 = new Node(2);
const node3 = new Node(3);
const node4 = new Node(4);

node1.next = node2;
node2.next = node3;
node3.next = node4;
node4.next = node2;

const result = detectCycle(node1);

if (result !== null) {
    console.log("Cycle begins at node:", result.value);
} else {
    console.log("No cycle");
}

// interview follow up
// slow moves one point at a time and fast moves two point at a time . 

// "Floyd's algorithm is guaranteed to detect a cycle because once both pointers enter the cycle, 
// the fast pointer gains one position on the slow pointer every iteration. Since the cycle has a
//  finite number of nodes, their relative distance eventually becomes zero, so they must meet. 
// It's preferred over a Set because both approaches take O(n) time, but Floyd uses only O(1) 
// extra space, whereas the Set requires O(n) space."