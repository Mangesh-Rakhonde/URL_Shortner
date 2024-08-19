const express=require("express");

const router=express.Router();

router.get("/",(req,res)=>{
    
    //return res.json({"Name":"Mnagesh"})
    return res.render("home")
})


// router.get("/user/signup",(req,res)=>{
    
//     return res.render("signup")
// })
// router.get("/user/signin",(req,res)=>{
    
//     return res.render("signin")
// })
module.exports=router;