// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.13;

contract Counter {
    uint256 public number;

    function setNumber(uint256 newNumber) public {
        number = newNumber;
    }

    function increment() public {
        number++;
    }

    // This method is used with b = 0 so it can rise an error
    function revertMe(uint a, uint b) public pure returns (uint256) {
        return a / b;
    }
}
