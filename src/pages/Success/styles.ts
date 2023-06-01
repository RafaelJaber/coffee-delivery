// noinspection CssInvalidPropertyValue

import styled from 'styled-components'

export const SuccessLayout = styled.section`
  display: flex;
  flex-direction: row;
  padding: 5rem 10rem;
  justify-content: center;
  align-items: center;

  h2 {
    color: ${(props) => props.theme['yellow-700']};
    font-family: 'baloo 2', sans-serif;
    font-weight: 800;
    font-size: 2rem;
    line-height: 1.5;
  }

  h3 {
    color: ${(props) => props.theme['gray-800']};
    font-weight: 400;
    margin-bottom: 2rem;
  }

  & > div > div {
    border-radius: 6px 36px;
    padding: 2.5rem;
    gap: 2rem;

    border-style: solid;
    border-width: 2px;

    border-image-source: linear-gradient(45deg, #dbac2c, #8047f8) 1;
  }
`
