pragma solidity ^0.4.24;

contract Example {
    uint public number = 0;

    constructor() public {
    }

    function set(uint _number) public {
        number = _number;
    }

    function get() public view returns (uint){
        return number;
    }
}