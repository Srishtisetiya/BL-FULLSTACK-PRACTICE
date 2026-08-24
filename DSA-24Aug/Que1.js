// Two SUm

const nums  = [2, 7, 11, 15];
const target = 9;

function twoSum(nums , target){
    let map = new Map();
    for(let i = 0;i<nums.length;i++){
        let complement = target - nums[i];
        if(map.has(complement)){
            return [map.get(complement) , i];
        }
        map.set(nums[i] , i);
    }
}

const result = twoSum(nums , target);
console.log(result);

// if the array is sorted , i can use two pointer approach 
// where i can put one pointer in the left and another in right 
// sum = nums[left] + nums[right];
// if my sum is smaller than my target , then i will move right pointer towards left . 

let nums1 = [2, 7, 11, 15]
let target1 = 9
function twoSumSorted(nums1 , target1){
    let left = 0;
    let right = nums1.length - 1;
    for(let i = 0;i<nums1.length;i++){
        let sum = nums1[left] + nums1[right];
        if(sum === target1){
            return [left , right];
        }
        if(sum > target1){
            right--;
        }else{
            left++;
        }
    }
}

const ans = twoSumSorted(nums1 , target1);
console.log(ans);

// if duplicates are allowed . 
// we can use map 

let number  = [2,7,2,11,7];
let target2 = 9;
function allPairs(number , target2){
    let result = [];
    let map = new Map();
    for(let i = 0;i<number.length;i++){

        let complement = target2 - number[i];
        if(map.has(complement)){
            for(let idx of map.get(complement)){
                result.push([idx , i]);
            }
        }
        if(!map.has(number[i])){
            map.set(number[i] , []);
        }
        map.get(number[i]).push(i);

    }
    return result;
}

console.log(allPairs(number , target2));