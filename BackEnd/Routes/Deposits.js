const express= require("express");
const router = express.Router();
const {CreateDepositController,getAllDeposits} =require("../Controllers/Deposits");

router.post("/Deposits",CreateDepositController);
router.get("/Deposits",getAllDeposits)

module.exports = router