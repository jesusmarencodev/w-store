import React from 'react';
import Head from './Head';
import { Container } from './Container';

const Main = () => {
  return (
    <div className="main">
      <Head />
      <h3 className="main__title">Store</h3>
      <Container />
    </div>
  );
};

export default Main;
