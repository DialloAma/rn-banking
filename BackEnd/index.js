const express = require("express");
const mongoose = require("mongoose");
const bodyparser = require("body-parser");
const CltRouter = require("./Routes/Clients")
const AccRouter =require("./Routes/Accounts")
const DepotRouter = require("./Routes/Deposits")
const server = express();
server.use(bodyparser.json());
server.use(CltRouter);
server.use(AccRouter)
server.use(DepotRouter)
mongoose.connect("mongodb+srv://AdminUser:Ry4AnYuf1dtJgVMJ@cluster0.vkk55.mongodb.net/Banking_App?retryWrites=true&w=majority",
{useNewUrlParser:true,useUnifiedTopology:true})
/*.then((res)=>{
    server.listen(3000,"localhost",()=>console.log("server is ready"));
}).catch(err=>console.log(err))*/
mongoose.connection.on("connected",()=>console.log("database connected"));
mongoose.connection.on("error",(err)=>console.log(err))
server.listen(3000,"localhost",()=>console.log("server is ready"));

