import { useContext, useState } from 'react'
import { Minus, Plus, ShoppingCart } from '@phosphor-icons/react'
import { CardContext } from '../../../../contexts/CardContext.tsx'

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
  const [quantity, setQuantity] = useState(0)
  const { addItemToCard } = useContext(CardContext)

  function handleChangeQuantity(event: any) {
    const operation: string = event.target.dataset.operation
    if (operation === '+') {
      setQuantity((state) => {
        return state + 1
      })
    } else {
      if (quantity > 0) {
        setQuantity((state) => {
          return state - 1
        })
      }
    }
  }

  function handleAddToCart() {
    addItemToCard(coffee, quantity)
  }

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
            <button onClick={handleChangeQuantity}>
              <Minus size={15} data-operation="-" />
            </button>
            <input type="number" min={1} value={quantity} disabled />
            <button onClick={handleChangeQuantity}>
              <Plus size={15} data-operation="+" />
            </button>
          </InputNumberLayout>
          <button disabled={quantity === 0} onClick={handleAddToCart}>
            <ShoppingCart size={32} weight="fill" />
          </button>
        </InputGroupFooter>
      </CardFooter>
    </CardLayout>
  )
}
