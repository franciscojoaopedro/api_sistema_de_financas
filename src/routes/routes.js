const express=require("express")
const transationsControllers = require("../controllers/transationsControllers")
const router=express.Router()


router.get("/index",transationsControllers.index)
router.post("/create",transationsControllers.create)
router.delete("/destroy/:id",transationsControllers.delete)

module.exports={router}