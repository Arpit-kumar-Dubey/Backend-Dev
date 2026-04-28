const mongoose = require("mongoose");
const Student = require("../models/studentSchema");

mongoose.connect("mongodb://127.0.0.1:27017/studentDB");

Student.aggregate([
  {
    $group: {
      _id: "$department",
      avgGPA: { $avg: "$gpa" }
    }
  }
]).then(console.log);

Student.aggregate([
  { $unwind: "$courses" },
  {
    $group: {
      _id: "$courses",
      count: { $sum: 1 }
    }
  },
  { $sort: { count: -1 } }
]).then(console.log);

Student.aggregate([
  {
    $project: {
      name: 1,
      gpa: 1,
      performance: {
        $cond: {
          if: { $gte: ["$gpa", 3.5] },
          then: "Excellent",
          else: "Average"
        }
      }
    }
  }
]).then(console.log);