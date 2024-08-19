const {userModel} =require("../models/user")
const {v4:uuidv4} =require("uuid")
const {setUser} =require("../service/auth")
const bcrypt= require("bcrypt")

const handleUserSingnUp=async(req,res)=>{
    
    const {firstName,lastName,email,password}=req.body;
    const found=await userModel.findOne({email});
    if(found){
        return res.redirect("/signin")
    }
    const hasPass=await bcrypt.hash(password,10)
    await userModel.create({
        firstName,
        lastName,
        email,
        password:hasPass
    })

    return res.redirect("signin")
    //return res.json({"response":`${body.firstName} is created`});
}

const handleUserSignIn=async(req,res)=>{
    
    const {email,password}=req.body;

    const user=await userModel.findOne({email});
    if(user && await bcrypt.compare(password,user.password)){
        const sessionId=uuidv4();
        res.cookie("uid",sessionId);
        setUser(sessionId,user)
        return res.redirect("/")
        //res.json({msg:"User Verified."})
    }
    else{
        return res.render("signin")
        //return res.json({msg:"We didn't found your account,please sign up."})
    }
}
module.exports={handleUserSingnUp,handleUserSignIn};