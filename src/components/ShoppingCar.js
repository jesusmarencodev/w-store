import React, { useEffect, useState } from 'react';
import Item from './Item';
import { useSelector } from 'react-redux';

const ShoppingCar = () => {
  const [products, setProducts] = useState([]);
  const { productList } = useSelector((state) => state.products);

  useEffect(() => {
    setProducts(productList.filter((product) => product.status === true));
  }, [productList]);

  return (
    <div className="shoppingCar">
      {products.map((item) => (
        <Item key={item.id} item={item} />
      ))}
    </div>
  );
};

export default ShoppingCar;
