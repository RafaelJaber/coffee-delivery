import styled from 'styled-components'

export const HeaderLayout = styled.header`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 2rem 10rem;

  div {
    display: flex;
    flex-direction: row;
    gap: 0.75rem;
  }
`

export const ButtonPrimaryHeader = styled.button`
  background: ${(props) => props.theme['purple-300']};
  border: none;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0.5rem;
  color: ${(props) => props.theme['purple-700']};
  font-size: 0.875rem;
  font-weight: 400;
  gap: 0.25rem;
  border-radius: 8px;
  cursor: pointer;
  transition: background-color 0.1s;

  &:hover {
    background: ${(props) => props.theme['purple-500']};
    color: ${(props) => props.theme['gray-200']};
  }
`

export const ButtonCardHeader = styled.button`
  background: ${(props) => props.theme['yellow-300']};
  color: ${(props) => props.theme['yellow-700']};
  border: none;
  padding: 0.875rem;
  line-height: 0;
  border-radius: 8px;
  cursor: pointer;
  transition: background-color 0.1s;
  position: relative;

  &:hover {
    background: ${(props) => props.theme['yellow-500']};
    color: ${(props) => props.theme['gray-200']};
  }

  & > span {
    background: ${(props) => props.theme['yellow-700']};
    width: 1.25rem;
    height: 1.25rem;
    border-radius: 50%;
    font-size: 0.875rem;
    font-weight: 700;
    color: ${(props) => props.theme.white};
    position: absolute;
    display: flex;
    justify-content: center;
    align-items: center;
    top: -15%;
    right: -15%;
  }
`
