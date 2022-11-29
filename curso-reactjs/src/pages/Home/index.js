import React, { useContext } from 'react'
import UserContext from '../../context/UserContext'

const Home = () => {

  const { user, setUser } = useContext(UserContext)

  return (
    <>
      <h1>Home</h1>
      <p>Você está logado como: {user}</p>
    </>
  )
}

export default Home