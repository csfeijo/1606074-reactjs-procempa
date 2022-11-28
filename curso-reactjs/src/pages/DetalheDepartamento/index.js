import React from 'react'
import { useParams } from 'react-router-dom'


const DetalheDepartamento = () => {

  const { idDepartamento } = useParams()  

  return (
    <div className='container'>
      <h2>Detalhes do Departamento</h2>
      <ul>
        <li>ID: {idDepartamento}</li>
      </ul>
    </div>
  )
}

export default DetalheDepartamento