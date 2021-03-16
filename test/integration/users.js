const UserStorage = artifacts.require('UserStorage');

contract('users', () => {
  it('can create user', async () => {
    const storage = await UserStorage.deployed();
    const username = web3.utils.fromAscii('adam');
    const tx = await storage.createUser(username);
    assert.isOk(tx);
  })

  it('can get user', async () => {
    const storage = await UserStorage.deployed();
    const userId = 1;

    const userInfo = await storage.getUserFromId.call(userId);
    const username = userInfo[1];

    assert.equal(username, 'adam');
  })
})