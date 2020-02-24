const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const employeeSchema = new Schema({
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
  title: { type: String, required: true },
  interestingFact: { type: String, required: true },
  date: { type: Date, default: Date.now }
});

const Employee = mongoose.model("Employee", employeeSchema);

module.exports = Employee;
