// Q3. Destructuring in Function Parameters 

function displayUser(
  { name, address: { city } = {}, role = "user" } = {}
) {
  console.log(`Name: ${name}, City: ${city}, Role: ${role}`);
}

// 1. No argument passed
displayUser();
// name: undefibned , City : undefined , Role : user
displayUser({ name: "Srishti" });
// name : Srishti ,City: undefined, Role: user
displayUser({})
// name: undefined, City: undefined, Role: user

// Why = {} is VERY important
// used empty object to prevent crash . 
// Cannot destructure property 'name' of undefined