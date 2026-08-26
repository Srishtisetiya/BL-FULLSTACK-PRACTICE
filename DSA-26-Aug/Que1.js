// Valid Parenthesis 

function isValid(s){
    const stack = [];

    for(let char of s){
        if(char === '(' || char === '{' || char === '['){
            stack.push(char);
        }
        else{
            if(stack.length === 0) return false;
            else{
                const top = stack.pop();
            if( char === ')' && top !== '(' || 
                char === '}' && top !== '{' ||
                char === ']' && top !== '['){
                return false;
            }
        }
    }
}
return stack.length === 0;
}
    

console.log(isValid("{[()]}")); 
console.log(isValid("([)]")); 

// The invariant is that the stack contains all currently unmatched opening brackets, 
// and its top is always the bracket that must be matched by the next closing bracket. 
// Since brackets close in reverse order of opening, this is exactly LIFO behavior, 
// which is what a stack provides.

// Yes, for example by repeatedly removing matching pairs, but that requires repeated passes
//  over the string and can become O(n²). The stack gives us an O(n) solution and directly models 
// the nested LIFO structure of brackets.