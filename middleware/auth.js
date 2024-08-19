

const restrictedToLoginUserOnly=async(req,res,next)=>{
    
    if (!req.session.userId) {
        return res.redirect('/user/signin');
    }
    next();
    
}

module.exports={restrictedToLoginUserOnly}