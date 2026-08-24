// Part A: Find the contiguous subarray with the largest sum and return that sum.
// Input: nums = [-2,1,-3,4,-1,2,1,-5,4]
// Output: 6 // subarray [4,-1,2,1]

const nums = [-2,1,-3,4,-1,2,1,-5,4];

function maxSubArray(nums){
    let currSum = nums[0];  
    let maxSum  = nums[0]; 

    for(let i = 1;i<nums.length;i++){
        let ans = nums[i] + currSum;  
        currSum = Math.max(ans , nums[i]); 
        maxSum = Math.max(maxSum , currSum);
    }
    return maxSum;
}
let res = maxSubArray(nums);
console.log(res);


// Part B: Given a string, find the length of the longest substring without repeating char-acters (classic sliding window).

// Input: "abcabcbb"
// Output: 3 // "abc"

const str = "abcabcbb";
function longestSubstring(str){
    let set = new Set();
    let left  = 0;
    let maxLen  = 0;
    for(let right = 0;right <str.length;right++){
        while(set.has(str[right])){
            set.delete(str[left]);
            left++;
        }
        set.add(str[right]);
        maxLen = Math.max(maxLen , right - left + 1);
    }
    return maxLen;
}
let ans  = longestSubstring(str);
console.log(ans);

// Time Complexity: O(n)
// Space Complexity: O(n)
// Set provides O(1) average-time lookup, insertion, and deletion.
// It helps us keep track of characters currently present in the window.

// Kadane’s Algorithm — return start/end indices


function maxSubarrayWithIndices(arr) {
    let currSum = arr[0];
    let maxSum = arr[0];

    let currStart = 0;
    let bestStart = 0;
    let bestEnd = 0;

    for (let i = 1; i < arr.length; i++) {
        if (arr[i] > currSum + arr[i]) {
            currtSum = arr[i];
            currStart = i;
        } else {
            currSum += arr[i];
        }

        if (currSum > maxSum) {
            maxSum = currSum;
            bestStart = currStart;
            bestEnd = i;
        }
    }

    return {
        maxSum,
        start: bestStart,
        end: bestEnd
    };
}

let Result = maxSubarrayWithIndices(nums);
console.log(Result);

