const express = require("express");
const router = express.Router();

// Middleware to track activity
const trackActivity = (req, res, next) => {
  req.session.lastActivity = Date.now();
  next();
};

// Check timeout
router.get("/check-timeout", (req, res) => {
  const now = Date.now();
  const last = req.session.lastActivity || now;

  const diff = now - last;

  const maxTime = 5 * 60 * 1000; // 5 min
  const warningTime = 4 * 60 * 1000; // warn at 4 min

  if (diff > maxTime) {
    req.session.destroy();
    return res.json({ message: "Session expired" });
  }

  if (diff > warningTime) {
    return res.json({ warning: "Session about to expire" });
  }

  res.json({ message: "Session active" });
});

module.exports = { router, trackActivity };