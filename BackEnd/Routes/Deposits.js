const express= require("express");
const router = express.Router();
const CreateDepositController =require("../Controllers/Deposits");

router.post("/Deposits",CreateDepositController);

module.exports = router