import fs from "fs";

const filePath = "user.json";

export const checkFile = (req, res, next) => {
  if (!fs.existsSync(filePath)) {
    return res.status(404).send("User file not found");
  }

  const data = fs.readFileSync(filePath, "utf-8");
  req.users = JSON.parse(data);
  next();
};

export const checkUserExists = (req, res, next) => {
  const id = Number(req.params.id);

  const userIndex = req.users.findIndex(u => u.id === id);

  if (userIndex === -1) {
    return res.status(404).send("User not found");
  }

  req.userIndex = userIndex;
  req.user = req.users[userIndex];

  next();
};