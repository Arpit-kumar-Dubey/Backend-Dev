const mongoose = require("mongoose");

const studentSchema = new mongoose.Schema({
  name: String,
  email: { type: String, unique: true },
  gpa: Number,
  courses: [String],
  city: String,
  department: String
});

module.exports = mongoose.model("Student", studentSchema);