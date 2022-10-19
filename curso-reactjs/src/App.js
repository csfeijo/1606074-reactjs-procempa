function App() {

  // const aula = <>
  //   <h2>Aula - 01</h2>
  //   <p>Olá!</p>
  // </>

  const aula = (num) => {
    return (
      <>
        <h2>Aula - {num}</h2>
        <p>Olá!</p>
     </>
    )
  }

  return (
    <>
      <h1>Curso de ReactJS</h1>
      <hr />
      {aula(10)}
    </>
  )
}

export default App
