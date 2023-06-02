import { createContext, ReactNode, useEffect, useReducer } from 'react'
import { CoffeeModel } from '../models/CoffeeModel.ts'
import { cartReducer } from '../reducers/Cart/reducer.ts'
import { CartModel } from '../models/CartModel.ts'
import { addItemCartAction } from '../reducers/Cart/action.ts'

interface CardContextType {
  cart: CartModel
  addItemToCard: (coffee: CoffeeModel, quantity: number) => void
}

interface CardContextProviderProps {
  children: ReactNode
}

export const CardContext = createContext({} as CardContextType)

export function CardContextProvider({ children }: CardContextProviderProps) {
  const [cartState, dispatch] = useReducer(cartReducer, {
    coffees: [],
    userData: null,
  })

  const { coffees } = cartState

  useEffect(() => {
    console.log(cartState)
  }, [cartState])

  function addItemToCard(item: CoffeeModel, quantity: number) {
    const itemToAdd = { ...item }
    itemToAdd.quantity = quantity
    dispatch(addItemCartAction(itemToAdd))
  }

  return (
    <>
      <CardContext.Provider
        value={{
          cart: cartState,
          addItemToCard,
        }}
      >
        {children}
      </CardContext.Provider>
    </>
  )
}
