import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';

export const useAmount = () => {
  const { productList } = useSelector((state) => state.products);
  const [amount, setAmount] = useState(0);

  useEffect(() => {
    setAmount(
      productList.reduce(
        (total, product) =>
          product.status ? total + product.price * product.quantity : total,
        0
      )
    );
  }, [productList]);

  return { amount };
};
