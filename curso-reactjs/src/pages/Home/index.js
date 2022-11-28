import React, { useContext } from 'react'
import { Button } from 'react-bootstrap'
import UserContext from '../../context/UserContext'


const Home = () => {

  const { user } = useContext(UserContext)

  return (
    <div className='container'>
      <h2 className='mb-3'>Welcome</h2>
      <p>Você está logado como: {user}</p>
    </div>
  )
}

export default Home