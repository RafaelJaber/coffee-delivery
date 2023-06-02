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

      return produce(state, (draft) => {
        draft.coffees.splice(coffeeIndex, 1)
      })
    }
    case CartActionEnum.CHANGE_ITEM_QUANTITY: {
      const coffeeIndex = state.coffees.findIndex((coffee) => {
        return coffee.id === action.payload.item.id
      })

      if (coffeeIndex < 0) {
        return state
      }

      return produce(state, (draft) => {
        draft.coffees[coffeeIndex].quantity = action.payload.quantity
      })
    }
    case CartActionEnum.CHECKOUT: {
      return produce(state, (draft) => {
        draft.userData = action.payload.item
      })
    }
    case CartActionEnum.CLEAR: {
      return produce(state, (draft) => {
        draft.coffees = []
      })
    }

    default:
      return state
  }
}
