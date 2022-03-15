const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const ClientSchema = new Schema({
    fullname:{
        type:String,
        required:true
    },
    phone:{
       type : Number,
       required:true
    },
    address:{
        type:String
    },
    dat:{
        type:String,
        default:Date.now
    }

})
const CltModel= mongoose.model("clients",ClientSchema);
module.exports=CltModel