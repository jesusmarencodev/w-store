import React from 'react';

import { useAmount } from '../hooks/useAmount';
import { useShoppingCar } from '../hooks/useShoppingCar';
import { useSelector } from 'react-redux';

const Head = () => {
  const { amount } = useAmount();
  const { shoppingCar } = useSelector((state) => state.products);
  const { handlerShowCar } = useShoppingCar();

  return (
    <>
      <header className="head d-flex a-center">
        <div className="head__logo">
          <img className="head__img" src="store.png" alt="store" />
        </div>
        <div
          className={`head__shop d-flex ${shoppingCar && 'head__shop--active'}`}
        >
          <div
            onClick={() => handlerShowCar(true)}
            className={`${
              shoppingCar ? 'shop__button--active' : 'shop__button'
            }`}
          >
            <img className="head__img-car" src="car.png" alt="store" />
            <span className={`shop-total ${shoppingCar && 'shop-active'}`}>
              ${amount}
            </span>
          </div>
          {shoppingCar && (
            <button
              onClick={() => handlerShowCar(false)}
              className="head__shop-button"
            >
              X
            </button>
          )}
        </div>
      </header>
    </>
  );
};

export default Head;
