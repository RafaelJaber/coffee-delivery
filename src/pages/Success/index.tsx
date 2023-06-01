import { CurrencyDollar, MapPin, Timer } from '@phosphor-icons/react'
import { SuccessLayout } from './styles.ts'

import image from '../../assets/Illustration.svg'

export function Success() {
  return (
    <SuccessLayout>
      <div>
        <h2>Uhu! Pedido confirmado</h2>
        <h3>Agora é só aguardar que logo o café chegará até você</h3>

        <div>
          <span>
            <span>
              <MapPin size={16} />
            </span>
            <p>
              Entrega em <strong>Endereço digitado aqui</strong>
              <small>Restante do endereço</small>
            </p>
          </span>

          <span>
            <span>
              <Timer size={16} />
            </span>
            <p>
              Previsão de entrega
              <strong>20 min - 30 min</strong>
            </p>
          </span>

          <span>
            <span>
              <CurrencyDollar size={16} />
            </span>
            <p>
              Pagamento na entrega
              <strong>Pagamento escolhido</strong>
            </p>
          </span>
        </div>
      </div>
      <img
        src={image}
        alt="homem em cima de uma moto roxa, andando nela com um arbustro do lado carregando seu café"
      />
    </SuccessLayout>
  )
}
