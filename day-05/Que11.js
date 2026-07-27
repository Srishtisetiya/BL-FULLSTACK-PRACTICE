// Q11. Destructuring with Renaming & Defaults in Real-world Scenario 

const apiResponse = {
  data: {
    user_info: {
      first_name: "John",
      last_name: "Doe",
      is_active: true
    }
  },
  meta: { timestamp: "2024-01-01" }
};

const {
  data: {
    user_info: {
      first_name: firstName,
      last_name: lastName,
      is_active: isActive = false,
      last_login: lastLogin = "Never"
    }
  }
} = apiResponse;

console.log(firstName, lastName, isActive, lastLogin);