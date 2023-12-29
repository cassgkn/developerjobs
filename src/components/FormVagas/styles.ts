import styled from 'styled-components'

export const StyledForm = styled.form`
  display: grid;
  grid-template-columns: 1fr auto;
  background-color: var(--cor-secundaria);
  padding: 32px;
  border-radius: 12px;
  margin-top: 40px;

  @media (max-width: 768px) {
    display: block;
    justify-content: center;
    margin: 20px auto;
    width: 100%;
    font-size: 12px;
    height: 100px;
    padding: 0 12px;
  }
`
export const StyledButton = styled.button`
  background-color: var(--cor-principal);
  border: 1px solid var(--cor-principal);
  border-radius: 7px;
  height: 40px;
  padding: 0 16px;
  font-size: 18px;
  color: var(--cor-secundaria);
  margin-left: 8px;
  cursor: pointer;

  @media (max-width: 768px) {
    width: 100%;
    font-size: 14px;
    height: 30px;
    margin: 10px auto;
    padding: 7px 12px;
  }
`
export const StyledInput = styled.input`
  padding: 0 16px;
  outline-color: var(--cor-principal);
  border-radius: 3px;
  border: 2px solid #ccc;

  @media (max-width: 768px) {
    text-align: center;
    width: 100%;
    font-size: 14px;
    height: 30px;
    margin-top: 15px;
    padding: 5px 12px;
  }
`
