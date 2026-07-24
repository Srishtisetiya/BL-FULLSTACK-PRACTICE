//  Arrow Functions & this Context 

const obj = {
value: 42,
getValue: function() {
return this.value;
},
getValueArrow: function() {
        return this.value; // fixed (do NOT use arrow here)
    },
delayedGetValue: function() {
        setTimeout(() => {
            console.log(this.value); // arrow fixes this
        }, 100);
    }
};

console.log(obj.getValue());  
console.log(obj.getValueArrow()); 
obj.delayedGetValue();  

// getValueArrow fails because arrow uses global this
// setTimeout(function(){}) loses context 
// arrow function captures outer this