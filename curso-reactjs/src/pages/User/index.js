import React, { useContext } from 'react'
import UserContext from '../../context/UserContext'
import Container from './styles'

const User = () => {

  const { user, setUser } = useContext(UserContext)

  return (
    <Container>
      <h1>Usuário</h1>
      <input
        type='text'
        placeholder='Nome de usuário'
        value={user}
        onChange={(e) => {
          setUser(e.target.value)
        }}
      />
    </Container>
  )

}

export default User