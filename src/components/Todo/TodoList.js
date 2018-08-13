import React, { Component } from 'react'
import Proptypes from 'prop-types'
import styled, { keyframes } from 'styled-components'
import TodoItem from './TodoItem'

const ListWrapper = styled.section`
  width: 100%;
`

const Spinning = keyframes`
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
`

const Loader = styled.div`
  margin: 30% auto;
  border: 5px solid #f3f3f3;
  border-top: 5px solid #3498db;
  border-radius: 50%;
  width: 30px;
  height: 30px;
  animation: ${Spinning} 1s linear infinite;
`

export default class TodoList extends Component {
  state = {
    isLoading: true,
    todos: undefined
  }

  componentDidMount() {
    this.getTodoList()
  }

  getTodoList = async () => {
    let todos = []
    let index = 0
    let foundNextTodo = true

    while (foundNextTodo) {
      const todo = await this.props.listTodo(index).call()
      if (todo['1'] === '') {
        foundNextTodo = false
      } else {
        todos.push(todo)
      }
      index++
    }

    if (todos.length !== 0) {
      this.setState({
        isLoading: false,
        todos: todos
      })
    } else {
      this.setState({
        isLoading: false
      })
    }
  }

  render() {
    const { todos, isLoading } = this.state
    return (
      <ListWrapper>
        {todos ? todos.map(item => <TodoItem todos={item} key={Math.random()} />) : null}
        {isLoading && <Loader />}
      </ListWrapper>
    )
  }
}

TodoList.Proptypes = {
  data: Proptypes.any
}
