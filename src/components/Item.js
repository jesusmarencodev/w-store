import React from 'react';

const Item = ({ item }) => {
  return (
    <div className="shoppingCar__item">
      <div className="item d-flex a-center">
        <div className="item__quantity">{item.quantity}</div>
        <img src={item.image} alt={item.name} />
      </div>
      <div className="shadow"></div>
    </div>
  );
};

export default Item;
