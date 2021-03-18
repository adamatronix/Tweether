const utils = require('../utils')
const { assertVMException } = utils;
const UserController = artifacts.require('UserController');
const UserStorage = artifacts.require('UserStorage');

contract('users', () => {
  it("can't create user without controller", async () => {
    const storage = await UserStorage.deployed();

    try {
      const username = web3.utils.fromAscii('adam');
      await storage.createUser(0x0,username,"Adam","Gee","I'm dumb","adam@adamatronix.com");
      assert.fail();
    } catch(err) {
      assertVMException(err);
    }
  })

  it('can create user with controller', async () => {
    const controller = await UserController.deployed();
    const username = web3.utils.fromAscii('adam');
    const first = web3.utils.fromAscii('Adam');
    const last = web3.utils.fromAscii('Gee');
    const tx = await controller.createUser(username,first,last,"I'm dumb","adam@adamatronix.com");
    assert.isOk(tx);
  })

  it('can get user', async () => {
    const storage = await UserStorage.deployed();
    const userId = 1;

    const userInfo = await storage.profiles.call(userId);
    const username = web3.utils.toAscii(userInfo[1]).replace(/\u0000/g, '');

    assert.equal(username, 'adam');
  })
})