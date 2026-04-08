const express = require("express");
const router = express.Router();

const { router: sessionController } = require("../features/sessionTimeout");

router.use("/", sessionController);

module.exports = router;