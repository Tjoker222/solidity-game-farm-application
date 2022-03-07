const Web3 = require("web3")
const contract = require('../../artifacts/HelloBlockchain.json')


class ContractFunction{

    address: string
    network: string
    HelloBlockChainContract: any

    constructor(
        address: string,
        network: string
    ){
        this.address = address;
        this.network = network;
    }

    conection(){
        const web3 = new Web3(this.network);
        this.HelloBlockChainContract = new web3.eth.Contract(contract.abi, this.address);
    }

    verifyWord(word: string){
        const result = this.HelloBlockChainContract.methods._verifyWord(word).call()
        return result
    }

    addWord(word : string){
        this.HelloBlockChainContract.methods._addWord(word).send({from: '0x085778a92dd2e4cdad12e861095e1c9d9a9faf14'}, ()=>{
            console.log('registrado')
        })
    }

    showAll(){
        const result = this.HelloBlockChainContract.methods._showAll().call()
        return result
    }


}

module.exports = ContractFunction