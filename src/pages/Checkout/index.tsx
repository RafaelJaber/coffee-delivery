import { useContext } from 'react'
import { CardContext } from '../../contexts/CardContext.tsx'
import { FormProvider, useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { useNavigate } from 'react-router-dom'
import * as zod from 'zod'

import {
  CheckoutContainerLayout,
  SideFormLayout,
  SideSummaryLayout,
} from './styled.ts'
import { FormBilling } from './components/FormBilling'
import { CheckoutSelect } from './components/CheckoutSelect'
import { UserAddress } from '../../models/UserAddress.ts'

const newAddressForm = zod.object({
  cep: zod.string(),
  street: zod.string(),
  number: zod.string(),
  complement: zod.string(),
  neighborhood: zod.string(),
  city: zod.string(),
  uf: zod.string(),
  paymentMethod: zod.string(),
})

export function Checkout() {
  const { addAddressToCart, clearCart } = useContext(CardContext)
  const navigate = useNavigate()

  const newFormAddress = useForm<UserAddress>({
    resolver: zodResolver(newAddressForm),
    defaultValues: {
      cep: '',
      street: '',
      number: '',
      complement: '',
      city: '',
      paymentMethod: 'credit',
    },
  })
  const { handleSubmit, formState } = newFormAddress

  function handleSubmitForm(data: UserAddress) {
    if (formState.isValid) {
      addAddressToCart(data)
      navigate('/success')
      clearCart()
    }
  }

  return (
    <form onSubmit={handleSubmit(handleSubmitForm)}>
      <FormProvider {...newFormAddress}>
        <CheckoutContainerLayout>
          <SideFormLayout>
            <h2>Complete seu pedido</h2>
            <FormBilling />
          </SideFormLayout>
          <SideSummaryLayout>
            <h2>Cafés selecionados</h2>
            <CheckoutSelect />
          </SideSummaryLayout>
        </CheckoutContainerLayout>
      </FormProvider>
    </form>
  )
}
