const mongoose=require("mongoose");
const Schema = mongoose.Schema;
 const AccountSchema=new Schema({
     cltid:{
         type: Schema.Types.ObjectId,
         ref:"clients"
     },
     accountnumber:{
         type:String,
         required:true
     },
     balance:{
       type:Number,
       required:true
     },
     datec:{
       type:String,
       default:Date.now
     }
 })
 const accountModel=mongoose.model("Accounts",AccountSchema);
 module.exports=accountModel;