const express = require("express");
const app=express();
const bodyparser=require("body-parser")
const user=require("./Router/user")
const PORT=7000


app.use(bodyparser.json())
app.use("/",user)

app.listen(PORT,()=>{
    console.log(`http://localhost: ${PORT}`)
})




