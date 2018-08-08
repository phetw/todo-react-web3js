import React from 'react'
import styled from 'styled-components'

const Header = styled.header`
  width: 100%;
  height: 40px;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  background-color: white;
  box-shadow: 1px 1px 2px rgba(0, 0, 0, 0.2);
`

const Balance = styled.p`
  padding: 0.5rem;
  font-size: 14px;
`

export default ({ balance = '0' }) => (
  <Header>
    <Balance>{balance} ETH</Balance>
  </Header>
)
