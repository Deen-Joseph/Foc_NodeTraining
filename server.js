const express = require("express")
const app = express()

app.get("/", (req,res)=>{
    console.log("here");
    res.status(500).json({message: "Error"})
    res.download("routing.js")
    // res.send("hi")
})

app.listen(3000)