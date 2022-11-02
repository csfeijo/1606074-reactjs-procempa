import React, { useState } from 'react';
import Button from '../../components/Button'
import { Container, Mensagem } from './styles';

const FormDepartamento = () => {

  const [nome, setNome] = useState('');
  const [sigla, setSigla] = useState('');
  const [msg, setMsg] = useState('');

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
        ENVIAR
      </Button>

      <Mensagem>{msg}</Mensagem>
    </Container>
  )
}

export default FormDepartamento;