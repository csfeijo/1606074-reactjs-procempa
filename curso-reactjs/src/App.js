import React, { useState } from 'react';
import Button from './components/Button';
import Titulo from './components/Titulo';

function App() {

  const [ count, setCount ] = useState(0);

  return (
    <>
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
