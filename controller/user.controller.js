import fs from "fs";

const filePath = "user.json";

export const createUser = (req, res) => {
  try {
    const users = req.users || [];

    const newUser = {
      id: Date.now(),
      ...req.body
    };

    users.push(newUser);

    fs.writeFileSync(filePath, JSON.stringify(users, null, 2));

    res.status(201).json(newUser);

  } catch (error) {
    res.status(500).send("Server error");
  }
};

export const getUser = (req, res) => {
  res.status(200).json(req.user);
};

export const updateUser = (req, res) => {
  try {
    const users = req.users;
    const index = req.userIndex;

    users[index] = { ...users[index], ...req.body };

    fs.writeFileSync(filePath, JSON.stringify(users, null, 2));

    res.status(200).send("User updated");

  } catch (error) {
    res.status(500).send("Server error");
  }
};

export const deleteUser = (req, res) => {
  try {
    const users = req.users;
    const newUsers = users.filter(u => u.id !== req.user.id);

    fs.writeFileSync(filePath, JSON.stringify(newUsers, null, 2));

    res.status(200).send("User deleted");

  } catch (error) {
    res.status(500).send("Server error");
  }
};