import React, { Component } from 'react'
import styled from 'styled-components'
import Rodal from 'rodal'
import './rodal.css'
import TodoList from './components/Todo/TodoList'
import Header from './components/Header/Header'
import AddTodo from './containers/AddTodo'
import Footer from './components/Footer/Footer'
import Web3Provider, { Web3Consumer } from './containers/Web3Provider'

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

const Add = styled.span`
  cursor: pointer;
  position: fixed;
  width: 30px;
  height: 30px;
  top: 4.5rem;
  right: 40px;
  background-color: #0c9;
  color: #fff;
  font-size: 1rem;
  border-radius: 50px;
  display: flex;
  box-shadow: 2px 2px 3px #999;
  justify-content: center;
  align-items: center;
  transition: all 100ms ease;
  &:hover {
    font-size: 1.1rem;
    width: 32px;
    height: 32px;
  }
`

const TodoInput = styled.input`
  display: flex;
  justify-content: center;
  align-content: center;
  font-size: 1.5rem;
  width: 280px;
  height: 40px;
  margin: 0 auto;
  border: none;
  border-bottom: 2px solid #757575;
  &:focus {
    outline: none !important;
  }
`

class App extends Component {
  state = {
    modal: false,
    newTodo: ''
  }

  showModal = () => {
    this.setState({ modal: true })
  }

  hideModal = () => {
    this.setState({ modal: false, newTodo: '' })
  }

  onTypeNewTodo = e => {
    // TODO: limit max chars
    this.setState({ newTodo: e.target.value })
  }

  render() {
    const { modal, newTodo } = this.state
    return (
      <Web3Provider>
        <AppWrapper>
          <Header />
          <Title>Todo 📝</Title>
          <Add onClick={this.showModal}>+</Add>
          <Web3Consumer>
            {({ address, methods: { create } }) => (
              <Rodal width={300} visible={modal} onClose={this.hideModal}>
                <Title>Add todo</Title>
                <TodoInput value={newTodo} onChange={this.onTypeNewTodo} />
                <AddTodo address={address} text={newTodo} create={create} />
              </Rodal>
            )}
          </Web3Consumer>
          <Web3Consumer>{({ methods: { todos } }) => <TodoList listTodo={todos} />}</Web3Consumer>
          <Footer />
        </AppWrapper>
      </Web3Provider>
    )
  }
}

export default App
