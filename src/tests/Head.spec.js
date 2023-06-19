import React from 'react';
import renderer from 'react-test-renderer';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import Head from '../components/Head';

const mockStore = configureStore([]);

describe('Head component', () => {
  it('renders correctly', () => {
    const initialState = {
      products: {
        shoppingCar: false,
      },
    };

    const store = mockStore(initialState);

    const component = renderer.create(
      <Provider store={store}>
        <Head />
      </Provider>
    );

    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
