import React, { Component, Fragment } from 'react'
import styled from 'styled-components'
import TodoList from './components/Todo/TodoList'
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'
import Web3 from 'web3'

const AppWrapper = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: #ececec;
  font-family: 'Poppins', sans-serif;
`

const Title = styled.h3`
  margin: 0;
  padding: 2rem;
  text-align: center;
`

const Web3Context = React.createContext({
  web3: new Web3(Web3.givenProvider || 'http://localhost:8545'),
  address: [],
  balance: undefined
})
export const Web3Consumer = Web3Context.Consumer
class Web3Provider extends Component {
  state = {
    address: [],
    balance: undefined
  }
  constructor() {
    super()
    this.web3 = new Web3(Web3.givenProvider || 'http://localhost:8545')
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
        this.getBalance(this.state.address[0])
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

class App extends Component {
  state = {
    data: [
      {
        status: false,
        todo: 'sleep'
      },
      {
        status: false,
        todo: 'eat'
      },
      {
        status: true,
        todo: 'code'
      }
    ]
  }

  render() {
    return (
      <Web3Provider>
        <AppWrapper>
          <Fragment>
            <Web3Consumer>{({ address, balance }) => <Header address={address} balance={balance} />}</Web3Consumer>
            <Title>Todo 📝</Title>
            <TodoList data={this.state.data} />
            <Footer />
          </Fragment>
        </AppWrapper>
      </Web3Provider>
    )
  }
}

export default App
