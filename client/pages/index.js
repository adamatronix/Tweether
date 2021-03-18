import React from 'react'
import Web3Utils from 'web3-utils';
import { getUserInfo, createUser, getLoggedInUserId } from '../web3/users'
import { getTweetInfo, createTweet } from '../web3/tweets'

export default class IndexPage extends React.Component {

  async componentDidMount() {
    const userId = await getLoggedInUserId()

    console.log("Logged in as", userId);
  }

  logUser = async () => {
    const userInfo = await getUserInfo(1);
    console.log(userInfo);
  }

  createUser = async () => {
    const tx = await createUser(Web3Utils.fromAscii("adam"), Web3Utils.fromAscii("Adam"), Web3Utils.fromAscii("Gee"), "I'm dumb", 'adam@adamatronix.com')
    console.log(tx);
  }

  logTweet = async () => {
    const tweetInfo = await getTweetInfo(1)
    console.log(tweetInfo)
  }

  createTweet = async () => {
    const tx = await createTweet("Hello world!")
    console.log(tx)
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
          <button onClick={this.logTweet}>
            Get tweet with ID 1
          </button>
          <button onClick={this.createTweet}>
            Create tweet
          </button>
      </div>
    )
  }
}