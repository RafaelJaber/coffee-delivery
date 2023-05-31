import styled from 'styled-components'

import backgroundSection from '../../assets/Background.svg'
import { defaultTheme } from '../../styles/themes/default.ts'

interface ButtonIconsProps {
  bgColor: typeof defaultTheme | string
}

export const BannerLayout = styled.section`
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  align-items: center;
  padding: 5.5rem 10rem;
  background-image: url(${backgroundSection});
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
`

export const ContentSectionDivLayout = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;

  h1 {
    font-weight: 800;
    font-family: 'baloo 2', sans-serif;
    font-size: 3rem;
    color: ${(props) => props.theme['gray-900']};
    line-height: 1.4;
  }

  p {
    font-size: 1.25rem;
    line-height: 1.2;
  }
`

export const ItensContentSectionLayout = styled.div`
  margin-top: 1rem;

  div {
    display: flex;
    gap: 40px;
    margin-bottom: 1.594rem;
  }

  p {
    font-size: 1rem;
    display: flex;
    align-items: center;
    gap: 0.75rem;
    width: 18.75rem;
  }
`

export const ItemIconSectionLayout = styled.span<ButtonIconsProps>`
  background: ${(props) => props.bgColor};
  color: ${(props) => props.theme.white};
  border-radius: 50%;
  display: flex;
  width: 2rem;
  height: 2rem;
  justify-content: center;
  align-items: center;
`

export const CardSection = styled.section`
  padding: 2rem 10rem;

  h2 {
    color: ${(props) => props.theme['gray-800']};
    font-family: 'baloo 2', sans-serif;
    font-size: 2rem;
    font-weight: 800;
    margin-bottom: 2rem;
  }

  .card {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
  }
`
