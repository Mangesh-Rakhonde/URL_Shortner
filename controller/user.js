const {userModel} =require("../models/user")
const {v4:uuidv4} =require("uuid")

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
    
}

const handleUserSignIn=async(req,res)=>{
    
    const {email,password}=req.body;

    const user=await userModel.findOne({email});
    if(user && await bcrypt.compare(password,user.password)){
        const sessionId=uuidv4();
        req.session.userId=sessionId;
       
        return res.redirect("/")
        
    }
    else{
        return res.render("signin")
        
    }
}
module.exports={handleUserSingnUp,handleUserSignIn};