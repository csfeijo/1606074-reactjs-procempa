import React from 'react'
import PropTypes from 'prop-types'
import Container from './styles'

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

Button.propTypes = {
  variant: PropTypes.string,
  onClick: PropTypes.func,
  children: PropTypes.node.isRequired
}



export default Button