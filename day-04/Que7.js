// Q7. WeakMap — Private Properties 
// weak map allow private data and they can not be access outside the class . 

const privateData = new WeakMap();
class User {
    constructor(name, password) {
        privateData.set(this, { name, password }); // this is a key here .
    }
    getName() {
        return privateData.get(this).name;
    }
    checkPassword(pwd) {
        return privateData.get(this).password === pwd;
    }
}

const user = new User("Alice", "secret123");

console.log(user.getName()); // Alice
console.log(user.checkPassword("secret123")); // true


console.log(user.name);     // undefined
console.log(user.password); // undefined
