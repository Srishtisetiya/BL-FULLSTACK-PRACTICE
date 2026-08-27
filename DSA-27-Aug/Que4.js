// part b

const user = {
    profile: {
        address: {
            city: "Patiala"
        }
    },
    getGreeting() {
        return "hi";
    }
};
console.log(user?.profile?.address?.city); // Patiala
console.log(user?.profile?.phone?.number); // undefined
console.log(user?.settings?.theme ?? "default"); // default
console.log(user.getSubscription?.()); // undefined

const money = {
    amount: 500,

    [Symbol.toPrimitive](hint) {
        if (hint === "number") return this.amount;

        if (hint === "string") {
            return `Rs. ${this.amount}`;
        }

        return `Money(${this.amount})`;
    }
};
console.log(+money); // 500
console.log(`${money}`); // Rs 500
console.log(money + " "); // Money(500)

// 1. user?.profile?.address?.city is safer because if profile or address is missing 
// or undefined, optional chaining stops the evaluation and returns undefined instead
// of throwing a TypeError.

// 2. || treats 0 and "" as falsy values and uses the default value, while ?? only uses 
// the default when the value is null or undefined; for example, 0 || 10 returns 10, 
// but 0 ?? 10 returns 0.

// 3. We can use valueOf() to return this.amount and toString() to return "Rs. 500", 
// but the limitation is that valueOf() and toString() do not give us the same explicit
//  control over the number, string, and default conversion hints that Symbol.toPrimitive provides.