const express = require("express");
const app = express();

app.set("view engine", "ejs");
app.use(express.urlencoded({ extended: true }));

let posts = [];

app.get("/", (req, res) => {
  res.render("index", { posts });
});

app.get("/new", (req, res) => {
  res.render("new");
});

app.post("/posts", (req, res) => {
  posts.push({
    title: req.body.title,
    content: req.body.content
  });

  res.redirect("/");
});

app.get("/posts/:id", (req, res) => {
  const post = posts[req.params.id];
  res.render("post", { post });
});

app.listen(3000, () => {
  console.log("Server running");
});
