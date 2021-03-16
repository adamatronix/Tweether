const UserController = artifacts.require('UserController')
const TweetController = artifacts.require('TweetController')

const UserStorage = artifacts.require('UserStorage')
const TweetStorage = artifacts.require('TweetStorage')

module.exports = (deployer) => {
  deployer.then(async () => {
    await deployer.deploy(UserController);
    await deployer.deploy(TweetController);
  })
  .then(() => {
    return Promise.all([
      UserStorage.deployed(),
      TweetStorage.deployed(),
    ])
  })
  .then(storageContracts => {
    const [userStorage, tweetStorage] = storageContracts;

    return Promise.all([
      userStorage.setControllerAddr(UserController.address),
      tweetStorage.setControllerAddr(TweetController.address),
    ])
  })
}