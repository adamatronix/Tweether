pragma solidity ^0.8.2;

import '../helpers/BaseStorage';

contract UserStorage is BaseStorage {

  mapping(uint => Profile) public profiles;

  struct Profile {
    uint id;
    bytes32 username;
  }

  uint latestUserId = 0;


  function createUser(bytes32 _username) public onlyController returns(uint) {
    latestUserId++;
    profiles[latestUserId] = Profile(latestUserId, _username);
    return latestUserId;
  }
}