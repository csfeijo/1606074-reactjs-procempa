import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Button from '../../components/Button';
import Loader from '../../components/Loader';
import { Container, Mensagem } from './styles';
import { insertDepartamento } from '../../services/departamentos';

const FormDepartamento = () => {

  const [nome, setNome] = useState('');
  const [sigla, setSigla] = useState('');
  const [msg, setMsg] = useState('');
  const [showLoader, setShowLoader] = useState(false);
  const navigate = useNavigate();

  const validaForm = () => {
    if (nome === '') {
      setMsg('Preencha o nome');
      return false;
    }

    if (sigla === '') {
      setMsg('Preencha a sigla');
      return false;
    }

    setMsg('');

    (async () => {
      setShowLoader(true);
      try {
        const resp = await insertDepartamento();
        // TODO: tratar a resposta

        setShowLoader(false);
        navigate('/departamentos');
      } catch(e) {
        console.error(e);
        setShowLoader(false);
      }
    })()

    return true;
  }

  return (
    <Container>

      <h1>Cadastrar Departamento</h1>
      <input
        type='text'
        placeholder='Nome'
        value={nome}
        onChange={(e) => {
          setNome(e.target.value)
        }}
      />
      <input
        type='text'
        placeholder='Sigla'
        value={sigla}
        onChange={(e) => {
          setSigla(e.target.value)
        }}
      />
      <Button
        onClick={validaForm}
      >
       
       {showLoader ? <Loader fullScreen={false}>Carregando...</Loader> : 'ENVIAR' }
       
      </Button>

      <Mensagem>{msg}</Mensagem>
    </Container>
  )
}

export default FormDepartamento;