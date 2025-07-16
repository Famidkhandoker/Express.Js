const express=require("express");
const router=express.Router();

router.get("/users",getAllusers); 

module.exports=router;