const mongoose = require("mongoose");
const Student = require("../models/studentSchema");

mongoose.connect("mongodb://127.0.0.1:27017/studentDB");
async function addStudent() {
  await Student.create({
    name: "Amit",
    email: "amit@gmail.com",
    gpa: 3.4,
    courses: ["CS101", "CS102"],
    city: "Delhi",
    department: "CSE"
  });
}
async function getStudents() {
  const data = await Student.find();
  console.log(data);
}
async function findStudent() {
  const data = await Student.findOne({ email: "amit@gmail.com" });
  console.log(data);
}
async function updateGPA() {
  await Student.updateOne(
    { email: "amit@gmail.com" },
    { $set: { gpa: 3.9 } }
  );
}
async function deleteStudent() {
  await Student.deleteOne({ email: "amit@gmail.com" });
}

