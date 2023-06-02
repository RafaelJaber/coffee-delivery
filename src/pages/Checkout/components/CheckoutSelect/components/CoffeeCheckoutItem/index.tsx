import { useContext, useState } from 'react'
import { Minus, Plus, Trash } from '@phosphor-icons/react'
import { CardContext } from '../../../../../../contexts/CardContext.tsx'
import { CoffeeModel } from '../../../../../../models/CoffeeModel.ts'

import { CardItemLayout, InputNumberLayout } from './styles.ts'

interface CoffeeCheckoutItemProps {
  coffee: CoffeeModel
}

export function CoffeeCheckoutItem({ coffee }: CoffeeCheckoutItemProps) {
  const { removeItemCart, changeItemCartQuantity } = useContext(CardContext)
  const [quantity, setQuantity] = useState(coffee.quantity!)

  function handleRemoveItemCart() {
    removeItemCart(coffee)
  }

  function handleChangeQuantity(event: any) {
    const operator = event.target.dataset.operator
    if (operator === '+') {
      setQuantity((state) => {
        const newQuantity = state + 1
        changeItemCartQuantity(coffee, newQuantity)
        return newQuantity
      })
    } else if (operator === '-') {
      setQuantity((state) => {
        const newQuantity = state - 1
        changeItemCartQuantity(coffee, newQuantity)
        return newQuantity
      })
    }
  }

  if (coffee) {
    return (
      <>
        <CardItemLayout>
          <header>
            <img src={coffee.imageUrl} alt="" />
            <div>
              <p>{coffee.title}</p>
              <div>
                <InputNumberLayout>
                  <button
                    disabled={coffee.quantity! <= 1}
                    onClick={handleChangeQuantity}
                  >
                    <Minus size={15} data-operator="-" />
                  </button>
                  <input
                    type="number"
                    min={1}
                    value={coffee.quantity}
                    disabled
                  />
                  <button onClick={handleChangeQuantity}>
                    <Plus size={15} data-operator="+" />
                  </button>
                </InputNumberLayout>
                <button disabled={quantity > 99} onClick={handleRemoveItemCart}>
                  <Trash size={16} color={'#8047F8'} />
                  Remover
                </button>
              </div>
            </div>
          </header>
          <strong>R$ {coffee.price.toFixed(2)}</strong>
        </CardItemLayout>
      </>
    )
  } else {
    return <></>
  }
}
