import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getQuantity } from '../redux/feature/productReducer';

export const useProduct = () => {
  const dispatch = useDispatch();
  const { productList } = useSelector((state) => state.products);
  const [product, setProduct] = useState({});

  useEffect(() => {
    const productSelected = productList.find(
      (product) => product.selected === true
    );
    setProduct({ ...product, ...productSelected });
  }, [productList]);

  useEffect(() => {
    if (product.quantity > -1) {
      dispatch(
        getQuantity({ ...product, status: product.quantity > 0 ? true : false })
      );
    }
  }, [product.quantity, product.status]);

  const handlerQuantity = (quantity) => {
    if (product.quantity >= 0) {
      setProduct({
        ...product,
        quantity: product.quantity + quantity,
      });
    }
  };

  return {
    product,
    handlerQuantity,
  };
};
