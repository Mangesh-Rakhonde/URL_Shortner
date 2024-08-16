const express=require('express');
const urlRouter=require("./routes/url")
const mongoDbConnect=require("./connect.js")
const staticRouter=require("./routes/staticRouter.js")
const path=require("path");

const app=express();
app.use(express.json())
app.use(express.urlencoded({extended:false}))
app.use("/URL",urlRouter)
app.use("/",staticRouter);

//setting ejs engine
app.set('view engine','ejs');
app.set("views",path.resolve("./views/pages"))

//Connection to mongoDB
mongoDbConnect("mongodb://localhost:27017/urlShortner").then(()=>{
    console.log("MngoDB connection is successful");
}).catch(err=>console.log(err))




app.listen(8000,()=>{
    console.log('Server is running on port 8000');
})