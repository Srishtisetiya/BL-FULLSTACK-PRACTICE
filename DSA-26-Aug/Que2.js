// Implement a Queue Using Two Stacks
class MyQueue {
    constructor() {
        this.stack1 = [];
        this.stack2 = [];
    }

    enqueue(x) {
        this.stack1.push(x);
    }

    dequeue() {
        
        if (this.stack2.length === 0) {
            while (this.stack1.length > 0) {
                this.stack2.push(this.stack1.pop());
            }
        }

        return this.stack2.pop();
    }

    peek() {
        
        if (this.stack2.length === 0) {
            while (this.stack1.length > 0) {
                this.stack2.push(this.stack1.pop());
            }
        }

        return this.stack2[this.stack2.length - 1];
    }
}


// Example
const q = new MyQueue();

q.enqueue(1);
q.enqueue(2);

console.log(q.dequeue()); 
q.enqueue(3);

console.log(q.dequeue()); 
console.log(q.peek());

// The amortized complexity is O(1). Although one dequeue can cost O(n) 
// when we transfer all elements from the input stack to the output stack, 
// each element is transferred at most once from stackIn to stackOut and 
// then removed once. Therefore, across n operations, the total work is O(n), 
// giving O(1) amortized time per operation.