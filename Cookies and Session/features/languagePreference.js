const express = require("express");
const router = express.Router();

// Set language
router.get("/set-lang/:lang", (req, res) => {
  res.cookie("lang", req.params.lang, { maxAge: 7 * 24 * 60 * 60 * 1000 });
  res.send("Language set");
});

// Get language
router.get("/get-lang", (req, res) => {
  const lang = req.cookies.lang || "en";
  res.json({ language: lang });
});

module.exports = router;