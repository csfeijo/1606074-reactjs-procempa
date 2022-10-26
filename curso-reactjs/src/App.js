import React, { useEffect, useState } from 'react';
import './assets/scss/main.scss';
import Button from './components/Button';
import Titulo from './components/Titulo';
import Menu from './components/Menu';

function App() {

  const [ count, setCount ] = useState(0);

  useEffect(() => {
    console.log('State mudou...', count);
  }, [count])

  return (
    <>
      <Menu />
      <Titulo aula='Aula 02' turma={count} />

      <Button onClick={() => {
        setCount(count + 1)
      }}>Incrementa</Button>

      <Button onClick={() => {
        setCount(count - 1)
      }}>Decrementa</Button>

      <br/>
      Count: {count}

    </>
  )
}

export default App
