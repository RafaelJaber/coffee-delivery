import { CoffeeModel } from './CoffeeModel.ts'
import { UserAddress } from './UserAddress.ts'

export interface CartModel {
  coffees: CoffeeModel[]
  userData: UserAddress | null
  tax?: number
  itens?: number
}
