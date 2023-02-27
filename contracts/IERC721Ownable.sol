// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.9;

interface IERC721Ownable {
    /**
     * @dev Returns the address of the current owner.
     */
    function owner() external view returns (address);
}