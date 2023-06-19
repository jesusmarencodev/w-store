import React from 'react';
import ProductSelected from './ProductSelected';
import ShoppingCar from './ShoppingCar';
import { useSelector } from 'react-redux';
import { useAmount } from '../hooks/useAmount';

const QuantityProduct = () => {
  const { shoppingCar } = useSelector((state) => state.products);
  const { amount } = useAmount();

  return (
    <aside className="carShopping">
      <div style={{ marginRight: '2.5rem' }} className="shadow"></div>
      <div className="scrollbar">
        <div>{!shoppingCar ? <ProductSelected /> : <ShoppingCar />}</div>
        {shoppingCar && (
          <>
            <div className="carShopping__total">
              Total: <span>$ {amount}</span>
            </div>
            <div>
              <button className="carShopping__button d-flex a-center">
                <img className="carShopping__button-image" src="security.png" />
                <p>
                  Paga con <span>Piwom</span>
                </p>
              </button>
            </div>
          </>
        )}
      </div>
    </aside>
  );
};

export default QuantityProduct;
