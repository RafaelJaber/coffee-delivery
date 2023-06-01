import { DivTextLayout, LayoutCheckoutSelect } from './styles.ts'
import { CoffeeCheckoutItem } from './components/CoffeeCheckoutItem'

export function CheckoutSelect() {
  return (
    <>
      <LayoutCheckoutSelect>
        <CoffeeCheckoutItem />
        <CoffeeCheckoutItem />

        <DivTextLayout>
          <span>
            <p>Total de itens</p>
            R$ 29,70
          </span>
          <span>
            <p>Entrega</p>
            R$ 3,70
          </span>
          <span className="total">
            <p>Total</p>
            R$ 33,70
          </span>
        </DivTextLayout>

        <button>Confirmar pedido</button>
      </LayoutCheckoutSelect>
    </>
  )
}
