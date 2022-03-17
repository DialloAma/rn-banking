const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const RetraitSchema= new Schema({
    accountnumber:{
        type: String,
        required:true
    },
  /*  nameAcc:{
         type:String,
         required:true
    },*/
    amount:{
        type:Number,
        required:true
    },
    datretr:{
        type:String,
        default:Date.now
    },
   /* benefit:{
        type:Number,
        required:false
    }*/
})
const RetraitModel = mongoose.model('Retraits',RetraitSchema);
module.exports=RetraitModel