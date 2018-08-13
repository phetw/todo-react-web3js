import React, { Component } from 'react'
import styled from 'styled-components'

const AddButton = styled.button`
  display: flex;
  cursor: pointer;
  border-radius: 4px;
  font-weight: 600;
  padding: 1em 1.5em;
  transition: none;
  margin: 3rem auto;
  position: relative;
  background-color: #ff5a79;
  color: #fff;
  box-shadow: 0 4px #f3002e;
  &:hover {
    top: 2px;
    box-shadow: 0 2px #f3002e;
  }
  &:active {
    box-shadow: 0 0 #ff5a79;
    top: 4px;
  }
`

export default class AddTodo extends Component {
  componentDidMount() {}

  createNewTodo = async () => {
    const { create } = this.props
    await create(this.props.text).send({
      // handle modal close
      // TODO: fix address null bug
      from: '0x627306090abab3a6e1400e9345bc60c78a8bef57'
    })
  }

  render() {
    return <AddButton onClick={this.createNewTodo}>Add</AddButton>
  }
}
