pragma solidity ^0.8.2;

import '../helpers/BaseStorage';

contract TweetStorage is BaseStorage {
  mapping(uint => Tweet) public tweets;
  
  struct Tweet {
    uint id;
    string text;
    uint userId;
    uint postedAt;
  }

  uint latestTweetId = 0;

  function createTweet(uint _userId, string memory _text) public onlyController returns(uint) {
    latestTweetId++;

    tweets[latestTweetId] = Tweet(latestTweetId, _text, _userId, block.timestamp);

    return latestTweetId;
  }

}