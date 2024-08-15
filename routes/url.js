const express=require("express");
const {handlenewShortUrl,handleRedirectUrl,handleAnalytics} =require("../controller/url")
const router=express.Router();

router.route("/").post(handlenewShortUrl)

router.route("/:id").get(handleRedirectUrl)
router.route("/analytics/:id").get(handleAnalytics);
module.exports=router;