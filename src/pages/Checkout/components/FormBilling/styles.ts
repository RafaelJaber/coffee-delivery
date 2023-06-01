import styled from 'styled-components'

export const FormCardLayout = styled.div`
  background: ${(props) => props.theme['gray-200']};
  padding: 2.5rem;
  border-radius: 8px;

  & + & {
    margin-top: 1rem;
  }
`

export const FormDivFirstPartLayout = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  margin-top: 2rem;

  & input {
    background: ${(props) => props.theme['gray-300']};
    border: none;
    padding: 1rem;
    border-radius: 8px;
    color: ${(props) => props.theme['gray-700']};
  }

  input[placeholder='CEP'] {
    width: 12.5rem;
  }

  & input::placeholder,
  & small {
    color: ${(props) => props.theme['gray-600']};
  }
`

export const HeaderFormLayout = styled.header`
  display: flex;
  flex-direction: row;
  gap: 8px;
  
  {
    color: ${(props) => props.theme['yellow-700']}
  }

  p {
    font-size: 1rem;
    font-weight: 400;
    font-family: 'roboto', sans-serif;
    color ${(props) => props.theme['gray-800']}
  }
  
  small {
    font-size: 0.875rem;
    color ${(props) => props.theme['gray-700']}
  }
`

export const FormGroupNumberAndComplementLayout = styled.div`
  display: grid;
  grid-template-columns: 1fr 2fr;
  gap: 0.8rem;

  input {
    width: 100%;
  }

  div {
    display: block;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    position: relative;
  }

  div > small {
    font-style: italic;
    position: absolute;
    right: 10px;
    top: 35%;
  }
`

export const FromCityAndUfLayout = styled.div`
  display: flex;
  gap: 0.8rem;

  input[placeholder='Cidade'] {
    flex-grow: 3;
  }

  input[placeholder='Bairro'] {
    max-width: 12.5rem;
    flex-grow: 2;
  }

  input[placeholder='UF'] {
    width: 3.75rem;
    flex-grow: 1;
  }
`

export const FormPaymentMethodLayout = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  gap: 0.875rem;
  margin-top: 2rem;

  input[type='radio'] {
    display: none;
  }

  label {
    padding: 0.875rem 0.5rem;
    background: ${(props) => props.theme['gray-400']};
    border-radius: 8px;
    text-transform: uppercase;
    border: 2px solid transparent;
    cursor: pointer;
    font-size: 0.875rem;
    display: flex;
    gap: 12px;
    width: 12rem;
  }

  label:hover {
    background: ${(props) => props.theme['gray-500']};
  }

  [type='radio']:checked + label {
    background: ${(props) => props.theme['purple-300']};
    border: 2px solid ${(props) => props.theme['purple-500']};
  }
`
