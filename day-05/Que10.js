// Q10. IIFE & Module Pattern 

const myModule = (function () {
  let secret = "Hidden Data";

  function privateMethod() {
    console.log("This is private");
  }

  return {
    publicMethod() {
      console.log("Public method called");
      privateMethod(); // accessible inside
    },
    getSecret() {
      return secret;
    }
  };
})();

// Usage
myModule.publicMethod();
console.log(myModule.getSecret());

// myModule.privateMethod(); not accessible 