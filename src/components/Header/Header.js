import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'

const HeaderWrapper = styled.header`
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

const Address = styled.p`
  margin: 0 auto;
  font-size: 10px;
  @media (min-width: 320px) and (max-width: 425px) {
    display: hidden;
  }
`

function weiToEther(wei) {
  return parseInt(wei, 10) / Math.pow(10, 18).toFixed(3)
}

const Header = ({ address = ['-'], balance = '0.00' }) => (
  <HeaderWrapper>
    <Address>{address.map(addr => addr)}</Address>
    <Balance>{weiToEther(balance)} ETH</Balance>
  </HeaderWrapper>
)

Header.propTypes = {
  address: PropTypes.array,
  balance: PropTypes.string
}

export default Header
