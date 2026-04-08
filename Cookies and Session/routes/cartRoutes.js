const express = require("express");
const router = express.Router();

const cartController = require("../features/cartSystem");

router.use("/", cartController);

module.exports = router;