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
  return (
    <>
      <form>
        <FormCardLayout>
          <HeaderFormLayout>
            <MapPinLine size={22} />
            <p>
              Endereço de Entrega <br />
              <small>Informe o endereço onde deseja receber seu pedido</small>
            </p>
          </HeaderFormLayout>
          <FormDivFirstPartLayout>
            <input type="text" placeholder="CEP" />
            <input type="text" placeholder="Rua" />
            <FormGroupNumberAndComplementLayout>
              <input type="number" placeholder="Número" id="inputNumber" />
              <div>
                <input
                  type="text"
                  placeholder="Complemento"
                  id="inputComplement"
                />
                <small>Opcional</small>
              </div>
            </FormGroupNumberAndComplementLayout>
            <FromCityAndUfLayout>
              <input type="text" placeholder="Bairro" />
              <input type="text" placeholder="Cidade" />
              <input type="text" placeholder="UF" id="inputUf" />
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
          <form>
            <FormPaymentMethodLayout>
              <input
                type="radio"
                id="creditCard"
                value="credit"
                name="payment"
              />
              <label htmlFor="creditCard">
                <CreditCard size={16} color={'#8047F8'} />
                Cartão de Crédito
              </label>
              <input
                type="radio"
                id="debitCard"
                value="credit"
                name="payment"
              />
              <label htmlFor="debitCard">
                <Bank size={16} color={'#8047F8'} />
                Cartão de Débito
              </label>
              <input type="radio" id="money" value="credit" name="payment" />
              <label htmlFor="money">
                <Money size={16} color={'#8047F8'} />
                Dinheiro
              </label>
            </FormPaymentMethodLayout>
          </form>
        </FormCardLayout>
      </form>
    </>
  )
}
