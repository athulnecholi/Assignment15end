const { default: mongoose } = require('mongoose')
const mogoose=require('mongoose')
const planschema=new mogoose.Schema({
    destination: { type: String, required: true },
    startDate: { type: Date, required: true },
    endDate: { type: Date, required: true },
    activities: [String]
  })
  module.exports=mongoose.model('plan',planschema)