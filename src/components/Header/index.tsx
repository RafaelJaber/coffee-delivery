import logo from '../../assets/Logo.svg'
import { MapPin, ShoppingCart } from '@phosphor-icons/react'

import {
  ButtonCardHeader,
  ButtonPrimaryHeader,
  HeaderLayout,
} from './styled.ts'
import { NavLink } from 'react-router-dom'
import { useContext } from 'react'
import { CardContext } from '../../contexts/CardContext.tsx'

export function Header() {
  const { cart } = useContext(CardContext)

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
            <span>{cart.coffees.length}</span>
          </ButtonCardHeader>
        </NavLink>
      </div>
    </HeaderLayout>
  )
}
