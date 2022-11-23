import React from 'react'

const Titulo = ({ aula, turma, children }) => {

  return (
    <>
      <h1>Bem vindo!</h1>

      {turma && <h2>Turma: {turma}</h2>}

      <hr/>
      {aula}
      <br/>
      {children}
    </>
  )
}

Titulo.defaultProps = {
  aula: 'N/A'
}

export default Titulo