import React from 'react';
import renderer from 'react-test-renderer';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import ListProducts from '../components/ListProducts';
import { products } from './mock/products';

const mockStore = configureStore([]);

describe('ListProducts component', () => {
  it('renders correctly', () => {
    const store = mockStore({
      products: {
        productList: products,
      },
    });

    const component = renderer.create(
      <Provider store={store}>
        <ListProducts />
      </Provider>
    );

    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
