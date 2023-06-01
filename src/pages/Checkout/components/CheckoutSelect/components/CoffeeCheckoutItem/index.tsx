import imagem1 from '../../../../../../assets/coffees/Americano.svg'
import { CardItemLayout, InputNumberLayout } from './styles.ts'
import { Minus, Plus, Trash } from '@phosphor-icons/react'

export function CoffeeCheckoutItem() {
  return (
    <>
      <CardItemLayout>
        <header>
          <img src={imagem1} alt="" />
          <div>
            <p>Expresso Tradicional</p>
            <div>
              <InputNumberLayout>
                <button>
                  <Minus size={15} />
                </button>
                <input type="number" min={1} value={15} disabled />
                <button>
                  <Plus size={15} />
                </button>
              </InputNumberLayout>
              <button>
                <Trash size={16} color={'#8047F8'} />
                Remover
              </button>
            </div>
          </div>
        </header>
        <strong>R$ 9,90</strong>
      </CardItemLayout>
    </>
  )
}
