import styled, { css } from 'styled-components'
import { Link } from 'react-router-dom'
import { LinkContainer } from 'react-router-bootstrap'

export const Nav = styled.nav`
  display: flex;
  align-items: stretch;
  padding: 10px;

  h1 {
    margin-right: 60px;
  }
`

export const LinkNav = styled(LinkContainer)`
  color: ${({ theme }) => theme.colors.mainColor};
  font-size: 20px;
  padding: 0 40px;
  display: flex;
  align-items: center;
  text-decoration: none;
  border-right: 1px dashed white;

  ${props =>
    props.active &&
    css`
      background: black;
      color: #E89900;
  `}

  &:hover,
  &:active,
  &:focus {
    color: ${({ theme }) => theme.colors.mainColor};
    box-shadow: inset 0px -5px 0px 0px ${({ theme }) => theme.colors.secondaryColor};
  }
`

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  background: ${({ theme }) => theme.colors.background};
  color: ${({ theme }) => theme.colors.mainColor};
`

export const UserContainer = styled.div`
  font-family: Arial;
  justify-self: end;
  align-self: center;
  padding-right: 20px;
  text-align: right;
`


