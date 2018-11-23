let mongoose = require('mongoose')

let employeeSchema = new mongoose.Schema({
  firstName : String,
  lastName : String,
  team: String,
  salary: Number,
  positionTitle : String,
  email: String,
  phoneNumber : String,
  branchLocation : String
})

module.exports = mongoose.model('Employee', employeeSchema)
