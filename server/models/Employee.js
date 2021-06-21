const mongoose = require('mongoose');

const EmployeeSchema = new mongoose.Schema({
  email: { type: String, required: true },
  name: { type: String, required: true },
  manager: { type: String, required: true },
  department: { type: String, required: true },
  age: { type: Number, required: true },
  salary: { type: Number, required: true },
  dob: { type: Date, required: true },
});

module.exports = mongoose.model('Employee', EmployeeSchema);
