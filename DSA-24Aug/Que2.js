// Que2.  reverse words and in -place rotation 

// Part A - Reverse the string sentense

const str  = "the sky is blue";
function reverse(str){
    let word = str.split(" ");
    let left = 0;
    let right = word.length - 1;
    while(left < right){
        [word[left] , word[right]] = [word[right] , word[left]];
        left++;
        right--;
        
    }
    return word.join(" ");
}
let res  = reverse(str);
console.log(res);

// Part B - Rotate array by k places 

const arr = [1, 2, 3, 4, 5, 6, 7];
const k = 3;
function rotate(arr , k){
    k = k % arr.length;
    reverseArray(arr , 0 , arr.length - 1);
    reverseArray(arr , 0 , k-1);
    reverseArray(arr , k , arr.length-1);

}

function reverseArray(arr , left , right){
   while(left < right){
    [arr[left] , arr[right]] = [arr[right] , arr[left]];
    left++;
    right--;
   }
}

rotate(arr , k);
console.log(arr);

// In place rotation matters because this can be done in O(1) but allocating
// another array would make solution O(n) in space  . 