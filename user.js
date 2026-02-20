import fs from "fs";

const filePath = "user.json";

export function createUser(req, res) {
  try {
    const { name, gender, department, salary, startDate } = req.body;

    if (!name || !gender || !department || !salary || !startDate) {
      return res.status(400).send("All fields are required");
    }

    let users = [];

    if (fs.existsSync(filePath)) {
      const data = fs.readFileSync(filePath, "utf-8");
      users = JSON.parse(data);

      const existingUser = users.find(u => u.name === name);
      if (existingUser) {
        return res.status(409).send("User already exists");
      }
    }

    const newUser = {
      id: Date.now(),
      name,
      gender,
      department,
      salary,
      startDate
    };

    users.push(newUser);

    fs.writeFileSync(filePath, JSON.stringify(users, null, 2));

    res.status(201).send("User created successfully");

  } catch (error) {
    console.error(error);
    res.status(500).send("Server error");
  }
}




export function getUser(req, res) {
  try {
    const id = Number(req.params.id);

    if (!fs.existsSync(filePath)) {
      return res.status(404).send("User not found");
    }

    const data = fs.readFileSync(filePath, "utf-8");
    const users = JSON.parse(data);

    const user = users.find(u => u.id === id);

    if (!user) {
      return res.status(404).send("User not found");
    }

    res.status(200).json(user);

  } catch (error) {
    console.error(error);
    res.status(500).send("Server error");
  }
}




export function userUpdate(req, res) {
  try {
    const id = Number(req.params.id);
    const { name, gender, department, salary, startDate } = req.body;

    if (!fs.existsSync(filePath)) {
      return res.status(404).send("User file not found");
    }

    const data = fs.readFileSync(filePath, "utf-8");
    let users = JSON.parse(data);

    const userIndex = users.findIndex(u => u.id === id);

    if (userIndex === -1) {
      return res.status(404).send("User not found");
    }

    if (name !== undefined) users[userIndex].name = name;
    if (gender !== undefined) users[userIndex].gender = gender;
    if (department !== undefined) users[userIndex].department = department;
    if (salary !== undefined) users[userIndex].salary = salary;
    if (startDate !== undefined) users[userIndex].startDate = startDate;

    fs.writeFileSync(filePath, JSON.stringify(users, null, 2));

    res.status(200).send("User updated successfully");

  } catch (error) {
    console.error(error);
    res.status(500).send("Server error");
  }
}




export function deleteUser(req, res) {
  try {
    const id = Number(req.params.id);

    if (!fs.existsSync(filePath)) {
      return res.status(404).send("User file not found");
    }

    const data = fs.readFileSync(filePath, "utf-8");
    let users = JSON.parse(data);

    const newUsers = users.filter(user => user.id !== id);

    if (users.length === newUsers.length) {
      return res.status(404).send("User not found");
    }

    fs.writeFileSync(filePath, JSON.stringify(newUsers, null, 2));

    res.status(200).send("User deleted successfully");

  } catch (error) {
    console.error(error);
    res.status(500).send("Server error");
  }
}

