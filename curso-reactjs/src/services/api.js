import axios from 'axios';

const baseURL = 'https://professorfeijo.com.br/tt/api-php';

const api = axios.create({
  baseURL
});

export default api;