import React, { useContext } from 'react'
import UserContext from '../../context/UserContext'


const Home = () => {

  const { user } = useContext(UserContext)

  return (
    <>
      <h1>Welcome</h1>
      <p>Você está logado como: {user}</p>
    </>
  )
}

export default Home