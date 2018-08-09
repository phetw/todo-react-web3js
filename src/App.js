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

class App extends Component {
  state = {
    address: undefined,
    balance: undefined,
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
    this.setState({
      balance: await this.web3.eth.getBalance(address)
    })
  }

  render() {
    const web3 = this.web3
    const { address, balance } = this.state

    return (
      <AppWrapper>
        {web3 ? (
          <Fragment>
            <Header address={address} balance={balance} />
            <Title>Todo 📝</Title>
            <TodoList data={this.state.data} />
            <Footer />
          </Fragment>
        ) : null}
      </AppWrapper>
    )
  }
}

export default App
