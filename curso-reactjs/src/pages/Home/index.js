import React, { useContext } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { decrementCounter, incrementCounter, selectCounter, updateCounter } from '../../store/counter/counterSlice'
import UserContext from '../../context/UserContext'
import Button from '../../components/Button'


const Home = () => {

  const { user, setUser } = useContext(UserContext)
  const counter = useSelector(selectCounter)
  const dispatch = useDispatch()

  return (
    <>
      <h1>Home atualizado na aula de NodeJS</h1>
      <p>Você está logado como: {user}</p>
      <p>Contador: {counter}</p>
      <Button
        variant='warning'
        onClick={() => {
          dispatch(incrementCounter())
        }}
      >
        +
      </Button>
      <Button
        variant='success'
        onClick={() => {
          dispatch(updateCounter(0))
        }}
      >
        RESET
      </Button>
      <Button
        variant='warning'
        onClick={() => {
          dispatch(decrementCounter())
        }}
      >
        -
      </Button>      
    </>
  )
}

export default Home