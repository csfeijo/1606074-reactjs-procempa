import React from 'react'
import imgLoader from '../../assets/img/loader.svg'
import Container from './styles'

const Loader = ({ children, fullScreen=true }) => {
  return (
    <Container fullScreen={fullScreen}>
      <img src={imgLoader} alt='loader' />
      {children}
    </Container>
  )
}

export default Loader