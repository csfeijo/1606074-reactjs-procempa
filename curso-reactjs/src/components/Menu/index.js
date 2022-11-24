import React, { useContext } from 'react'
import UserContext from '../../context/UserContext'
import {
  Container,
  LinkNav,
  Nav,
  UserContainer
} from './styles'

const Menu = () => {

  const { user, dtCriacao } = useContext(UserContext)

  return (
    <Container>
      <Nav>
        <LinkNav
          to="/"
        >
          <h1>Curso de ReactJS</h1>
        </LinkNav>

        <LinkNav
          to="/departamentos"
        >
          Departamentos
        </LinkNav>

        <LinkNav to="/departamentos/new">Add Departamentos</LinkNav>

        <LinkNav to="/user">Usuário</LinkNav>
      </Nav>
      <UserContainer>
        <p>{user}</p>
        <p>{dtCriacao}</p>
      </UserContainer>
    </Container>
  )
}

export default Menu