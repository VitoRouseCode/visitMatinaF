import axios from 'axios';
import { getAllProductsByShopId, post } from './productSlice';

export const getProductsByShopId = (shopId) => {
  //agregar por porps shopId
  return async (dispatch) => {
    try {
      console.log('entra al try de getproductsbyshopid');
      const products = await axios(`/product/${shopId}`); //agregar
      dispatch(getAllProductsByShopId(products.data));
    } catch (error) {
      console.log('no entra');
    }
  };
};

export const postProduct = (product) => {
  return async (dispatch) => {
    try {
      const posted = await axios.post(`/product/${product.shop_id}`, product);
      dispatch(post(posted));
    } catch (error) {
      console.log(error);
    }
  };
};
