const express = require("express");
const app = express();

const users = [
  { name: "Rahul" },
  { name: "Aman" },
  { name: "Priya" },
  { name: "Rahul Sharma" }
];

app.get("/users", (req, res) => {
  const name = req.query.name;

  if (name) {
    const filteredUsers = users.filter(user =>
      user.name.toLowerCase().includes(name.toLowerCase())
    );
    return res.json(filteredUsers);
  }

  res.json(users);
});

app.listen(3000, () => {
  console.log("Server running on port 3000");
});
