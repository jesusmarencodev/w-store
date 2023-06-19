import React from 'react';

const Description = ({ description }) => {
  return (
    <div className="product__description">
      <div className="shadow"></div>
      <p> {description}</p>
      <div className="shadow"></div>
    </div>
  );
};

export default Description;
