import React from 'react';
import { 
  Nav, 
  LinkNav 
} from './styles';

const Menu = () => {
  return (
    <Nav>
      <h1>Curso de ReactJS</h1>
      <LinkNav 
        active={true}
        href="#"
      >
        Departamentos
      </LinkNav>

      <LinkNav href="#">Add Departamentos</LinkNav>

    </Nav>
  )
}

export default Menu