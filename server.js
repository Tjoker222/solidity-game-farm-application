const express = require("express")
const bodyParser = require("body-parser")
const app = express()
const textRoutes = require('./routes/texts')

app.use(express.static(__dirname + '/public'))
app.use(bodyParser.urlencoded({extended: false}))

app.use(textRoutes)

app.listen("5000", ()=>{
    console.log("server running")
})