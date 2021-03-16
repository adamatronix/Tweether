pragma solidity ^0.8.2;

import './Owned';

contract BaseStorage is Owned{
  address public controllerAddr;

  modifier onlyController() {
    require(msg.sender == controllerAddr);
  }

  function setControllerAddr(address _controllerAddr) public onlyOwner {
    controllerAddr = _controllerAddr;
  }
}