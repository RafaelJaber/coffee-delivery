import {
  CheckoutContainerLayout,
  SideFormLayout,
  SideSummaryLayout,
} from './styled.ts'
import { FormBilling } from './components/FormBilling'
import { CheckoutSelect } from './components/CheckoutSelect'

export function Checkout() {
  return (
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
  )
}
