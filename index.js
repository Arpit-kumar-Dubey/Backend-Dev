import express from "express";
import path from "path";
import fs from "fs";

const app = express();
const PORT = 8000;
const filePath = "user.json";

app.set("view engine", "ejs");
app.set("views", path.join(process.cwd(), "views")); 

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("public"));



app.get("/", (req, res) => {
  let users = [];

  if (fs.existsSync(filePath)) {
    users = JSON.parse(fs.readFileSync(filePath, "utf-8"));
  }

  res.render("dashboard", { users });
});



app.get("/add", (req, res) => {
  res.render("addUser");
});


app.post("/add", (req, res) => {
  let users = [];

  if (fs.existsSync(filePath)) {
    users = JSON.parse(fs.readFileSync(filePath, "utf-8"));
  }

  const newUser = {
    id: Date.now(),
    ...req.body
  };

  users.push(newUser);
  fs.writeFileSync(filePath, JSON.stringify(users, null, 2));

  res.redirect("/");
});



app.get("/edit/:id", (req, res) => {
  const users = JSON.parse(fs.readFileSync(filePath, "utf-8"));
  const user = users.find(u => u.id == req.params.id);

  res.render("editUser", { user });
});



app.post("/update/:id", (req, res) => {
  let users = JSON.parse(fs.readFileSync(filePath, "utf-8"));
  const index = users.findIndex(u => u.id == req.params.id);

  users[index] = { ...users[index], ...req.body };

  fs.writeFileSync(filePath, JSON.stringify(users, null, 2));
  res.redirect("/");
});



app.get("/delete/:id", (req, res) => {
  let users = JSON.parse(fs.readFileSync(filePath, "utf-8"));
  users = users.filter(u => u.id != req.params.id);

  fs.writeFileSync(filePath, JSON.stringify(users, null, 2));
  res.redirect("/");
});


app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});