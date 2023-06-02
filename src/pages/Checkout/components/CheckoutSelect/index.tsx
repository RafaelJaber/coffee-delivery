import { useContext, useEffect, useState } from 'react'
import { CardContext } from '../../../../contexts/CardContext.tsx'
import { CoffeeCheckoutItem } from './components/CoffeeCheckoutItem'
import { useFormContext } from 'react-hook-form'

import { DivTextLayout, LayoutCheckoutSelect } from './styles.ts'

export function CheckoutSelect() {
  const { cart } = useContext(CardContext)
  const [totalItens, setTotalItens] = useState(0)
  const { formState } = useFormContext()

  const tax: number = 3.75

  useEffect(() => {
    const total = cart.coffees.reduce((totalOfItens: number, item) => {
      return totalOfItens + item.price * item.quantity!
    }, 0)
    setTotalItens(total)
  }, [cart, totalItens])

  return (
    <>
      <LayoutCheckoutSelect>
        {cart.coffees.map((coffee) => {
          return (
            <CoffeeCheckoutItem
              key={coffee.id || 'item_removido'}
              coffee={coffee}
            />
          )
        })}

        <DivTextLayout>
          <span>
            <p>Total de itens</p>
            R$ {totalItens.toFixed(2)}
          </span>
          <span>
            <p>Entrega</p>
            R$ {tax}
          </span>
          <span className="total">
            <p>Total</p>
            R$ {(totalItens + tax).toFixed(2)}
          </span>
        </DivTextLayout>

        <button type="submit" disabled={!formState.isValid}>
          Confirmar pedido
        </button>
      </LayoutCheckoutSelect>
    </>
  )
}
