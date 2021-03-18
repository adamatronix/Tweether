import { eth, getInstance } from './provider'
import Web3Utils from 'web3-utils';
import UserStorage from "./artifacts/UserStorage.json"
import UserController from "./artifacts/UserController.json"

export const getUserInfo = async (userId) => {
  const storage = await getInstance(UserStorage)
  const { id, username } = await storage.profiles.call(userId)

  return {
    id: parseInt(id),
    username: Web3Utils.toAscii(username),
  }
}

export const createUser = async (...params) => {
  const controller = await getInstance(UserController)

  try {
    await ethereum.enable()
    const addresses = await eth.getAccounts()

    const result = await controller.createUser(
      ...params,
    {
      from: addresses[0],
    })

    return result
  } catch (err) {
    console.error("Err:", err)
  }

}

export const getLoggedInUserId = async () => {
  try {
    await ethereum.enable()
    const addresses = await eth.getAccounts()

    if(!addresses) return

    const storage = await getInstance(UserStorage)
    const userId = await storage.addresses.call(addresses[0])

    return parseInt(userId)
  } catch (err) {

  }
}