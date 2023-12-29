import styled from 'styled-components'

export const StyledHeader = styled.header`
  background-color: var(--cor-secundaria);
  color: var(--cor-principal);
  text-align: center:
  padding: 24px 0;

  h1 {
    text-align: center;
  }

  @media (max-width: 768px) {
    h1 {
      text-align: center;
      font-size: 20px;
    }
  }
`
