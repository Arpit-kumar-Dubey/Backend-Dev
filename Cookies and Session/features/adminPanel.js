const express = require("express");
const router = express.Router";

// Middleware: Auth check
const isAuthenticated = (req, res, next) => {
  if (!req.session.user) {
    return res.status(401).send("Login required");
  }
  next();
};

// Middleware: Role check
const isAdmin = (req, res, next) => {
  if (req.session.user.role !== "admin") {
    return res.status(403).send("Admin only");
  }
  next();
};

// Login route
router.post("/login", (req, res) => {
  const { username } = req.body;

  // Demo user
  req.session.user = {
    username,
    role: username === "admin" ? "admin" : "user",
  };

  res.send("Logged in");
});

// Admin panel
router.get("/dashboard", isAuthenticated, isAdmin, (req, res) => {
  res.send("Welcome Admin");
});

module.exports = router;