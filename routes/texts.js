const express = require("express")
const router = express.Router()
const path = require("path")

const Web3 = require("web3")
const web3 = new Web3('HTTP://127.0.0.1:7545');
const contract = require('../artifacts/HelloBlockchain.json')

const HelloBlockChainContract = new web3.eth.Contract(contract.abi, '0xBe616Dfb05BB5769FADf7041b4fb1771BA34B4fD')




router.get("/", async (req,res)=>{
    console.log(await HelloBlockChainContract.methods._verifyWord("ok").call());

    res.sendFile(path.join(__dirname, '../','homepage','home.html'))
})

router.post('/add', async (req,res)=>{

    res.json({message: req.body.message})
})

module.exports = router