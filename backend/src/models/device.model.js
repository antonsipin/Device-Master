const mongoose = require('mongoose')

const deviceSchema = new mongoose.Schema({
  name: String,  
  status: Boolean,
  warning: Boolean,
  isBeingEdited: Boolean
})

module.exports = mongoose.model('Device', deviceSchema)
