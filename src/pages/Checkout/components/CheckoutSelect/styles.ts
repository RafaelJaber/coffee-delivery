import styled from 'styled-components'

export const LayoutCheckoutSelect = styled.div`
  background: ${(props) => props.theme['gray-200']};
  border-radius: 8px 50px 8px 50px;
  padding: 2.5rem;

  & > button {
    background: ${(props) => props.theme['yellow-500']};
    border: none;
    text-transform: uppercase;
    width: 100%;
    padding: 1rem;
    margin-top: 1rem;
    border-radius: 8px;
    color: ${(props) => props.theme.white};
    font-weight: 700;
    cursor: pointer;
    transition: background-color 0.1s;
  }

  button:disabled {
    cursor: not-allowed;
    opacity: 0.7;
  }

  & > button:hover {
    background: ${(props) => props.theme['yellow-700']};
  }
`

export const DivTextLayout = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 2rem;

  span {
    display: flex;
    justify-content: space-between;
    margin-bottom: 0.5rem;
  }

  span.total {
    font-weight: 700;
    font-size: 1.25rem;
    color: ${(props) => props.theme['gray-800']};
  }
`
