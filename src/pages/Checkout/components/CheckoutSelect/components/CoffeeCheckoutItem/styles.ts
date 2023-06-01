import styled from 'styled-components'

export const CardItemLayout = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 2rem 0;
  border-bottom: 2px solid ${(props) => props.theme['gray-400']};

  header {
    display: flex;
    gap: 20px;
  }

  header img {
    width: 4rem;
  }

  header div > div {
    display: flex;
    gap: 8px;
  }

  header div > p {
    color: ${(props) => props.theme['gray-800']};
    font-size: 1rem;
    margin-bottom: 0.5rem;
  }

  header > div > div > button {
    border: none;
    display: flex;
    align-items: center;
    padding: 0.45rem 0.45rem;
    border-radius: 8px;
    background: ${(props) => props.theme['gray-400']};
    gap: 8px;
    font-size: 0.875rem;
    text-transform: uppercase;
    transition: background-color 0.1s;
    cursor: pointer;
  }

  header > div > div > button:hover {
    background: ${(props) => props.theme['gray-500']};
  }

  header > strong {
    font-weight: 700;
  }

  hr {
    color: blue;
  }
`

export const InputNumberLayout = styled.div`
  background: ${(props) => props.theme['gray-400']};
  color: ${(props) => props.theme['gray-800']};
  border-radius: 8px;
  padding: 0.45rem 0.2rem;
  justify-content: center;
  align-items: center;
  display: flex;

  button {
    background: none;
    border: none;
    line-height: 0;
    cursor: pointer;
    color: ${(props) => props.theme['purple-500']};
    border-radius: 3px;
    padding: 0.15rem;
    transition: color 0.1s;
  }

  button:hover {
    color: ${(props) => props.theme['purple-700']};
    background: none;
  }

  button:active,
  button:focus {
    box-shadow: none;
  }

  input[type='number'] {
    background: none;
    border: none;
    width: 1.4rem;
    text-align: center;
  }

  input[type='number']::-webkit-outer-spin-button,
  input[type='number']::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }

  /* Firefox */
  input[type='number'] {
    -moz-appearance: textfield;
  }
`
