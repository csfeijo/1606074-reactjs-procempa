import React from 'react';
import Container from './styles';

const Button = ({ children, onClick, variant }) => {

  return (
    <Container 
      onClick={onClick}
      variant={variant}
    >
      {children}
    </Container>
  )

}

export default Button;