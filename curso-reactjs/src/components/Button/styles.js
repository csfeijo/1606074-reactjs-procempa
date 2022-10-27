import styled from 'styled-components';

const getVariant = (variant) => {
  switch (variant) {
    case 'success':
      return (
        `
          background: #198754;
          color: white;
        `
      )
    case 'danger':
      return (
        `
          background: #dc3545;
          color: white;
        `
      )
    case 'warning':
      return (
        `background: #ffc107;`
      )
    default:
      return (
        `background: #e1e1e1;`
      )
  }
}


const Container = styled.button`
  ${props => getVariant(props.variant)}
`;

export default Container;
