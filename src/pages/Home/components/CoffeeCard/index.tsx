import coffeeDemo from '../../../../assets/coffees/Americano.svg'
import { Minus, Plus, ShoppingCart } from '@phosphor-icons/react'
import {
  CardFooter,
  CardLayout,
  InputGroupFooter,
  InputNumberLayout,
} from './styled.ts'

export function CoffeeCard() {
  return (
    <CardLayout>
      <img
        src={coffeeDemo}
        alt="Imagem com uma xicará cheia de café americano"
      />
      <a href="#">Tradicional</a>
      <h3>Expresso Americano</h3>
      <p>Expresso diluído, menos intenso que o tradicional</p>
      <CardFooter>
        <p>
          R$ <strong>9,90</strong>
        </p>
        <InputGroupFooter>
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
            <ShoppingCart size={32} weight="fill" />
          </button>
        </InputGroupFooter>
      </CardFooter>
    </CardLayout>
  )
}
