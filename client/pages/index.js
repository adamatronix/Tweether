import React from 'react'
import { getUserInfo, createUser } from '../web3/users'

export default class IndexPage extends React.Component {

  logUser = async () => {
    const userInfo = await getUserInfo(1);
    console.log(userInfo);
  }

  createUser = async () => {
    const tx = await createUser("adam")
    console.log(tx);
  }

  render() {
    return (
      <div>
          <button onClick={this.logUser}>
            Get user with ID 1
          </button>
          <button onClick={this.createUser}>
            Create user
          </button>
      </div>
    )
  }
}