// Q1. Basic Destructuring 

const user = {
  id: 42,
  name: "John Doe",
  address: {
    city: "New York",
    zip: "10001"
  },
  hobbies: ["reading", "coding", "gaming"]
};

// 1. id and name
const {id , name} = user;
// 2. city from nested address
const {address : {city}} = user
// 3. First hobby + rest
const {hobbies : [firstHobby , ...restHobbies]} = user;
// 4. Default value
const {role = "guest"} = user;
console.log(id , name , firstHobby , restHobbies , role);