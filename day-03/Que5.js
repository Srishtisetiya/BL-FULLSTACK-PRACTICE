// Q5. reduce — Object Transformation 

const users = [
  { id: 1, name: "Alice", role: "admin" },
  { id: 2, name: "Bob", role: "user" },
  { id: 3, name: "Charlie", role: "admin" },
  { id: 4, name: "David", role: "user" }
];

const grouped = users.reduce((acc, user) => {
    const { role, id, name } = user;
    if (!acc[role]) {
        acc[role] = [];
    }
    acc[role].push({ id, name });

    return acc;
}, {});

console.log(grouped);