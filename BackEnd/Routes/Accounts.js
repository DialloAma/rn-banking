const express=require("express");
const router=express.Router();
const {CreateAccountController,getAllAccountController}=require("../Controllers/Accounts");
router.post('/Accounts',CreateAccountController);
router.get('/Accounts',getAllAccountController)

module.exports=router;