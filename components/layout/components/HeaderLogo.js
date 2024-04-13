import React from 'react'
import styled from 'styled-components'
function HeaderLogo() {
  return (
    <Logo>FundBoost</Logo>
  )
}
const Logo = styled.h1`
  font-weight: normal;
  font-size: 16px;
  margin-left: 11px;
  font-family: 'Poppins';
  letter-spacing: 3px;
  cursor: pointer;
`
export default HeaderLogo