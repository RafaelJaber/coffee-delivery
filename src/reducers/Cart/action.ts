import { CoffeeModel } from '../../models/CoffeeModel.ts'
import { UserAddress } from '../../models/UserAddress.ts'

export enum CartActionEnum {
  ADD_ITEM = 'ADD_ITEM',
  REMOVE_ITEM = 'REMOVE_ITEM',
  CHECKOUT = 'CHECKOUT',
  CLEAR = 'CLEAR',
  CHANGE_ITEM_QUANTITY = 'CHANGE_ITEM_QUANTITY',
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

export function changeItemCartQuantityAction(
  item: CoffeeModel,
  quantity: number,
) {
  return {
    type: CartActionEnum.CHANGE_ITEM_QUANTITY,
    payload: {
      item,
      quantity,
    },
  }
}

export function addAddressToCartAction(item: UserAddress) {
  return {
    type: CartActionEnum.CHECKOUT,
    payload: {
      item,
    },
  }
}

export function clearCartAction() {
  return {
    type: CartActionEnum.CLEAR,
    payload: {},
  }
}
