import MockAdapter from 'axios-mock-adapter';
import departamentosMock from '../mocks/departamentosMock.json';

const configureMock = (axios) => {
  const mock = new MockAdapter(axios, { delayResponse: 1000 } );

  mock.onGet('/departamentos/').reply(200, departamentosMock);
  //mock.onGet('/departamentos/').reply(500);
}

export default configureMock;