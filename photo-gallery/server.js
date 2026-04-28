const express = require("express");
const app = express();

app.set("view engine", "ejs");
app.use(express.static("public"));

app.get("/", (req, res) => {
  const images = ["img1.png", "img2.png"];
  res.render("gallery", { images });
});

app.listen(3000, () => {
  console.log("Server running");
});
