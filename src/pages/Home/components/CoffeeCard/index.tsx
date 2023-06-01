import { Minus, Plus, ShoppingCart } from '@phosphor-icons/react'
import {
  CardFooter,
  CardLayout,
  InputGroupFooter,
  InputNumberLayout,
} from './styled.ts'
import { CoffeeModel } from '../../../../models/CoffeeModel.ts'

interface CoffeeCardProps {
  coffee: CoffeeModel
}

export function CoffeeCard({ coffee }: CoffeeCardProps) {
  return (
    <CardLayout>
      <img src={coffee.imageUrl} alt={coffee.description} />
      <a href="#">Tradicional</a>
      <h3>{coffee.title}</h3>
      <p>{coffee.description}</p>
      <CardFooter>
        <p>
          R$ <strong>{coffee.price}</strong>
        </p>
        <InputGroupFooter>
          <InputNumberLayout>
            <button>
              <Minus size={15} />
            </button>
            <input type="number" min={1} value={0} disabled />
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
