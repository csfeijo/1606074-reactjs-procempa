import axios from 'axios';
import configureMock from './configureMock';

const mockRequests = false;

const baseURL = 'https://professorfeijo.com.br/tt/api-php';

const api = axios.create({
  baseURL
});

if (mockRequests) {
  configureMock(api)
}

export default api;