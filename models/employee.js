let mongoose = require('mongoose')

let employeeSchema = new mongoose.Schema({
  firstName : String,
  lastName : String,
  position : String,
  age : String,
  team : String
})

module.exports = mongoose.model('Employee', employeeSchema)
