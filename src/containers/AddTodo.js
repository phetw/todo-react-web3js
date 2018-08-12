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

export default class Add extends Component {
  constructor(props) {
    super(props)
    this.state = {}
  }

  componentDidMount() {
    console.log(this.props)
  }

  render() {
    return <AddButton>Add</AddButton>
  }
}
