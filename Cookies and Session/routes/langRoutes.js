const express = require("express");
const router = express.Router();

const langController = require("../features/languagePreference");

router.use("/", langController);

module.exports = router;