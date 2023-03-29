const express = require("express")
const mysql=require("mysql")
const app=express()



const db = mysql.createPool({
    host:"locaihost",
    user:"root",
    password:" ",
    database:"studentdata",
    connectionLimit:10
});

db.getConnection((err)=>{
    console.log("connected successfully")
});

app.get("/",(req,res)=>{
    const q='SELECT * FROM `studentdata` WHERE 1';
    db.query(q,(err,result)=>{
     res.send(result);
    console.log("result")
        

    });

});

app.listen(8000,()=>{
    console.log("server started")
});