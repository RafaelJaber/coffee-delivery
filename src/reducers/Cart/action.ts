import { CoffeeModel } from '../../models/CoffeeModel.ts'

export enum CartActionEnum {
  ADD_ITEM = 'ADD_ITEM',
  REMOVE_ITEM = 'REMOVE_ITEM',
  CHECKOUT = 'CHECKOUT',
  CLEAR = 'CLEAR',
}

export function addItemCartAction(item: CoffeeModel) {
  return {
    type: CartActionEnum.ADD_ITEM,
    payload: {
      item,
    },
  }
}

export function removeItemCartAction(item: CoffeeModel) {
  return {
    type: CartActionEnum.REMOVE_ITEM,
    payload: {
      item,
    },
  }
}
