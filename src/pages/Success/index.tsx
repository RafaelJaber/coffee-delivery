import { useContext } from 'react'
import { CurrencyDollar, MapPin, Timer } from '@phosphor-icons/react'
import { CardContext } from '../../contexts/CardContext.tsx'

import { SuccessLayout } from './styles.ts'
import image from '../../assets/Illustration.svg'

export function Success() {
  const { cart } = useContext(CardContext)
  const { userData } = cart
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
              Entrega em{' '}
              <strong>
                {userData?.street}, {userData?.number}
              </strong>{' '}
              <br />
              <small>
                {userData?.neighborhood} = {userData?.city}, {userData?.uf}
              </small>
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
              Pagamento na entrega <br />
              <strong>{userData?.paymentMethod}</strong>
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
