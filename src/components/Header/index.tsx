import logo from '../../assets/Logo.svg'
import { MapPin, ShoppingCart } from '@phosphor-icons/react'

import {
  ButtonCardHeader,
  ButtonPrimaryHeader,
  HeaderLayout,
} from './styled.ts'

export function Header() {
  return (
    <HeaderLayout>
      <img src={logo} alt="" />
      <div>
        <ButtonPrimaryHeader>
          <MapPin size={22} weight="fill" />
          Porto Alegre, RS
        </ButtonPrimaryHeader>
        <ButtonCardHeader>
          <ShoppingCart size={22} weight="fill" />
        </ButtonCardHeader>
      </div>
    </HeaderLayout>
  )
}
