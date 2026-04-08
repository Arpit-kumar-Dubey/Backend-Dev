const mongoose = require("mongoose");

const cartSchema = new mongoose.Schema({
  userId: String,
  items: [String],
});

module.exports = mongoose.model("Cart", cartSchema);