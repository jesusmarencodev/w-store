import React from 'react';
import { renderHook } from '@testing-library/react-hooks';
import configureStore from 'redux-mock-store';
import { Provider } from 'react-redux';
import { useShoppingCar } from '../../hooks/useShoppingCar';

const mockStore = configureStore([]);

describe('useShoppingCar custom hook', () => {
  it('does not dispatch getShopping action when handlerShowCar is called with change parameter and amount is 0', () => {
    const initialState = {
      products: {
        productList: [],
        shoppingCar: false,
      },
    };

    const store = mockStore(initialState);
    store.dispatch = jest.fn();

    const wrapper = ({ children }) => (
      <Provider store={store}>{children}</Provider>
    );

    const { result } = renderHook(() => useShoppingCar(), { wrapper });

    result.current.handlerShowCar(false);

    expect(store.dispatch).not.toHaveBeenCalled();
  });
});
