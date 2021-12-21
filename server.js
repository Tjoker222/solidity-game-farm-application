const express = require("express")
const bodyParser = require("body-parser")
const app = express()

app.use(express.static(__dirname + '/public'))
app.use(bodyParser.urlencoded({extended: false}))

app.get("/", (req,res)=>{

    res.sendFile(__dirname + '/homepage/home.html')
})

app.listen("5000", ()=>{
    console.log("server running")
})