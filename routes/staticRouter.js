const express=require("express");

const router=express.Router();

router.get("/",(req,res)=>{
    console.log("Hello Manh=gesh")
    //return res.json({"Name":"Mnagesh"})
    return res.render("home")
})
router.post("/",(req,res)=>{

})

module.exports=router;