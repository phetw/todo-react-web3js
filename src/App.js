import React, { Component, Fragment } from 'react'
import styled from 'styled-components'
import TodoList from './components/Todo/TodoList'
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'
import Web3Provider from './containers/Web3Provider'

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
            <Header />
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
