const mongoose = require("mongoose")

const deviceSchema = new mongoose.Schema({
  ip_address:{
    type:String,
    require:true
  },
  hostname:{
    type:String,
    require:true
  },
  os:{
    type:String,
    require:true
  },
  user_agent:{
    type:String,
    require:true
  },
  user:{
    type:mongoose.Schema.Types.ObjectId,
    ref:"User",
    require:true
  }
})



module.exports = mongoose.model("Device",deviceSchema)