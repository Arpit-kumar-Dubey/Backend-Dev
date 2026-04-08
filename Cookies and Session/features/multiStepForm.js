const express = require("express");
const router = express.Router();

// Step 1
router.post("/step1", (req, res) => {
  req.session.formData = { ...req.session.formData, name: req.body.name };
  res.json({ message: "Step 1 saved" });
});

// Step 2
router.post("/step2", (req, res) => {
  req.session.formData = { ...req.session.formData, email: req.body.email };
  res.json({ message: "Step 2 saved" });
});

// Step 3 (final)
router.post("/submit", (req, res) => {
  const data = req.session.formData;
  req.session.formData = null;

  res.json({ message: "Form completed", data });
});

module.exports = router;