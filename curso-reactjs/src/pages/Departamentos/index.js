import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Row from './styles';
import { getDepartamentos } from '../../services/departamentos';
import Loader from '../../components/Loader';

const Departamentos = () => {

  const [departamentos, setDepartamentos] = useState();
  const [showLoader, setShowLoader] = useState(false);
  const [msg, setMsg] = useState('');

  const loadDepartamentos = async () => {
    setShowLoader(true);
    try {
      const resp = await getDepartamentos();
      setDepartamentos(resp.data);
      setMsg('');
      setShowLoader(false);
    } catch (e) {
      console.error('Exception: ', e.response.status);
      setMsg(`Server error - code: ${e.response.status}`);
      setShowLoader(false);
    }
  }

  useEffect(() => {
    if (!departamentos) {
      loadDepartamentos();
    }
  },[departamentos])
 
  
  return (
    <>
      <h1>Listagem de Departamentos</h1>
      
      {showLoader &&
        <Loader/>
      }

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