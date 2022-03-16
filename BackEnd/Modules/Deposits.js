const mongoose =require("mongoose");
const Schema = mongoose.Schema;

const depositSchema= new Schema({
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
    datdep:{
        type:String,
        default:Date.now
    }
})

const depositModel = mongoose.model("deposit",depositSchema)

module.exports=depositModel