const shortId=require("shortid")
const {urlModel}=require("../models/url")


const handlenewShortUrl=async(req,res)=>{
    const body=req.body;
    if(!body.url){
        return res.status(400).json({error:"Url is required"})
    }
    const shortID=shortId.generate();
    await urlModel.create({
        shortId:shortID,
        urlRedirect:body.url,
        visitHistory:[]
    })
    return res.json({"shortId":shortID})
}

const handleRedirectUrl=async(req,res)=>{
    const shortId=req.params.id;

    const val=await urlModel.findOneAndUpdate({shortId},{$push:{visitHistory:{timestamp:Date.now()}}})
   return res.redirect(val.urlRedirect);
    
}

const handleAnalytics=async(req,res)=>{
    const shortId=req.params.id;
    const result=await urlModel.findOne({shortId});
    return res.status(200).json({"Total Clicks":result.visitHistory.length,"Analytics":result.visitHistory})
}


module.exports={handlenewShortUrl,handleRedirectUrl,handleAnalytics}