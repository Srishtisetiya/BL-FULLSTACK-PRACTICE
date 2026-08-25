// Q3 (Intermediate-Advanced) – Merge K Sorted Linked Lists

// Input: [[1,4,5],[1,3,4],[2,6]]
// Output: [1,1,2,3,4,4,5,6]

class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

// brute force
function mergeKListsBrute(lists) {
    let values = [];
    for (let list of lists) {
        let current = list;

        while (current !== null) {
            values.push(current.value);
            current = current.next;
        }
    }

    
    values.sort((a, b) => a - b);

    
    let dummy = new Node(0);
    let current = dummy;

    for (let value of values) {
        current.next = new Node(value);
        current = current.next;
    }

    return dummy.next;
}

// Time:  O(N log N)
// Space: O(N)
// The O(N) space is because we store all values in the array.

// min heap 
// Doubt 