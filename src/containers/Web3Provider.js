import React, { Component } from 'react'
import Web3 from 'web3'
import { abi } from '../contracts/Todos.json'

const DEPLOY_ADDR = '0x9febb983aedca2055c6111732d43b11aae76c294'
const Web3Context = React.createContext({
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
    const web3 = this.web3
    this.contractInstance = new web3.eth.Contract(abi, DEPLOY_ADDR)
  }

  componentDidMount() {
    this.getAddress()
  }

  getAddress = async () => {
    this.setState(
      {
        address: await this.web3.eth.getAccounts()
      },
      () => {
        const [address] = this.state.address

        this.web3.eth.defaultAccount = address
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
          address: address,
          balance: balance,
          methods: this.contractInstance.methods
        }}
      >
        {this.props.children}
      </Web3Context.Provider>
    )
  }
}
