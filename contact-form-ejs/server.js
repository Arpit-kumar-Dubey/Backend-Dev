const express = require("express");
const app = express();

app.set("view engine", "ejs");
app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.render("contact");
});

app.post("/submit", (req, res) => {
  const { name, email } = req.body;

  res.send(`Thank you ${name}, we received your message.`);
});

app.listen(3000, () => {
  console.log("Server running");
});
