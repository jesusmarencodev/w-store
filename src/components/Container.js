import React from 'react';
import ListProducts from './ListProducts';
import QuantityProduct from './QuantityProduct';

export const Container = () => {
  return (
    <div className="d-flex container">
      <ListProducts />
      <QuantityProduct />
    </div>
  );
};
