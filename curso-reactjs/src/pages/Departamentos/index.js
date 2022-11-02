import React from 'react';
import { Link } from 'react-router-dom';
import Row from './styles';


const Departamentos = () => {

  const departamentos = [
    { id_departamento: 1, nome: 'Recursos Humanos', sigla: 'RH'},
    { id_departamento: 2, nome: 'Financeiro', sigla: 'FINANC'},
    { id_departamento: 3, nome: 'Contabilidade', sigla: 'CONTAB'}
  ]

  return (
    <>
      <h1>Departamentos</h1>

      {departamentos.map(d => {
        return (
          <Row key={d.id_departamento}>
            <Link to={`${d.id_departamento}`}>{d.nome}</Link>
          </Row>
        )
      })}

    </>
  )
}

export default Departamentos;