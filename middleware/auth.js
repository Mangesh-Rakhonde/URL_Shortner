const {getUser} =require("../service/auth")

const restrictedToLoginUserOnly=async(req,res,next)=>{
    const userId=req.cookies.uid;
    if(!userId){
        return res.redirect("user/signin")
    }
    const user=getUser(userId) 
    if(!user) return res.redirect("user/signin")
    req.user=user;
    next();
    
}

module.exports={restrictedToLoginUserOnly}