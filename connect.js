const mongoose=require("mongoose");

const mongoDbConnect=async(url)=>{
    return await mongoose.connect(url)
}

module.exports=mongoDbConnect;