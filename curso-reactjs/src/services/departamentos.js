import api from './api';

const headers = {
  'Authorization': 'Bearer PROCEMPA'
}

export const getDepartamentos = async () => {
  const resp = await api.get('/departamentos/', { headers });
  
  return resp;
}

export const insertDepartamento = async () => {
  const resp = await api.post('/departamentos/', { headers });

  return resp;
}
