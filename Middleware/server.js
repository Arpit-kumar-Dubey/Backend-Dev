const express = require("express");
const mongoose = require("mongoose");

const logger = require("./middleware/requestLogger");
const sanitize = require("./middleware/sanitizeInput");

const userRoutes = require("./routes/userRoutes");

const app = express();

app.use(express.json());
app.use(logger);      // logging middleware
app.use(sanitize);    // security middleware

app.use("/api/users", userRoutes);

mongoose.connect("mongodb://127.0.0.1:27017/middlewareDB")
  .then(() => console.log("MongoDB Connected"))
  .catch(err => console.log(err));

app.listen(5000, () => {
  console.log("Server running on port 5000");
});