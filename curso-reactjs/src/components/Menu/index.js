import React, { useContext } from 'react'
import UserContext from '../../context/UserContext'
import { 
  LinkNav, 
  Nav 
} from './styles'

const Menu = () => {

  const { user } = useContext(UserContext)

  return (
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

      <p>{user}</p>
    </Nav>
  )
}

export default Menu