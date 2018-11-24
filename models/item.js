let mongoose = require('mongoose');

let itemSchema = new mongoose.Schema({
  name: String
});

module.exports = mongoose.model('Item',itemSchema)
