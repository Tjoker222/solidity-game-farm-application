const express = require("express")
const router = express.Router()
const path = require("path")

const contractFunction = require('../functions/contractFunctions')

const helloBlockchainFunction = new contractFunction('0x3D26993b777B161bB5d4796536c66081b536533b','HTTP://127.0.0.1:7545' )

helloBlockchainFunction.conection()

router.get("/", async (req,res)=>{
    console.log(await helloBlockchainFunction.showAll())
    res.sendFile(path.join(__dirname, '../','homepage','home.html'))
})

router.post('/add', async (req,res)=>{

    const isValid = await helloBlockchainFunction.verifyWord(req.body.message)

    if(!isValid)
    {
        helloBlockchainFunction.addWord(req.body.message);
        res.send(`${req.body.message} registrado!`)
    }
    else{
        res.send(`${req.body.message} já existe!`)
    }
    
})

module.exports = router