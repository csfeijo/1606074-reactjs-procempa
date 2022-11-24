import styled from 'styled-components'

export const Container = styled.div`
  input {
    width: 400px;
    padding: 10px;
    border-radius: 4px;
    border-color: ${({ theme }) => theme.colors.background};
    display: block;
    margin-bottom: 10px;
  }
`

export default Container