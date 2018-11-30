let mongoose = require('mongoose')

let employeeSchema = new mongoose.Schema({
  firstName: String,
  lastName: String,
  team: String,
  salary: String,
  positionTitle: String,
  email: String,
  phoneNumber: String,
  branchLocation: String,
  hours: String
})

module.exports = mongoose.model('Employee', employeeSchema)
