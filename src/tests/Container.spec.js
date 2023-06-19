import React from 'react';
import renderer from 'react-test-renderer';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import { Container } from '../components/Container';

const mockStore = configureStore([]);

describe('Container component', () => {
  it('renders correctly', () => {
    const store = mockStore({
      products: {
        shoppingCar: false,
        productList: [],
      },
    });

    const component = renderer.create(
      <Provider store={store}>
        <Container />
      </Provider>
    );

    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
