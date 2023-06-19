import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { getProducts, getShopping } from '../redux/feature/productReducer';
import productsData from '../data/products-data.json';

export const useChargeData = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    const products = JSON.parse(localStorage.getItem('products'));
    const shoppingCar = JSON.parse(localStorage.getItem('shoppingCar'));
    if (!products) {
      localStorage.setItem('products', JSON.stringify(productsData));
      dispatch(getProducts(productsData));
    } else {
      dispatch(getProducts(products));
    }

    if (!shoppingCar) {
      localStorage.setItem('shoppingCar', JSON.stringify(false));
    } else {
      dispatch(getShopping(shoppingCar));
    }
  }, []);
};
