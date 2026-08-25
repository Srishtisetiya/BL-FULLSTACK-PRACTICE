// Q1 (Beginner) – Build a Linked List & Reverse It

// Input: 1 -> 2 -> 3 -> 4 -> null
// Output: 4 -> 3 -> 2 -> 1 -> null

class Node {
    constructor(value){
        this.value = value;
        this.next = null;
    }
}
class LinkedList{
    constructor(head){
        this.head = null;
    }

    append(value){
        const newNode = new Node(value);
        if(this.head === null){
            this.head = newNode;
            return;
        }
        let current = this.head;
        while(current.next!== null){
            current = current.next;
        }
        current.next = newNode;
    }

    toArray(){
        const result = [];
        let curr = this.head;
        while(curr!== null){
            result.push(curr.value);
            curr = curr.next;
        }
        return result;
    }

    reverse(){
        let prev = null;
        let curr = this.head;
        let next = null;
        while(curr!== null){
            next = curr.next;
            curr.next = prev;
            prev = curr;
            curr = next;
        }
        this.head = prev;
    }
}

const list = new LinkedList();
list.append(1);
list.append(2);
list.append(3);
list.append(4);

console.log(list.toArray());
list.reverse();
console.log(list.toArray());

// interview follow up 
// let prev = null;
// let curr = head;

// intially. prev -> null and curr
                            //  ↓
                            //  1 → 2 → 3 → 4 → null
// four lines inside loop
// next = curr.next;
// we save next node before changing anything . we will modily curr.next , so we meed to remember where itw as pointing . 
// curr.next = prev;
// to reverse the pointer , now 1 is pointing to null.
// prev = curr;
// move previous forward . prev is now first node of reverse portion . 
// curr = next; 
// Move curr to the node we saved earlier.


// if i forget to save next before reassigning curr.next then I have lost  reference to the remaining list.
// because curr.next save the reference to remaining linked list . Once I reassign curr.next = prev, 
// that original reference is lost. So I first store it in next, then reverse the pointer, 
// and finally move curr to the saved next node."