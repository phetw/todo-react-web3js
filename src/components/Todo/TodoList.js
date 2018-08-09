import React from 'react'
import Proptypes from 'prop-types'
import styled from 'styled-components'
import TodoItem from './TodoItem'

const ListWrapper = styled.section`
  width: 100%;
  text-align: center;
`
const TodoList = ({ data }) => (
  <ListWrapper>
    {data.map(item => (
      <TodoItem todos={item} key={item.todo} />
    ))}
  </ListWrapper>
)

TodoList.Proptypes = {
  data: Proptypes.array
}

export default TodoList
