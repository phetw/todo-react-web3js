import React, { Component } from 'react'
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
    web3: null,
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

  componentDidMount() {
    this.initialiseWeb3()
  }

  initialiseWeb3() {
    this.setState({
      web3: new Web3(Web3.givenProvider || 'http://localhost:8545')
    })
    console.log(new Web3(Web3.givenProvider || 'http://localhost:8545'))
    // web3.eth.getAccounts().then(console.log)
  }

  render() {
    return (
      <AppWrapper>
        <Header balance={'12.0'} />
        <Title>Todo 📝</Title>
        <TodoList data={this.state.data} />
        <Footer />
      </AppWrapper>
    )
  }
}

export default App
