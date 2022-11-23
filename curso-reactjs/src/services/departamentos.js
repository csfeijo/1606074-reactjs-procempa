import api from './api'

const headers = {
  'Authorization': 'Bearer PROCEMPA'
}

export const getDepartamentos = async () => {
  const resp = await api.get('/departamentos/', { headers })
  
  return resp
}

export const insertDepartamento = async ({ nome, sigla }) => {
  // neste cenário a API espera os dados como Form-Encoded
  const body = new FormData()
  body.append('nome', nome)
  body.append('sigla', sigla)

  const resp = await api.post('/departamentos/', body , { headers })

  return resp
}
