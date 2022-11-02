import React from 'react';
import { useParams } from 'react-router-dom';


const DetalheDepartamento = () => {

  const { idDepartamento } = useParams();  

  return (
    <>
      <h1>Detalhes do Departamento</h1>
      <ul>
        <li>ID: {idDepartamento}</li>
      </ul>
    </>
  )
}

export default DetalheDepartamento;