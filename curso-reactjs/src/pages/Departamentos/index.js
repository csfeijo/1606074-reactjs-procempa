import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Row from './styles';
import getDepartamentos from '../../services/departamentos';

const Departamentos = () => {

  const [departamentos, setDepartamentos] = useState();
  const [msg, setMsg] = useState('');

  const loadDepartamentos = async () => {
    try {
      const resp = await getDepartamentos();
      setDepartamentos(resp.data);
      setMsg('');
    } catch (e) {
      console.error('Exception: ', e.response.status);
      setMsg(`Server error - code: ${e.response.status}`);
    }
  }

  useEffect(() => {
    if (!departamentos) {
      loadDepartamentos();
    }
  },[departamentos])
 
  
  return (
    <>
      <h1>Departamentos</h1>
      <h3>{msg}</h3>
      {departamentos && departamentos.map(d => {
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