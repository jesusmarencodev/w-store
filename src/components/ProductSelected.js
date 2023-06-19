import React from 'react';
import Description from './Description';
import { useProduct } from '../hooks/useProduct';

const ProductSelected = () => {
  const { product, handlerQuantity } = useProduct();
  return (
    <>
      {product?.name ? (
        <div>
          <div className={`product product-selected d-flex a-center j-center`}>
            <div className="product__quantity d-flex a-center j-center">
              <span>{product.quantity}</span>
            </div>
            <img
              className={`product__img d-flex`}
              src={product.image}
              alt={product.name}
            ></img>
          </div>
          <div className="product__buy d-flex a-center">
            <p className="buy__data">
              <span className="data-name">{product.name} </span>
              <span className="data-name data-point">&middot;</span>
              <span className="data-name data-price">${product.price}</span>
            </p>
            <div className="product__buttons">
              <button
                disabled={product.quantity === 0 ? true : false}
                onClick={() => handlerQuantity(-1)}
              >
                -
              </button>
              <button onClick={() => handlerQuantity(1)}>+</button>
            </div>
          </div>
          <Description description={product.description} />
        </div>
      ) : (
        <p className="product__description" style={{ paddingTop: '2.5rem' }}>
          Please choose a product on the left.
        </p>
      )}
    </>
  );
};

export default ProductSelected;
