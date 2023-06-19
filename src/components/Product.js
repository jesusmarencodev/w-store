import React from 'react';
import { useDispatch } from 'react-redux';
import { getSelected } from '../redux/feature/productReducer';

export const Product = ({ product }) => {
  const dispatch = useDispatch();

  const handlerProduct = ({ id }) => {
    dispatch(getSelected(id));
  };

  return (
    <>
      <div
        onClick={() => handlerProduct(product)}
        className={`product d-flex a-center j-center  ${
          product.special ? ' product--large' : ' product--normal'
        }`}
      >
        <div className="product__quantity d-flex a-center j-center">
          <span>{product.quantity}</span>
        </div>
        <img
          className={`product__img${
            product.special ? ' product__img--large d-flex' : ''
          }`}
          src={product.image}
          alt={product.name}
        ></img>
      </div>
    </>
  );
};
