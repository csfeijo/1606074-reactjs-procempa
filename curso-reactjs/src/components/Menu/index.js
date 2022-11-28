import React, { useContext } from 'react'
import Nav from 'react-bootstrap/Nav'
import UserContext from '../../context/UserContext'
import {
  Container,
  LinkNav,
  //Nav,
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
          <Nav.Link>Curso de ReactJS</Nav.Link>
        </LinkNav>

        <LinkNav
          to="/departamentos"
        >
          <Nav.Link>Departamentos</Nav.Link>
        </LinkNav>

        <LinkNav to="/departamentos/new">
          <Nav.Link>Add Departamentos</Nav.Link>
        </LinkNav>

        <LinkNav to="/user">
          <Nav.Link>Usuário</Nav.Link>
        </LinkNav>
      </Nav>
      <UserContainer className='align-center'>
        <div className='mt-3 mb-2'>{user}</div>
        <div className='mt-3 mb-2'>{dtCriacao}</div>
      </UserContainer>
    </Container>
  )
}

export default Menu