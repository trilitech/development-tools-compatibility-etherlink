// SPDX-License-Identifier: MIT
pragma solidity ^0.8.9;

contract RevertTransaction {
    bool public isMe;
    error MyCustomError(string errorMessage);

    // Call this on the explorer with Metamask to have a failed transaction
    function setIsMeReverting() external {
        isMe = true;
        revert MyCustomError("You can't be me!");
    }
}