import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { LinkContainer } from 'react-router-bootstrap'
import Button from 'react-bootstrap/Button'
import Table from 'react-bootstrap/Table'
import Nav from 'react-bootstrap/Nav'
import { getDepartamentos } from '../../services/departamentos'
import Loader from '../../components/Loader'

const Departamentos = () => {

  const [departamentos, setDepartamentos] = useState()
  const [showLoader, setShowLoader] = useState(false)
  const [msg, setMsg] = useState('')

  const loadDepartamentos = async () => {
    setShowLoader(true)
    try {
      const resp = await getDepartamentos()
      setDepartamentos(resp.data)
      setMsg('')
      setShowLoader(false)
    } catch (e) {
      console.error('Exception: ', e.response.status)
      setMsg(`Server error - code: ${e.response.status}`)
      setShowLoader(false)
    }
  }

  useEffect(() => {
    if (!departamentos) {
      loadDepartamentos()
    }
  },[departamentos])
 
  
  return (
    <div className='container'>
      <h2 className='mb-3'>Listagem de Departamentos</h2>
      <h3>{msg}</h3>
      {showLoader &&
        <Loader/>
      }
      
      <Table 
        striped
        hover
      >
        <thead>
          <tr>
            <th>Nome</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {departamentos && departamentos.map(d => {
            return (
              <tr key={d.id_departamento}>
                <td className='align-middle'>
                  <LinkContainer to={`/departamentos/${d.id_departamento}`}>
                    <Nav.Link>{d.nome}</Nav.Link>
                  </LinkContainer>
                </td>
                <td className='text-end'>
                  <Button variant='warning' className='btn-sm me-3'>Editar</Button>
                  <Button variant='danger' className='btn-sm'>Excluir</Button>
                </td>
              </tr>
            )
          })}
          
        </tbody>
      </Table>
    </div>
  )
}

export default Departamentos