import logo from '../../assets/Logo.svg'
import { MapPin, ShoppingCart } from '@phosphor-icons/react'

import {
  ButtonCardHeader,
  ButtonPrimaryHeader,
  HeaderLayout,
} from './styled.ts'
import { NavLink } from 'react-router-dom'

export function Header() {
  return (
    <HeaderLayout>
      <NavLink to={'/'}>
        <img src={logo} alt="" />
      </NavLink>
      <div>
        <ButtonPrimaryHeader>
          <MapPin size={22} weight="fill" />
          Porto Alegre, RS
        </ButtonPrimaryHeader>
        <NavLink to={'/checkout'}>
          <ButtonCardHeader>
            <ShoppingCart size={22} weight="fill" />
          </ButtonCardHeader>
        </NavLink>
      </div>
    </HeaderLayout>
  )
}
