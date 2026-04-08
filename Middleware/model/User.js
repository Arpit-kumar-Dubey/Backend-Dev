const mongoose = require("mongoose");
const softDelete = require("../middleware/softDelete");

const userSchema = new mongoose.Schema({
  name: String,
  email: String,
  lastLogin: Date,
  lastLogout: Date,
  lastActive: Date,
});

// Activity middleware
userSchema.pre("save", function (next) {
  this.lastActive = new Date();
  next();
});

// Apply soft delete plugin
userSchema.plugin(softDelete);

module.exports = mongoose.model("User", userSchema);