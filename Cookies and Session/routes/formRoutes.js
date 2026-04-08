const express = require("express");
const router = express.Router();

const formController = require("../features/multiStepForm");

router.use("/", formController);

module.exports = router;