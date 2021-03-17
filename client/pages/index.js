import React from 'react'
import { eth, getInstance } from '../web3/provider';
import UserStorage from "../web3/artifacts/UserStorage.json";

export default class IndexPage extends React.Component {

  async componentDidMount() {
    try {
      await ethereum.enable()
      const addresses = await eth.getAccounts()
      const balance = await eth.getBalance(addresses[0]);
    } catch (err) {
      console.error("User denied access to their ETH addresses!")
    }

    const storage = await getInstance(UserStorage)
    const { username } = await storage.profiles.call(1)
    console.log("Got username:", username);

  }

  render() {
    return (
      <h1>hello world!</h1>
    )
  }
}