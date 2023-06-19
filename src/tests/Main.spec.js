import React from 'react';
import renderer from 'react-test-renderer';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';

import Main from '../components/Main';

const mockStore = configureStore([]);

describe('Main component', () => {
  it('Snapshot', () => {
    const initialState = {
      products: {
        productList: [],
        shoppingCar: false,
      },
    };

    const store = mockStore(initialState);

    const component = renderer.create(
      <Provider store={store}>
        <Main />
      </Provider>
    );

    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
