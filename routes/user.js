const express=require("express");
const {handleUserSingnUp,handleUserSignIn} =require("../controller/user")
const router=express.Router();



router.route("/signup").post(handleUserSingnUp);
router.route("/signin").post(handleUserSignIn);

router.get("/signup",(req,res)=>{
    
    return res.render("signup")
})
router.get("/signin",(req,res)=>{
    
    return res.render("signin")
})
module.exports=router;