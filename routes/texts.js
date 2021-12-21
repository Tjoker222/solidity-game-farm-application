const express = require("express")
const router = express.Router()
const path = require("path")

router.get("/", (req,res)=>{

    res.sendFile(path.join(__dirname, '../','homepage','home.html'))
})

router.post('/add', (req,res)=>{
    res.json({message: req.body.message})
})

module.exports = router