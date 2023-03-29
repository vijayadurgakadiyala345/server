const exprees=require("express")
const app=exprees()

app.get("/",(res,req)=>{
    res.send("helllll0")
})

app.listen(5000,()=>{
    console.log("hello")
})