const express =require("express");
const router = express.Router();
const {CreateRetraitController,getAllWithdraws} = require("../Controllers/Retraits");
router.post("/Withdraws",CreateRetraitController);
router.get("/Withdraws",getAllWithdraws)
module.exports=router
