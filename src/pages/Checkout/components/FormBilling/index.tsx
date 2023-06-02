import { useFormContext } from 'react-hook-form'

import {
  FormCardLayout,
  FormDivFirstPartLayout,
  FormGroupNumberAndComplementLayout,
  FormPaymentMethodLayout,
  FromCityAndUfLayout,
  HeaderFormLayout,
} from './styles.ts'
import {
  MapPinLine,
  CurrencyDollar,
  CreditCard,
  Bank,
  Money,
} from '@phosphor-icons/react'

export function FormBilling() {
  const { register } = useFormContext()

  return (
    <>
      <FormCardLayout>
        <HeaderFormLayout>
          <MapPinLine size={22} />
          <p>
            Endereço de Entrega <br />
            <small>Informe o endereço onde deseja receber seu pedido</small>
          </p>
        </HeaderFormLayout>
        <FormDivFirstPartLayout>
          <input type="text" placeholder="CEP" {...register('cep')} />
          <input type="text" placeholder="Rua" {...register('street')} />
          <FormGroupNumberAndComplementLayout>
            <input type="number" placeholder="Número" id="inputNumber" />
            <div>
              <input
                type="text"
                placeholder="Complemento"
                id="inputComplement"
                {...register('complement')}
              />
              <small>Opcional</small>
            </div>
          </FormGroupNumberAndComplementLayout>
          <FromCityAndUfLayout>
            <input
              type="text"
              placeholder="Bairro"
              {...register('neighborhood')}
            />
            <input type="text" placeholder="Cidade" {...register('city')} />
            <input
              type="text"
              placeholder="UF"
              id="inputUf"
              {...register('uf')}
            />
          </FromCityAndUfLayout>
        </FormDivFirstPartLayout>
      </FormCardLayout>

      <FormCardLayout>
        <HeaderFormLayout>
          <CurrencyDollar size={22} color={'#8047F8'} />
          <p>
            Pagamento <br />
            <small>
              O pagamento é feito na entrega. Escolha a forma que deseja pagar
            </small>
          </p>
        </HeaderFormLayout>

        <FormPaymentMethodLayout>
          <input
            type="radio"
            id="creditCard"
            value="credit"
            {...register('paymentMethod')}
          />
          <label htmlFor="creditCard">
            <CreditCard size={16} color={'#8047F8'} />
            Cartão de Crédito
          </label>
          <input
            type="radio"
            id="debitCard"
            value="debit"
            {...register('paymentMethod')}
          />
          <label htmlFor="debitCard">
            <Bank size={16} color={'#8047F8'} />
            Cartão de Débito
          </label>
          <input
            type="radio"
            id="money"
            value="money"
            {...register('paymentMethod')}
          />
          <label htmlFor="money">
            <Money size={16} color={'#8047F8'} />
            Dinheiro
          </label>
        </FormPaymentMethodLayout>
      </FormCardLayout>
    </>
  )
}
