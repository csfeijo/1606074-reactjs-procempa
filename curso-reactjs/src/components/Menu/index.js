import React, { useContext } from 'react'
import { useSelector } from 'react-redux'
import { selectCounter } from '../../store/counter/counterSlice'
import UserContext from '../../context/UserContext'
import { 
  LinkNav, 
  Nav,
  UserContainer
} from './styles'

const Menu = () => {

  const { user, lastLogin } = useContext(UserContext)
  const counter = useSelector(selectCounter)

  return (
    <>
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
        
        <UserContainer>
          <p>{user}</p>
          <p>{lastLogin}</p>
          <p>Counter: {counter}</p>
        </UserContainer>
      </Nav>
      
    </>
  )
}

export default Menu