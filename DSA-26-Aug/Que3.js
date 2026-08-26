// Q3 (Intermediate-Advanced) – Sliding Window Maximum & Min Stack

// Part A: Given an array and a window size k, return the maximum in every sliding window
// as it moves left to right. Use a Deque (double-ended queue) to achieve O(n) overall.
// Input: nums = [1,3,-1,-3,5,3,6,7], k = 3
// Output: [3,3,5,5,6,7]

function maxSlidingWindow(nums, k) {
    const deque = [];
    let front = 0;
    const result = [];
    for (let i = 0; i < nums.length; i++) {
        while (
            front < deque.length &&
            deque[front] <= i - k
        ) {
            front++;
        }
        while (
            front < deque.length &&
            nums[deque[deque.length - 1]] <= nums[i]
        ) {
            deque.pop();
        }
        deque.push(i);
        if (i >= k - 1) {
            result.push(nums[deque[front]]);
        }
    }

    return result;
}

const nums = [1, 3, -1, -3, 5, 3, 6, 7];
const k = 3;

const result = maxSlidingWindow(nums, k);

console.log(result);

// part b 

class MinStack {
    constructor() {
        this.stack = [];
    }

    push(value) {
        let currentMin;

        if (this.stack.length === 0) {
            currentMin = value;
        } else {
            const previousMin =
                this.stack[this.stack.length - 1].currentMin;

            currentMin = Math.min(value, previousMin);
        }

        this.stack.push({
            value: value,
            currentMin: currentMin
        });
    }

    pop() {
        // if (this.stack.length === 0) {
        //     return undefined;
        // }

        return this.stack.pop().value;
    }

    top() {
        // if (this.stack.length === 0) {
        //     return undefined;
        // }

        return this.stack[this.stack.length - 1].value;
    }

    getMin() {
        // if (this.stack.length === 0) {
        //     return undefined;
        // }

        return this.stack[this.stack.length - 1].currentMin;
    }
}
const stack = new MinStack();
stack.push(5);
stack.push(3);
stack.push(7);
stack.push(2);

console.log(stack.top());    // 2
console.log(stack.getMin()); // 2

stack.pop();

console.log(stack.top());    // 7
console.log(stack.getMin()); // 3

// "Each stack entry stores not only its value but also the minimum value of the stack at that point. 
// Therefore, the current minimum is always available at the top entry, so getMin() is O(1). When the
//  minimum is popped, the previous entry already contains the previous minimum, so we don't need to scan the stack again."

// A single min remembers only the current minimum; a min-stack remembers the minimum at every stack level.