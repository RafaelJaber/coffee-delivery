import { CartModel } from '../../models/CartModel.ts'
import { CartActionEnum } from './action.ts'
import { produce } from 'immer'

export function cartReducer(state: CartModel, action: any) {
  switch (action.type) {
    case CartActionEnum.ADD_ITEM: {
      const coffeeToAlter = state.coffees.findIndex((coffee) => {
        return coffee.id === action.payload.item.id
      })

      if (coffeeToAlter < 0) {
        return produce(state, (draft) => {
          draft.coffees.push(action.payload.item)
        })
      } else {
        return produce(state, (draft) => {
          draft.coffees[coffeeToAlter].quantity = action.payload.item.quantity
        })
      }
    }
    case CartActionEnum.REMOVE_ITEM: {
      const coffeeIndex = state.coffees.findIndex((coffee) => {
        return coffee.id === action.payload.item.id
      })

      if (coffeeIndex < 0) {
        return state
      }

      const coffeeAlter = state.coffees[coffeeIndex]
      if (
        coffeeAlter.quantity! > 0 &&
        coffeeAlter.quantity! >= action.payload.item.quantity
      ) {
        return produce(state, (draft) => {
          draft.coffees[coffeeIndex].quantity = action.payload.item.quantity
        })
      }
      return state
    }

    default:
      return state
  }
}
