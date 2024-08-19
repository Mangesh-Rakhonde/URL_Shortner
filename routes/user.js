const express=require("express");
const {handleUserSingnUp,handleUserSignIn} =require("../controller/user")
const router=express.Router();



router.route("/signup").post(handleUserSingnUp);
router.route("/signin").post(handleUserSignIn);


module.exports=router;