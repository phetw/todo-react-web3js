import React from 'react'
import styled from 'styled-components'

const TodoItemWrapper = styled.div`
  height: 100%;
  max-width: 320px;
  max-height: 80px;
  margin: 0.5rem auto;
  font-weight: 300;
  background-color: #fff;
  box-shadow: 1px 1px 5px rgba(0, 0, 0, 0.2);
  display: grid;
  grid-gap: 0;
  grid-template-columns: repeat(4, 1fr);
`

const StatusContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`

const Status = styled.span``

const TextContainer = styled.div`
  margin: 0;
  display: flex;
  align-items: center;
  grid-column-start: 2;
  grid-column-end: 5;
`
const Text = styled.p``

export default ({ todos: { status, todo } }) => (
  <TodoItemWrapper>
    <StatusContainer>
      <Status> {status ? '✅' : '❗️'}</Status>
    </StatusContainer>
    <TextContainer>
      <Text>{todo}</Text>
    </TextContainer>
  </TodoItemWrapper>
)
