pragma solidity ^0.8.2;

import "truffle/Assert.sol";
import "../../contracts/users/UserStorage.sol";

contract TestUserStorage {
  UserStorage userStorage;

  constructor() public {
    userStorage = new UserStorage();
    userStorage.setControllerAddr(address(this));
  }

  function testCreateFirstUser() public {
    // Get the deployed contract
    uint _expectedId = 1;

    Assert.equal(userStorage.createUser("adam"), _expectedId, "Should create user with ID 1");
  }
}