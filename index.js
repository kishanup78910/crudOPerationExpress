const express =require("express")
const app =express();

app.get("/",(req,res)=>{
    res.send("hhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhh")
})

app.listen(3000,()=>{
    console.log("server is up running at 3000")
})