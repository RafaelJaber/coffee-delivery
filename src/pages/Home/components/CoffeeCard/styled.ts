import styled from 'styled-components'

export const CardLayout = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: ${(props) => props.theme['gray-200']};
  margin: 1rem;
  padding: 1.25rem;
  border-radius: 8px 50px 8px 50px;
  position: relative;
  width: 16rem;

  img {
    width: 7.5rem;
    margin-top: -2.5rem;
    margin-bottom: 0.875rem;
  }

  a {
    text-decoration: none;
    text-transform: uppercase;
    color: ${(props) => props.theme['yellow-700']};
    font-size: 0.625rem;
    line-height: 1.3;
    padding: 0.35rem 0.45rem;
    background: ${(props) => props.theme['yellow-300']};
    border-radius: 20px;
    margin-bottom: 1.25rem;
  }

  h3 {
    font-family: 'baloo 2', sans-serif;
    font-weight: 700;
    font-size: 1.25rem;
    line-height: 1.3;
    margin-bottom: 0.5rem;
  }

  p {
    text-align: center;
    color: ${(props) => props.theme['gray-800']};
  }
`

export const CardFooter = styled.footer`
  margin-top: 2rem;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  gap: 1.25rem;

  p {
    font-size: 0.9rem;
    font-weight: 400;
    font-family: 'roboto', sans-serif;
    display: flex;
    align-items: end;
    line-height: 0.5;
    gap: 2px;
    color: ${(props) => props.theme['gray-700']};
  }

  p strong {
    font-size: 1.5rem;
    font-weight: 800;
    font-family: 'baloo 2', sans-serif;
  }

  button {
    background: blue;
    border: none;
    color: ${(props) => props.theme.white};
    padding: 0.5rem;
    border-radius: 8px;
    background: ${(props) => props.theme['purple-700']};
    cursor: pointer;
    transition: background-color 0.1s;
  }

  button:hover {
    background: ${(props) => props.theme['purple-500']};
  }
`

export const InputGroupFooter = styled.div`
  display: flex;
  flex-direction: row;
  gap: 0.5rem;
`

export const InputNumberLayout = styled.div`
  background: ${(props) => props.theme['gray-400']};
  color: ${(props) => props.theme['gray-800']};
  border-radius: 8px;
  padding: 1rem 0.625rem;
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
    width: 1.7rem;
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
