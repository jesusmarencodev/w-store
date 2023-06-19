import React from 'react';
import { useSelector } from 'react-redux';
import { Product } from './Product';

const ListProducts = () => {
  const { productList } = useSelector((state) => state.products);

  return (
    <article className="listProducts">
      <div className="shadow"></div>
      <div className="scrollbar">
        <div className="listProducts__list">
          {productList?.map((product) => (
            <Product key={product.id} product={product} />
          ))}
        </div>
      </div>
    </article>
  );
};

export default ListProducts;
