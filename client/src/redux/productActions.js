import axios from 'axios'
import { getAllProductsByShopId } from './productSlice'

export const getProductsByShopId = (shopId) => {
  return async (dispatch) => {
    const products = await axios(`/product/${shopId}`)
    dispatch(getAllProductsByShopId(products.data))
  }
}
