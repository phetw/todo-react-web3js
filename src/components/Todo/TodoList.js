import React from 'react'
import styled from 'styled-components'
import TodoItem from './TodoItem'

const ListWrapper = styled.section`
  width: 100%;
  text-align: center;
`

export default ({ data }) => <ListWrapper>{data.map(item => <TodoItem todos={item} key={item.todo} />)}</ListWrapper>
