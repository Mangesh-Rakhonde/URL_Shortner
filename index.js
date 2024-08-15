const express=require('express');
const urlRouter=require("./routes/url")
const mongoDbConnect=require("./connect.js")

const app=express();
app.use(express.json())
app.use("/URL",urlRouter)


//Connection to mongoDB
mongoDbConnect("mongodb://localhost:27017/urlShortner").then(()=>{
    console.log("MngoDB connection is successful");
}).catch(err=>console.log(err))

app.listen(8000,()=>{
    console.log('Server is running on port 8000');
})