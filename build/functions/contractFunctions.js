"use strict";
var Web3 = require("web3");
var contract = require('../../artifacts/HelloBlockchain.json');
var ContractFunction = /** @class */ (function () {
    function ContractFunction(address, network) {
        this.address = address;
        this.network = network;
    }
    ContractFunction.prototype.conection = function () {
        var web3 = new Web3(this.network);
        this.HelloBlockChainContract = new web3.eth.Contract(contract.abi, this.address);
    };
    ContractFunction.prototype.verifyWord = function (word) {
        var result = this.HelloBlockChainContract.methods._verifyWord(word).call();
        return result;
    };
    ContractFunction.prototype.addWord = function (word) {
        this.HelloBlockChainContract.methods._addWord(word).send({ from: '0x085778a92dd2e4cdad12e861095e1c9d9a9faf14' }, function () {
            console.log('registrado');
        });
    };
    ContractFunction.prototype.showAll = function () {
        var result = this.HelloBlockChainContract.methods._showAll().call();
        return result;
    };
    return ContractFunction;
}());
module.exports = ContractFunction;
