const express = require("express");
const router = express.Router();

const adminController = require("../features/adminPanel");
const auth = require("../middleware/auth");
const role = require("../middleware/role");

router.post("/login", adminController);

// Protected admin route
router.get("/dashboard", auth, role("admin"), (req, res) => {
  res.send("Admin Dashboard");
});

module.exports = router;