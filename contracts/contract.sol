pragma solidity ^0.8.6;

contract HelloBlockchain {

    string[] word;

    event newWord(string word);
    event wordExist(bool exist);

    mapping (string => bool) public Words;

    function _addWord(string memory _name) public{

        word.push(_name);
        Words[_name] = true;
        emit newWord(_name);


    }

    function _verifyWord(string memory _word) public view returns(bool){

        return Words[_word];
    }

}