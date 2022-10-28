import React from 'react';
import { 
  Nav, 
  LinkNav 
} from './styles';

const Menu = () => {
  return (
    <Nav>
      <LinkNav 
        to="/"
      >
        <h1>Curso de ReactJS</h1>
      </LinkNav>

      <LinkNav
        to="/departamentos"
      >
        Departamentos
      </LinkNav>

      <LinkNav to="/departamentos/new">Add Departamentos</LinkNav>

    </Nav>
  )
}

export default Menu