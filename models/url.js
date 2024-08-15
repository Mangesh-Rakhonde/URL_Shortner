const mongoose=require("mongoose");

const urlSchema=mongoose.Schema({
    shortId:{
        type:String,
        required:true
    },
    urlRedirect:{
        type:String,
        required:true
    },
    visitHistory:[{
        timestamp:{
            type:Number
        }
    }]
})

const urlModel=mongoose.model("urlmodel",urlSchema);

module.exports={urlModel}