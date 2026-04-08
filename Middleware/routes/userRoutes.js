const express = require("express");
const router = express.Router();

const User = require("../models/User");
const mfa = require("../middleware/mfaMiddleware");

// Create user
router.post("/", async (req, res) => {
  const user = await User.create(req.body);
  res.json(user);
});

// Login (update activity)
router.post("/login/:id", async (req, res) => {
  const user = await User.findById(req.params.id);
  await user.updateLogin();
  res.json({ message: "Logged in" });
});

// Logout
router.post("/logout/:id", async (req, res) => {
  const user = await User.findById(req.params.id);
  await user.updateLogout();
  res.json({ message: "Logged out" });
});

// Secure route (MFA)
router.get("/secure", mfa, (req, res) => {
  res.json({ message: "Secure data accessed" });
});

// Soft delete
router.delete("/:id", async (req, res) => {
  const user = await User.findById(req.params.id);
  await user.softDelete();
  res.json({ message: "User soft deleted" });
});

module.exports = router;