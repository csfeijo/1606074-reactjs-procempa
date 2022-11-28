import React, { useContext } from 'react'
import UserContext from '../../context/UserContext'
import Container from './styles'

const User = () => {

  const { user, setUser } = useContext(UserContext)

  return (
    <Container className='container'>
      <h2 className='mb-3'>Usuário</h2>

      <input
        type='text'
        name='user'
        placeholder='Usuário'
        value={user}
        onChange={(e) => {
          setUser(e.target.value)
        }}
      />
    </Container>
  )
}

export default User