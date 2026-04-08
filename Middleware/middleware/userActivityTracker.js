const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  name: String,
  email: String,
  lastLogin: Date,
  lastLogout: Date,
  lastActive: Date,
});

// Track login
userSchema.methods.updateLogin = function () {
  this.lastLogin = new Date();
  this.lastActive = new Date();
  return this.save();
};

// Track logout
userSchema.methods.updateLogout = function () {
  this.lastLogout = new Date();
  return this.save();
};

// Update lastActive on every save
userSchema.pre("save", function (next) {
  this.lastActive = new Date();
  next();
});

module.exports = mongoose.model("User", userSchema);