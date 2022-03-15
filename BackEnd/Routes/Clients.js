const express = require("express");
const router = express.Router();
const {CreateCltController,getAllClientController,UpdateCltControler} = require("../Controllers/Clients");
router.post('/Clients',CreateCltController);
router.get('/Clients',getAllClientController)
router.put('/Clients',UpdateCltControler)
module.exports = router;