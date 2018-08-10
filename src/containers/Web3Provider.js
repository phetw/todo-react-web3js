import React, { Component } from 'react'
import Web3 from 'web3'

const Web3Context = React.createContext({
  web3: new Web3(Web3.givenProvider || 'http://localhost:9545'),
  address: [],
  balance: undefined
})

export const Web3Consumer = Web3Context.Consumer
export default class Web3Provider extends Component {
  state = {
    address: [],
    balance: undefined
  }
  constructor() {
    super()
    this.web3 = new Web3(Web3.givenProvider || 'http://localhost:9545')
  }

  componentDidMount = async () => {
    this.getAddress()
  }

  getAddress = async () => {
    this.setState(
      {
        address: await this.web3.eth.getAccounts()
      },
      () => {
        const [address] = this.state.address
        this.getBalance(address)
      }
    )
  }

  getBalance = async address => {
    if (address) {
      this.setState({
        balance: await this.web3.eth.getBalance(address)
      })
    }
  }

  render() {
    const { address, balance } = this.state
    return (
      <Web3Context.Provider
        value={{
          web3: this.web3,
          address: address,
          balance: balance
        }}
      >
        {this.props.children}
      </Web3Context.Provider>
    )
  }
}
